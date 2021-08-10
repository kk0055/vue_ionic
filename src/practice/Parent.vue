<template>
  <div id="app">
    <Product name="トートバッグ" />
    <Product name="バックパック" />
    <Product v-bind:name="productName" />
    <Product :name="productName" />
    <Product name="ガトーショコラ" />
    <!-- Defaultの値 -->
    <Product/>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "App",
  components: {
    Product,
  },
    data() {
    return {
      productName: "リュックサック",
    };
  },
};
</script>