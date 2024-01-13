import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import VueSocketIO from 'vue-socket.io'
import counterModule from './modules/counter';
import router from './router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    io:{}
  },
  mutations:{
    setSocket:(state, socket) =>{
      state.io = socket;
      console.log('socket conectado');
    }
  },
  modules:{
    counterModule
  }
});

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:5000',
  vuex: {
      store,
      actionPrefix: 'socket_',
      mutationPrefix: 'SOCKET_'
  }
}))

new Vue({
  el: '#app',
  store,
  router,
  beforeCreate() {
    store.commit('setSocket',this.$socket);
  },
  render: h => h(App)
})
