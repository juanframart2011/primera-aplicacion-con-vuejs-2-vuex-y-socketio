<template>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
  
            <h2 class="text-center">Entrar al chat</h2>
  
            <span class="alert alert-danger" v-if="$store.state.chatModule.exists">
              Usuario ya existe
            </span>
  
            <div class="modal-header">
              <input class="form-control" type="text" v-model="username" />
            </div>
  
            <div class="modal-footer">
              <button class="btn btn-primary btn-block" @click="$emit('login', username)">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>
<script>
export default {
    name: 'login-modal',
    data(){
        return{
            usernam: ''
        }
    }
}
</script>
<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>