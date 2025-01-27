import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

// const app = createApp(App).use(router);
// app.mount('#app');

// // Expor a instância Vue globalmente
// window.app = app;



