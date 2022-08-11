<template>
  <div>
    <LightSaber v-if="loading" />
    <ul v-else>
      <li><span class="key">Name</span> : {{ perso.name }}</li>
      <li><span class="key">Gender</span> : {{ perso.gender | keyTransform }}</li>
      <li><span class="key">Height</span> : {{ perso.height }} cm</li>
      <li><span class="key">Mass</span> : {{ perso.mass }} kg</li>
      <li><span class="key">Hair color</span> : {{ perso.hair_color | keyTransform }}</li>
      <li><span class="key">Skin color</span> : {{ perso.skin_color | keyTransform }}</li>
      <li><span class="key">Eye color</span> : {{ perso.eye_color | keyTransform }}</li>
      <li><span class="key">Birth year</span> : {{ perso.birth_year }}</li>
      <li><span class="key">Homeworld</span> : {{ perso.homeworld }}</li>
      <li v-if="perso.films.length > 0"><span class="key">Films</span> : 
        <span 
          v-for="(item, index) in perso.films" 
          :key="item"
        >{{ index + 1 === perso.films.length ? item : `${item}, ` }}
        </span>
      </li>
      <li v-if="perso.vehicles.length > 0"><span class="key">Vehicles</span> : 
        <span 
          v-for="(item, index) in perso.vehicles" 
          :key="item"
        >{{ index + 1 === perso.vehicles.length ? item : `${item}, ` }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    loading() {
      return this.$store.getters.loadingPerso;
    },
    perso() {
      return this.$store.getters.persoDetails.find(el => el.id === +this.id)
    },
  },
  created() {
    this.$store.commit('setLoadingPerso', true);
    this.$store.dispatch('getPersoDetails', +this.id);
  },
  filters: {
    keyTransform(value) {
      if (!value) return ''
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 1rem;
  background-color: #212529;
  color: white;
  border-radius: 5px;
}

li {
  list-style-type: none;
  margin-bottom: 1rem;

  .key {
    font-weight: bold;
    color: #FFE81F;
    text-shadow: 0px 2px 1px black;
  }
}

</style>
