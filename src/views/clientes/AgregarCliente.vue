<template>
    <div>
        <h1>Agregar Cliente</h1>
        <form @submit.prevent="guardarCliente">
        <div class="mb-3">
            <label for="cedula" class="form-label">Cedula</label>
            <input type="text" class="form-control" id="cedula" name="cedula" v-model="cliente.cedula">
        
        </div>
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" v-model="cliente.nombre">
        </div>
        <div class="mb-3">
            <label for="telefono" class="form-label">Telefono</label>
            <input type="text" class="form-control" id="telefono" v-model="cliente.telefono">
        </div>
        <div class="d-grid gap-2">
        <button type="submit" class="btn btn-primary">Guardar</button>
        </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return{
            cliente : {}
        }
    },
    methods : {
         async guardarCliente(){
          await  axios.post('http://localhost:8080/api/v1/clientes',this.cliente)
            this.$router.push('clientes')
        }
    }
}
</script>