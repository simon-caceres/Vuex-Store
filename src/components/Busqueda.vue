<template>
<div class="container">
  <h1 class="title text-center">Busqueda</h1>
  <br>
  <div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="busca por codigo" v-model="buscando">
        <div class="input-group-append">
            <span class="input-group-text"><button class="btn btn-primary" @click.prevent="filtrado"><i class="fas fa-search"></i></button></span>
        </div>
        </div>
  </div>
    <div v-if="showResult">
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
            <tr v-for="(item, index) in juegos" :key ="index" v-bind:style="{ color: item.color }">
            <th >{{item.codigo}}</th>
            <th >{{item.nombre}}</th>
            <th>{{item.stock}}</th>
            <th>{{item.precio}}</th>
            <th>{{item.destacado}}</th>
            </tr>
        </tbody>
        </table>
  </div>

  <div v-else>
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
            <tr  v-bind:style="{ color: result.color }">
            <th >{{result.codigo}}</th>
            <th >{{result.nombre}}</th>
            <th>{{result.stock}}</th>
            <th>{{result.precio}}</th>
            <th>{{result.destacado}}</th>
            </tr>
        </tbody>
        </table>
  </div>


</div>
</template>

<script>
export default {
    data() {
        return {
            juegos: [],
            buscando: '',
            showResult: true,
            result: ''
        }
    },

    created() {
        this.classes()
    },

    methods: {
        classes() {
             this.juegos = this.$store.state.juegos
        },

        filtrado() {
            const resultado = this.$store.state.juegos.find( item => item.codigo == this.buscando );
            console.log(resultado)
            this.result = resultado
            this.showResult = false
        }
    }

}
</script>

<style>

</style>