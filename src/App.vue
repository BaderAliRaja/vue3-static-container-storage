<template>
  <button @click="authService.makeLoginRequest()">DO A FAKE LOGIN</button>
  <button @click="clear">CLEAR</button>
  <User style="border: 3px solid red; padding: 10px; margin: 10px;" />
  <User style="border: 3px solid blue; padding: 10px; margin: 10px;" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import User from './components/User.vue'
import AuthService from './Service/AuthService';
import { MagicContainer } from './Service/MagicContainer'

export default defineComponent({
  'components': { User },
  'setup': () => {
    
    const authService = MagicContainer.grab<AuthService>('authService');

    return {
      authService,
      clear: () => localStorage.clear()
    }
  }
})
</script>