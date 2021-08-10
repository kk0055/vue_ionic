<template>
  <h3>{{ name }}</h3>
</template>

<script>
export default {
  name: "Product",
  props:  {
    name: {
      type: String,
      default: "デフォルト",
    },
  },
};
</script>

<style>
</style>