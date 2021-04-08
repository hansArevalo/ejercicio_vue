<template>
  <div class="hello"> 
    <h1>{{ $store.getters.mensaje }}</h1>
    <h4>{{$store.getters.nombreCompleto}}</h4>
    <h2>AMIGOS</h2>

    <!-- formulario para agregar contactos -->
    <div class="form-amigo container" >
      <div class="input-group flex-nowrap mb-3">
        <span class="input-group-text" id="addon-wrapping">Nombre:</span>
        <input type="text" class="form-control" placeholder="Nombre" aria-label="nombre" aria-describedby="addon-wrapping" v-model="amigo.nombre">
      </div>
      <div class="input-group flex-nowrap mb-3">
        <span class="input-group-text" id="addon-wrapping">Apellido:</span>
        <input type="text" class="form-control" placeholder="Apellido" aria-label="apellido" aria-describedby="addon-wrapping" v-model="amigo.apellido">
      </div>
          <div class="input-group flex-nowrap mb-3">
        <span class="input-group-text" id="addon-wrapping">Telefono:</span>
        <input type="number" class="form-control" placeholder="Telefono" aria-label="Username" aria-describedby="addon-wrapping" v-model="amigo.telefono">
      </div>
      <div class="container">
        <!-- boton agregar contacto -->
        <button @click="addFriend" class="btn btn-info"> Agregar amigo</button>
              
      </div>
    </div>
    <h2>{{formUpdate}} {{currentId}}</h2>
    <!-- Tabla donde se muestran los datos -->
    <div class="table-amigos">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Telefono</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(amigo,index) in getFriends" :key="index">
            <th scope="row">{{amigo.id}}</th>
            <td>
              <!-- <span v-if="formUpdate && currentId == index">
                <input v-model="updateAmigo.nombre" type="text" >
              </span>
              <span v-else>
                {{amigo.nombre}}
              </span> -->
              {{amigo.nombre}}
            </td>
            <td>
              {{amigo.apellido}}
            </td>
            <td>
              {{amigo.telefono}}
            </td>
            <td>
              <!-- boton eliminar contacto o amigo -->
              <button @click="deleteFriend(index)" class="btn btn-outline-danger"> Eliminar</button>
              <!-- boton actualizar contacto o amigo -->
              <button  class="btn btn-outline-success"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" @click="updateFriend(amigo.id)"> Editar</button>
            </td>
             <!-- Formulario para actualizar pendiente-->
          </tr>
        </tbody>
      </table>
    </div>
   
  </div>
  
  
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'HelloWorld',
  // modelo
  data(){
    return{
      cont: 1,
      formUpdate: false,
      amigo: {
        id:0,
        nombre:'',
        apellido:'',
        telefono:'',
      },
      currentId:'',
      updateAmigo: {
        id:0,
        nombre:'',
        apellido:'',
        telefono:'',
      }
    }
  },
  // metodos
  methods:{
    ...mapActions(['addFriendAction','deleteFriendAction','updateFriendAction']),
    addFriend(){
      this.cont= this.cont + 1;
      this.amigo.id = this.cont;
      this.addFriendAction(this.amigo);
      this.amigo= {
        id: '',
        nombre:'',
        apellido:'',
        telefono:'',
      } 
    },
    deleteFriend(index){
      this.deleteFriendAction(index);
    },
    updateFriend(id, updateAmigo){
      console.log(id);
      this.formUpdate= true;
      this.currentId = id;
      console.log(this.formUpdate);
      // this.updateFriendAction(id, this.updateAmigo);
    },
  },
  // propiedad computada
  computed:{
    ...mapGetters(['getFriends'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.form-amigo{
  margin-top: 5%;
  margin-bottom: 5%;
}
.table-amigos{
  margin-left: 5%;
  margin-right: 5%;
}
</style>

