<template>
    <div class="chat">
      <login-modal v-on:login="processLogin($event)" v-if="!username || exists"></login-modal>
  
      <div class="row">
        <div class="col-8">
          <h3 v-if="username">
            Bienvenido {{ username }}
          </h3>
  
          <div class="col card">
            <textarea class="form-control" v-model="message"></textarea>
  
            <br />
  
            <button class="btn btn-block btn-info" @click="sendMessage">
              Enviar mensaje
            </button>
  
            <div class="col-md-12">
              <ul>
                <li v-for="msg in chat">
                  {{ msg }}
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div class="col-4">
          <users-sidebar></users-sidebar>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import LoginModal from "./LoginModal";
    import {mapGetters, mapActions} from 'vuex';
    import UsersSidebar from "./UsersSidebar";
      export default {
      components: {
        UsersSidebar,
        LoginModal
      },
      data () {
          return {
              message: ''
        }
      },
      methods: {
        ...mapActions(['socket_login', 'socket_new_message']),
        processLogin (username) {
            this.socket_login(username);
        },
        sendMessage () {
            this.socket_new_message(this.message);
        }
      },
      computed: {
        ...mapGetters(['chat', 'username', 'exists'])
      }
    }
  </script>
  
  <style scoped>
    li {
      list-style: none;
      text-align: left;
    }
    .card {
      padding: 20px !important;
    }
  </style>
  