<template>
  <div>
    <LightSaber v-if="loading" />
    <div v-else class="container mt-5">
      <b-table
        striped
        hover
        bordered
        :borderless="true"
        dark
        class="customTable"
        :fields="fields"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <template  #cell(Actions)="data">
          <div class="text-center">
            <router-link :to="`/people/${data.item.id}`"><button type="button" class="btn btn-outline-light btn-sm button">View</button></router-link>
          </div>
        </template>
      </b-table>
      <b-pagination-nav class="customPagination"
        :link-gen="linkGen"
        :number-of-pages="9"
        limit="9"
        align="end"
        use-router
      ></b-pagination-nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      fields: [
        { key: "name", label: "Nom" },
        { key: "height", label: "Height" },
        { key: "gender", label: "Gender" },
        "Actions"
      ],
    };
  },
  created() {
    this.$store.dispatch('getPeople', this.$route.query.page ? +this.$route.query.page : 1);   
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    }
  },
  watch: {
    '$route' (to) {
      this.$store.dispatch('getPeople', to.query.page ? +to.query.page : 1)
    }
  },
  computed: {
    items() {
      let currentPage = this.$route.query.page ? +this.$route.query.page : 1; 
      const currentPeople = this.$store.getters.people.find(el => el.page === currentPage)
      return currentPeople.content;
    },
    rows() {
      return this.$store.getters.people.length;
    },
    loading() {
      return this.$store.getters.loadingPeople;
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  box-shadow: 2px 2px 0 black;
  border-color: #FFE81F;
  padding: 2px 10px;
  border-radius: 2px;
  color: #FFE81F;
  transition-duration: 0.4s;

  &:hover {
    color: black;
    background-color: #FFE81F;
    border-color: black;
  }
}

::v-deep .customPagination {
  .disabled .page-link {
    background: #212529;
    border-color: #212529;
    color: #FFE81F;
  }

  .active .page-link {
    background: #FFE81F;
    border-color: #212529;
    color: #212529;
  }

  .page-link {
    background: #212529;
    border-color: #212529;
    color: #FFE81F;
    transition-duration: 0.3s;

    &:hover {
      background: #FFE81F;
      color: #212529;
    }
  }
}

::v-deep .customTable {
  thead th {
    font-weight: bold;
    color: #FFE81F;
    text-shadow: 0px 2px 1px black;
  }
}
</style>