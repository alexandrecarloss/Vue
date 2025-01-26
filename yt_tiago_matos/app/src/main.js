import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/style.css';

const app = createApp(App);
app.mount('#app');

// Expor a instância Vue globalmente
window.app = app;


