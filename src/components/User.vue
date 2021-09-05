<template>
  <div v-if="authService.user !== null">
    {{ authService.user.fullName() }}

    <ul v-if="authService.user.tasks.length > 0">
      <li v-for="(task, index) in authService.user.tasks" :key="index" v-text="task.name"></li>
    </ul>

    <br/>

    <input v-model="taskName">
    <button @click="addTask">ADD TASK</button>

  </div>
  <div v-else>
    NO USER
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AuthService from '../Service/AuthService';
import { MagicContainer } from '../Service/MagicContainer';

export default defineComponent({
  'setup': () => {
    
    const authService = MagicContainer.grab<AuthService>('authService');

    const taskName = ref("");

    function addTask() {
      if (taskName.value.length === 0) {
        return alert("No buddy, not gonna happen");
      }
      authService.user?.addTask(taskName.value ?? "");
      taskName.value = "";
    }

    return {
      taskName,
      addTask,
      authService
    }
  
  }
})
</script>