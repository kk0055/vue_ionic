<template>
  <div id="app">
    <Product name="トートバッグ" />
    <Product name="バックパック" />
    <Product v-bind:name="productName" />
    <Product :name="productName" />
    <Product name="ガトーショコラ" />
    <!-- Defaultの値 -->
    <Product/>
    
    <Slot>スロット</Slot>
    <Slot>
   <template v-slot:nm>名前親</template>
    </Slot>
    <Slot>
    <template v-slot:add>渋谷</template>
    </Slot>
  
 
  </div>
</template>

<script>
import Product from "./Product.vue";
import Slot from "./Slot.vue";

export default {
  name: "App",
  components: {
    Product,
    Slot,
  },
    data() {
    return {
      productName: "リュックサック",
    };
  },
};
</script>