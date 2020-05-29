<template>
  <div id="app" >
    <div >

    <nav class="navbar navbar-dark bg-dark">
       <img alt="Vue logo" id="logo" src="./assets/logo.png">
       <div>
       <router-link :to="{name: 'inicio'}" class="btn btn-primary ">Inicio</router-link> |
      <router-link :to="{name: 'busqueda'}" class="btn btn-primary ">Busqueda</router-link> |
      <router-link :to="{name: 'ventas'}" class="btn btn-primary ">Ventas</router-link> |
      <router-link :to="{name: 'total'}" class="btn btn-primary ">Total</router-link>
       </div>


    </nav>
    
   
 
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
  </div>
</template>

<script>



export default {

 components: {
   
 }
}
</script>

<style scoped>
#logo {
  width: 15rem;
}

.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>
