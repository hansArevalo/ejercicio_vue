import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    amigos:[
      {
        nombre:'Maria',
        apellido: 'Mendoza',
        telefono: '32145677',
      }
    ],
    
  },
  mutations: {
    addAmigo(state, amigo){
    state.amigos.push(amigo);
    },
    deleteAmigo(state, index){
      state.amigos.splice(index,1);
    }

  },
  actions: {
    addAmigoAction({commit},amigo){
      commit('addAmigo', amigo); 
    },
    deleteAmigoAction({commit},index){
      commit('deleteAmigo', index);
    }

  },
  getters:{
    getAmigos(state){
      return state.amigos;
    }
  }
})
