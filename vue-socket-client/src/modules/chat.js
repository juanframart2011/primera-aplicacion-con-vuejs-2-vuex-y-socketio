const chatModule = {
    state: {
      chat: [],
      users: [],
      username: null,
      exists: false
    },
    //emitimos acciones a nodejs desde nuestra app
    actions: {
      socket_new_message: ({rootState}, message) => {
        rootState.io.emit('newMessage', message);
      },
      socket_login: ({rootState}, username) => {
        rootState.io.emit('login', username);
      }
    },
    //estas mutaciones serán ejecutadas por Node.js, deben comenzar por SOCKET_
    mutations: {
      SOCKET_NEW_MESSAGE (state, message) {
        state.chat.push(message[0]);
      },
      SOCKET_LOGIN (state, data) {
        state.users = data[0].users;
        state.username = data[0].username;
        state.exists = false;
      },
      SOCKET_USER_EXISTS (state) {
        state.exists = true;
      },
      SOCKET_USER_JOINED (state, data) {
        state.users = data[0].users;
        state.chat.push(`Usuario ${data[0].username} ha entrado en la sala`);
      },
      SOCKET_USER_LEFT (state, data) {
        state.users = data[0].users;
        state.chat.push(`Usuario ${data[0].username} ha abandonado la sala`);
      },
    },
    getters: {
      chat (state) {
        return state.chat;
      },
      username (state) {
        return state.username;
      },
      users (state) {
        return state.users;
      },
      exists (state) {
        return state.exists;
      }
    }
  };
  
export default chatModule;