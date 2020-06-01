import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    mensaje: 'Juegos de Pc y Consola',
    title: '32bits Spa.',
    vendidos: 0,
    listadeVendidos: [],

    juegos: [
       {codigo: "0001", nombre: "Sekiro", stock: 100, precio: 30000, color: "red", destacado: "true"},

       {codigo: "0002", nombre: "fifa 21", stock: 100, precio: 25000, color: "blue", destacado:"false"},

       {codigo: "0003", nombre: "Gears of War 4", stock: 100, precio: 15000, color:"green", destacado:"true"},

       {codigo: "0004", nombre: "Mario Tennis Aces", stock: 100, precio: 35000, color:"yellow", destacado:"false"},

       {codigo: "0005", nombre: "Bloodborne", stock: 100, precio: 10000, color:"blue", destacado:"false"},

       {codigo: "0006", nombre: "Forza Horizon 4", stock:  100, precio: 20000, color:"red", destacado:"true"}
      ]
  },

  getters: {
    listarJuegos: (state) => {
      return state.juegos.filter((producto)=>{
        return producto.stock > 0
      })
    },

    listarVendidos: (state) => {
      return state.listadeVendidos
    },

    mostrarPrecio: (state) => {
      const options2 = { style: 'currency', currency: 'USD' };
      const numberFormat2 = new Intl.NumberFormat('en-US', options2);
      return numberFormat2.format(state.vendidos)
    }

 
  },

  mutations: {
    comprado: (state, producto) => {
      state.juegos.forEach((p)=>{
        if(p.codigo == producto.codigo && p.stock > 0){
          state.listadeVendidos.push({
            codigo: p.codigo,
            nombre: p.nombre,
            precio: p.precio
          })
          state.vendidos += p.precio 
          p.stock--
        }
      })  
    }, 

  },
  actions: {}
});

export default store;
