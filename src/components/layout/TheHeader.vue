<template>
  <div>
    <h1>Starwars characters</h1>
    <b-breadcrumb class="mt-3" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <b-breadcrumb-item to="/" >Home</b-breadcrumb-item>
      <b-breadcrumb-item active>
        <span v-if="$route.name !== 'index'">Character name</span>
        <span v-else>...</span>
      </b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
h1 {
  font-family: "STJEDISE", sans-serif;
  color: black;
  text-shadow: 0px 0px 10px #FFE81F;
}

a {
  color: #FFE81F;
  text-decoration: none;

  &:hover {
    color: white;
  }
}
</style>