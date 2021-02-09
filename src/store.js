import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        posts: []
    },
    mutations: {
        increment( state, quantity ) {
            state.count+=quantity
        },
        setPosts( state, posts ) {
            state.posts = posts
        }
    },
    actions: {
        async setPosts({commit}) {
            try {
                const posts = await api.getPosts()
                commit('setPosts', posts)
              } catch(err) {
                console.log(err.message)
              }
        }
    },
    getters : {
        counter(state) {
            return state.count
        },
        posts(state) {
            return state.posts
        }
    }  
})
