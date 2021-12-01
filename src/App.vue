<template>
  <div class="container">
    <Nanbar/>
    <router-view class="espacio-contenido"/>
      <Footer/>
  </div>      
</template>
<script>

import Nanbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components : {
    Nanbar,Footer 
  }
}
</script>
<style>
.espacio-contenido{
  padding-bottom: 20px;
  padding-top: 20px;
}
</style>