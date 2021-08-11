<template>
<ul>
  <li v-for="user in users"  v-bind:key="user.name">{{ user.name }} ({{ user.email }})</li>
  
  <li v-for="user in usersVuex"  v-bind:key="user.name">{{ user.name }} ({{ user.email }})</li>
</ul>
</template>

<script>
export default {
//propsを使ってAppから渡されたdataを受け取りv-forディレクティブで展開。
props : {
  users: Object,
},
computed :{
  usersVuex : function(){
    return this.$store.state.usersObj;

  }
}
}
</script>