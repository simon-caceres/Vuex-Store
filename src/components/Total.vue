<template>
<diV>
  <h1>Total</h1>
  
  <div class="container">
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Codigo</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(producto, clave) in listarVendidos" :key="clave">
      <th scope="row" >{{producto.codigo}}</th>
      <th scope="row" >{{producto.nombre}}</th>
      <th scope="row" >$ {{producto.precio}}</th>
    </tr>
  </tbody>
</table>
      <table class="table">
        <th> <h3> Total venta: CLP {{mostrarPrecio}} </h3> </th>
      </table>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

  computed: {
    ...mapGetters(['listarVendidos', 'mostrarPrecio'])
  }
}
</script>

<style>

</style>