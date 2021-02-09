<template>
  <div>
    <div>
    <h1>Counter</h1>
    <router-link to="/">Click here to go to TodoList</router-link>
    <hr>
    <p>Count: {{this.$store.getters.counter}}</p>
    <button v-on:click='increment'>increment with vuex</button>
   
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
    
    }
  },
  computed: {
    //   counter() {
    //       return this.$store.counter
    //   }
  },

  methods: {
    increment() {
        this.$store.commit('increment', 1)
    }
  }
}
</script>

<style>

</style>
