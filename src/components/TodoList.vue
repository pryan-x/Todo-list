<template>
  <div>
    <div>
    <h1>ToDoList!</h1>
    <router-link to="/counter">Click here to go to counter</router-link>
    </div>
    <div>
      <label for='create-post'> post a task </label>
      <input type='text' id='create-post' v-model='text' placeholder='Create a task'>
      <button v-on:click='createPost'>Post</button>
    </div>
    <hr>
    <p v-if='error'> {{ error }} </p>
    <div>
    <div 
      v-for='(post, index) in postsReverse'
      v-bind:item='post'
      v-bind:index='index'
      v-bind:key='post._id'
    >
      <!-- v-on:dblclick='deletePost(post._id)' -->
      {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()+1}/${post.createdAt.getFullYear()}` }}
      <p> {{ post.text }} </p>
      <button v-on:click='deletePost(post._id)'>delete task</button>

    </div>
    </div>
  </div>
</template>

<script>
import api from '../api.js'

export default {
  name: 'TodoList',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  computed: {
    postsReverse() {
      return [...this.$store.getters.posts].reverse()
      // return [...this.$store.state.posts].reverse()

    }
  },
  async created() {
    // try {
    //   this.posts = await api.getPosts()
    // } catch(err) {
    //   this.error = err.message
    // }
    this.$store.dispatch('setPosts')
  },

  methods: {
    async createPost() {
      await api.insertPost(this.text)
      // this.posts = await api.getPosts()
      this.$store.dispatch('setPosts')

    },
    async deletePost(id) {
      await api.deletePost(id) 
      // this.posts = await api.getPosts()
      this.$store.dispatch('setPosts')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
