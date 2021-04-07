<template>
  <div class="hello"> 
    <h1>{{ $store.getters.mensaje }}</h1>
    <h4>{{$store.getters.nombreCompleto}}</h4>
    <h2>AMIGOS</h2>
    <div class="form-amigo container" >
      <div class="input-group flex-nowrap mb-3">
        <span class="input-group-text" id="addon-wrapping">Nombre:</span>
        <input type="text" class="form-control" placeholder="nombre" aria-label="nombre" aria-describedby="addon-wrapping" v-model="amigo.nombre">
      </div>
      <div class="input-group flex-nowrap mb-3">
        <span class="input-group-text" id="addon-wrapping">Apellido:</span>
        <input type="text" class="form-control" placeholder="apellido" aria-label="apellido" aria-describedby="addon-wrapping" v-model="amigo.apellido">
      </div>
          <div class="input-group flex-nowrap mb-3">
        <span class="input-group-text" id="addon-wrapping">Telefono:</span>
        <input type="number" class="form-control" placeholder="telefono" aria-label="Username" aria-describedby="addon-wrapping" v-model="amigo.telefono">
      </div>
      <div class="container">
        <button @click="addAmigo" class="btn btn-info"> agregar amigo</button>
              
      </div>
    </div>
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
          <tr v-for="(amigo,index) in getAmigos" :key="index">
            <th scope="row">{{index + 1}}</th>
            <td>{{amigo.nombre}}</td>
            <td>{{amigo.apellido}}</td>
            <td>{{amigo.telefono}}</td>
            <td>
              <button @click="deleteAmigo(index)" class="btn btn-danger"> eliminar</button>
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
  data(){
    return{
      amigo: {
        nombre:'',
        apellido:'',
        telefono:'',
      }
    }
  },
  methods:{
    ...mapActions(['addAmigoAction','deleteAmigoAction']),
    addAmigo(){
      this.addAmigoAction(this.amigo);
      this.amigo= {
        nombre:'',
        apellido:'',
        telefono:'',
      } 
    },
    deleteAmigo(index){
      console.log(index);
      this.deleteAmigoAction(index);
    }
  },
  computed:{
    ...mapGetters(['getAmigos'])
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

