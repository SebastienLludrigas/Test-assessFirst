import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: [],
    loadingPeople: false,
    loadingPerso: false,
    persoDetails: []
  },
  getters: {
    people(state) {
      return state.people
    },
    loadingPeople(state) {
      return state.loadingPeople
    },
    loadingPerso(state) {
      return state.loadingPerso
    },
    persoDetails(state) {
      return state.persoDetails
    }
  },
  mutations: {
    setPeople(state, payload) {
      payload.people.forEach(el => {
        el.height = el.height + ' cm'
        el.gender = el.gender.includes('n/a') ? 
                    el.gender.toUpperCase() :
                    el.gender.charAt(0).toUpperCase() + el.gender.slice(1)
        el.id = +el.url.slice(29, -1)
      })
    
      state.people.push({ page: payload.pageNum, content: payload.people })
      state.loadingPeople = false
    },
    setPersoDetails(state, payload) {
      state.persoDetails.push(payload)
      state.loadingPerso = false
    },
    setLoadingPerso(state, payload) {
      state.loadingPerso = payload
    },
    setLoadingPeople(state, payload) {
      state.loadingPeople = payload
    }
  },
  actions: {
    async getPeople(context, pageNum) {
      context.commit('setLoadingPeople', true)
      if (context.getters.people.find(el => el.page === pageNum) === undefined) {
        try {
          const queryParam = pageNum !== 1 ? `?page=${pageNum}` : ''
          const response = await axios.get(`https://swapi.dev/api/people/${queryParam}`)
  
          const people = response.data.results
          context.commit('setPeople', { people, pageNum })
        } catch (err) {
          console.error(err)
        }
      } else {
        context.commit('setLoadingPeople', false)
      }
    },
    
    async getPersoDetails(context, personId) {
      if (!context.getters.persoDetails.find(el => el.id === personId)) { 
        try {
          const response = await axios.get(`https://swapi.dev/api/people/${personId}`)
  
          const filmsArray = [];
          const vehiclesArray = [];
          let homeworld;
          
          for (const prop in response.data) {
            if (prop === 'films' && response.data.films.length > 0) {
              try { 
                const resultFilms = await Promise.allSettled(response.data.films.map(el => axios.get(el)))
                resultFilms.forEach(async res => {
                  try {
                    const resultFilmsData = res.value.data
  
                    filmsArray.push(resultFilmsData.title)
                  } catch (err) {
                    console.error(err)
                    filmsArray.push('request failed')
                  }
                })
              } catch (err) {
                console.error(err)
              }
            } else if (prop === 'vehicles' && response.data.vehicles.length > 0) {
              try { 
                const resultVehicles = await Promise.allSettled(response.data.vehicles.map(el => axios.get(el)))
                resultVehicles.forEach(async res => {
                  try {
                    const resultVehiclesData = res.value.data
  
                    vehiclesArray.push(resultVehiclesData.name)
                  } catch (err) {
                    console.error(err)
                    vehiclesArray.push('request failed')
                  }
                })
              } catch (err) {
                console.error(err)
              }
            } else if (prop === 'homeworld' && response.data.homeworld.length > 0) {
              try {
                const result = await axios.get(response.data.homeworld);
  
                homeworld = result.data.name
              } catch (err) {
                console.error(err)
              }
            }
          }
  
          response.data.id = personId
          response.data.films = filmsArray
          response.data.vehicles = vehiclesArray
          response.data.homeworld = homeworld
  
          context.commit('setPersoDetails', response.data);    
        } catch (err) {
          console.error(err)
        }
      } else {
        context.commit('setLoadingPerso', false)
      }
    }
  }
})
