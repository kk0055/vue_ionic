<template>
  <div id="app">
    <p><button v-on:click="increment">UP</button></p>
    <p><button v-on:click="actions">UP</button></p>
    <h1>Count:{{ count }}</h1>


  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    increment: function () {
      //stateの更新を行うためには、mutations(ミューテーション)を使う
      //mutationsはcommitを使って実行
      this.$store.commit("increment");
    },
    actions() {
      this.$store.dispatch('incrementOne')
    }

  },
  computed: {
    count: function () {
      return this.$store.state.count;
    },
  },
};
</script>