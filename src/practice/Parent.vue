<template>
  <div id="app">
    <Product name="トートバッグ" />
    <Product name="バックパック" />
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "App",
  components: {
    Product,
  },
};
</script>