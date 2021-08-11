<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <h1>{{ $store.state.message }}</h1>
     <HelloVuex></HelloVuex>
  </div>
</template>
<script>
import HelloVuex from './components/HelloVuex.vue'

export default {
  name: 'app',
  data: function() {
    return {
      message : 'Hello Vuex'
    }
  },
  components: {
    HelloVuex
  }
}
</script>