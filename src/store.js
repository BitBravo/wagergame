import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
  },
  getters: {
    loggedIn(state) {
      return state.token != null;
    }
  },
  mutations: {
    retriveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    }
  },
  actions: {
    retriveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/users/login', {
          email: credentials.email,
          password: credentials.password
        })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          // console.log(error);
          reject(error);
        })
     })
    },    
    retriveTokenMeta(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/users/auth/meta', {
          address: credentials.address
        })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          // console.log(error);
          reject(error);
        })
     })
    },    
    retriveTokenFB(context, credentials) {
      return new Promise((resolve, reject) => {

        axios.post('http://localhost:3000/users/auth/facebook/token', {
          email: credentials.email,
          name: credentials.name,
          id: credentials.id,
        })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          // console.log(error);
          reject(error);
        })
     })
    },    
    retriveTokenTwitch(context, credentials) {
      return new Promise((resolve, reject) => {

        axios.post('http://localhost:3000/users/auth/twitch', {
          name: credentials.name,
          email: credentials.email,
          id: credentials.id
        })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          // console.log(error);
          reject(error);
        })
     })
    },
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = context.state.token;
      if (context.getters.loggedIn) {
        return new Promise((resove, reject) => {
          axios.post('http://localhost:3000/users/logout')
          .then(response => {
            localStorage.removeItem('token')
            context.commit('destroyToken')
            resove(response)
          })
          .catch( error => {
            localStorage.removeItem('token')
            context.commit('destroyToken')
            reject(error);
          })
        })
      }
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/users/register', {
          name: data.name,
          email: data.email,
          password: data.password
        })
        .then(response => {
          const token = response.data.token;

          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          // console.log(error);
          reject(error);
        })
     })
    }
  }
})
