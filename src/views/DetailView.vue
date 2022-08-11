<template>
  <div>
    <TheHeader />
    <PeopleDetail :id="id"/>
  </div>
</template>

<script>
import PeopleDetail from '@/components/PeopleDetail.vue'
import TheHeader from '@/components/layout/TheHeader.vue'

export default {
  props: ['id'],
  components: {
    PeopleDetail,
    TheHeader
  }
}
</script>

<style lang="scss" scoped>

</style>