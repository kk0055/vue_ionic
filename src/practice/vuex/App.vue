<template>
  <div id="app">
    <!-- <h1>{{ message }}</h1> -->
    <!-- <h1>{{ $store.state.message }}</h1> -->
     <HelloVuex></HelloVuex>
       <br/>
    <p>{{ computed }}</p>
       <br/>
      <!-- dataからとVuexから取得 -->
     <UserList v-bind:users="users"></UserList>
<br/>
    <h1>Increment</h1>
     <Mutations/>
  </div>
</template>
<script>
import HelloVuex from './components/HelloVuex.vue'
import UserList from './components/UserList.vue'
import Mutations from './components/Mutations.vue'

export default {
  name: 'app',
  data: function() {
    return {
      message : 'Hello Vuex',
      users:[
      {name: 'John', email:'john@example.com', age:22},
      {name: 'Merry', email: 'merry@facebook.com',age:33},
      {name: 'Ken', email: 'ken@amazon.com',age:29}
      ]
    }
  },
  components: {
    HelloVuex,
    UserList,
    Mutations
  },
  computed: {
    computed : function(){
  return this.$store.state.messageComputed
  }
  }
}
</script>