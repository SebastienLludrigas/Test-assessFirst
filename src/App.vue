<template>
  <div class="container mt-3">
    <RouterView v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </RouterView>
  </div>
</template>

<script>

</script>

<style lang="scss">
body {
  background: repeat url("./assets/images/space.png");
}

@font-face {
  font-family: "STJEDISE";
  src: local("STJEDISE"),
  url(./assets/fonts/STJEDISE.TTF) format("truetype");
}

</style>
