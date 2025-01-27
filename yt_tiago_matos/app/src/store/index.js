import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'John',
      last_name: 'Snow',
      email: 'john.snow@gmail.com'
  },
    products: [
      {
        id: 1,
        name: 'Bola de Basquete',
        price: 10,
        quantity: 10
      },
      {
        id: 2,
        name: 'Tênis de Basquete',
        price: 15,
        quantity: 5
      },
      {
        id: 3,
        name: 'Meia de Basquete',
        price: 5,
        quantity: 20
      }
    ],
    cart: [],
  },
  getters: {
  },
  mutations: {
    storeUser(state, data) {
      state.user = data;
      console.log('storeUser: ', data);
    },
    addProduct(state, data) {
      state.cart.push(data);
    },
    removeProduct(state, id) {
      const index = state.cart.findIndex(product => product.id === id);
      if (index!== -1) {
        state.cart.splice(index, 1);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
