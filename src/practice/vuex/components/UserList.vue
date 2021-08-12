<template>
<ul>
  <li v-for="user in users"  v-bind:key="user.name">{{ user.name }} ({{ user.email }})</li>
<br/>
  <li v-for="user in usersVuex"  v-bind:key="user.name">{{ user.name }} ({{ user.email }})</li>
  <br/>
  <li v-for="user in usergetters"  v-bind:key="user.name">{{ user.name }} ({{ user.email }})</li>
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
  },
  usergetters: function(){
  return this.$store.getters.usergetters;
  }
}
}
</script>