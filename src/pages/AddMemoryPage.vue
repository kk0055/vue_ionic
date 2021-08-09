<template>
  <base-layout page-title="Add a Memory" page-default-back-link="/memories">
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script>
import CreateMemoryForm from "../components/memories/CreateMemoryForm.vue";
export default {
  components: {
    CreateMemoryForm,
  },
  methods: {
    saveMemory(memoryData) {
      //vueXのaddMemory mutationsをディスパッチ
      this.$store.dispatch('addMemory', memoryData);
      //memoriesPageへ
      this.$router.replace('/memories');
    }
  }
};
</script>