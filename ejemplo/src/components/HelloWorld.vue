<template>
  <div class="hello"> 
    
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
        <button @click="addFriend" class="btn btn-info"> Guardar</button>
              
      </div>
    </div>
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
              <button  class="btn btn-outline-success"  @click="updateFriend(amigo)"> Editar</button>
            </td>
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
      amigo: {
        id:0,
        nombre:'',
        apellido:'',
        telefono:'',
      }, 
    }
  },
  // metodos
  methods:{
    ...mapActions(['addFriendAction','deleteFriendAction','updateFriendAction']),
    addFriend(){
      if(this.amigo.id == ""){
        this.cont= this.cont + 1;
        this.amigo.id = this.cont;
        this.addFriendAction(this.amigo);
      }else{
        this.updateFriendAction(this.amigo);
      } 
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
    updateFriend(amigo_upDate){
      this.amigo=amigo_upDate;

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

