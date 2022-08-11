<template>
  <div>
    <TheHeader />
    <PeopleList />
  </div>
</template>

<script>
import PeopleList from '@/components/PeopleList.vue'
import TheHeader from '@/components/layout/TheHeader.vue'

export default {
  components: {
    PeopleList,
    TheHeader
  }
}
</script>
