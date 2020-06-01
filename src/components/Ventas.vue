<template>
<div class="container">
  <h1> Ventas: </h1>

  <div class="container">
        <table class="table">
        <thead>
            <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>destacado</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in listarJuegos" :key ="index" v-bind:style="{ color: item.color }">
            <th >{{item.codigo}}</th>
            <th >{{item.nombre}}</th>
            <th>{{item.stock}}</th>
            <th>{{item.precio}}</th>
            <th><button class="btn btn-success" @click="vender(item)">Comprar</button></th>
            </tr>
        </tbody>
        </table>

        
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {


computed: {
  ...mapGetters(['listarJuegos', 'listarVendidos'])
},

methods: {
    vender(producto){
      this.$store.commit('comprado', producto)
    }

}
}
</script>

<style>

</style>