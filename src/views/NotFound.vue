<template>
  <div class="container d-flex flex-column align-items-center text-center containerCustom">
    <h1>404</h1>
    <h2>You lost your own way my son</h2>
    <router-link to="/" class="back">
      <b-icon icon="caret-left-fill"></b-icon><span>Back to home</span>
    </router-link>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
h1 {
  font-family: "STJEDISE", sans-serif;
  color: white;
  font-size: 6em;
}

@font-face {
  font-family: "Starjout";
  src: local("Starjout"),
  url(../assets/fonts/Starjout.ttf) format("truetype");
}

h2 {
  font-family: "Starjout", sans-serif;
  color: white;
  text-shadow: 0px 2px 0px #FFE81F;
  font-size: 5em;
}

.back {
  font-family: "STJEDISE", sans-serif;
  margin-top: 2rem;
  background-color: #FFE81F;
  padding: 0.8rem 1.3rem;
  border-radius: 3px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.2rem;

  span {
    margin-left: 0.2rem;
  }
}

.containerCustom {
  margin-top: 12rem;
}
</style>