<template>
    <div>
        <h1>Clientes</h1>
        <div align = "right">
            <button class="btn btn-primary" @click="addCliente">Agregar Cliente</button>
        </div>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Cedula</th>
            <th scope="col">Nombre</th>
            <th scope="col">Telefono</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cliente in clientes" :key="cliente.id">
            <td>{{cliente.id}}</td>
            <td>{{cliente.cedula}}</td>
            <td>{{cliente.nombre}}</td>
            <td>{{cliente.telefono}}</td>
             <td><button class="btn btn-danger" @click="deleteCliente(cliente.id)">Eliminar</button></td>
            </tr>
        </tbody>
        </table>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data (){
        return{
            clientes : []
        }
    },
    methods : {
        async getClientes(){
            const resp = await axios.get('http://localhost:8080/api/v1/clientes')
            this.clientes = resp.data
        },
        addCliente(){
            this.$router.push("agregar-cliente")
        },
        async deleteCliente(idCliente){
            try{
                await axios.delete('http://localhost:8080/api/v1/clientes/'+idCliente)
                this.getClientes()
            }catch(error){
                alert('No se puedo eliminar')
            }
           
        }
    },
    mounted(){
        this.getClientes()
    }
}
</script>
