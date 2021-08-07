<template>
  <div>
      <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/memories"
  >
    </base-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memodyId:null
    }
  },
  computed: {
      loadedMemory() {
        return this.$store.getters.memory();
      }
  },
  watch: {
    '$route'(currentRoute) {
      this.memodyId = currentRoute.params.id
    }
  }
}
</script>