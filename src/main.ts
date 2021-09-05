import { createApp } from 'vue'
import App from './App.vue'
import AuthService from './Service/AuthService'
import { MagicContainer } from './Service/MagicContainer'

MagicContainer.put('authService', new AuthService());

createApp(App).mount('#app')
