<template>
  <div class="hello">
    <!-- primer parte 
   <h2 >{{msg}}</h2>-->

   <!-- segunda parte 
   <h2 >mi edad es: {{edad}}</h2>-->

    <!-- tercera parte 
    <button  @click="mensaje" >
      mensaje
     
    </button>-->
    <!-- cuarta parte 
  <h2>{{suma}}</h2>

  <button @click="sumar">
    sumar
  </button>
     quinta parte 


  <button @click="restar">
    restar
  </button>-->
     <!-- sexta parte

 <h2 v-if="suma >=0 " >{{suma}}</h2>
  <button @click="sumar">
    sumar
  </button>

  <button @click="restar">
    restar
  </button> -->
    
       <!-- septima parte

 <h2 v-for="numero in numeros" :key="numero">
   {{numero}}</h2>
  <button @click="sumar">
    sumar
  </button>

  <button @click="restar">
    restar
  </button>
  -->

<h2>la suma total es de: {{suma}}</h2>
   <h2 v-for="numero in numeros" :key="numero">
   {{numero}}</h2>
  <button @click="add">
    agregar
  </button>




  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
   
    return {
      // 'suma' : 0,
       // <!-- septima parte -->
      'numeros': [
        1,2,3,4,5,6
      ],
      }
  },
  props: {
    msg: String,
    // <!-- segunda parte -->
    edad:String

  },
     // <!-- tercera parte -->
  methods:{
    mensaje(){
      alert("click");
    },
     // <!-- cuarta parte -->
    sumar(){
      this.suma= this.suma + 1;
      
    },
     // <!-- quinta parte -->
    restar(){
      this.suma= this.suma - 1;
    },
    add(){

      this.numeros.push(this.numeros.length + 1);
      // this.suma=0;
      //for(var i=0; i<this.numeros.length;i++){
      //  this.suma=this.suma + this.numeros[i];
      //}
 
    }
    
  },
  computed:{
    suma(){
      var suma=0;
      for(var i=0; i<this.numeros.length;i++){
        suma=suma + this.numeros[i];
      }
      return suma;
    }
    
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
</style>
