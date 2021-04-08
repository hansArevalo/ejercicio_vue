import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    amigos:[
      {
        id: 1,
        nombre:'Maria',
        apellido: 'Mendoza',
        telefono: '32145677',
      }
    ],
    
  },
  mutations: {
    addFriend(state, amigo){
    state.amigos.push(amigo);
    },
    deleteFriend(state, index){
      state.amigos.splice(index,1);
    },
    updateFriend(amigo, id){
      console.log(amigo);
    }

  },
  actions: {
    addFriendAction({commit},amigo){
      commit('addFriend', amigo); 
    },
    deleteFriendAction({commit},index){
      commit('deleteFriend', index);
    },
    updateFriendAction({commit},index){
      commit('updateFriend', index);
    }

  },
  getters:{
    getFriends(state){
      return state.amigos;
    }
  }
})
