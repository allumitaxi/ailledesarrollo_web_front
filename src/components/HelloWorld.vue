<template>
  <div>

  </div> 
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      nombre : 'Alex',
      mostrar : true,
      clientes : [{id:1, nombre : 'Alex'},{id:2, nombre : 'Iván'}],
      url : 'https://www.google.com',
      numero1 : 0,
      numero2 : 0,
      resultado : 0,
      tarea : null,
      tareas : ['descripcion']
    }
  },
  methods : {
    metodo1 () {
        alert("Click")
    },
    sumar () {
      this.resultado = this.numero1+this.numero2
    },
    agregarTarea () {
      alert("agregar tarea "+ this.tarea)
      this.tareas.push(this.tarea)
    }
  }
}
</script>

<style scoped>
li {
  color: blue;
  font-size: 34px;
}
</style>
