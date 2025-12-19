<script setup lang="ts" >
import { ref, computed } from 'vue';

// State
const newTask = ref('');
const todos = ref([
  { id: 1, text: 'Learn Vue 3', completed: false },
  { id: 2, text: 'Master Tailwind CSS', completed: true }
]);

// Methods
const addTodo = () => {
  if (newTask.value.trim() === '') return;
  
  todos.value.push({
    id: Date.now(),
    text: newTask.value,
    completed: false
  });
  
  newTask.value = ''; // Clear input
};

const removeTodo = (id) => {
  todos.value = todos.value.filter(todo => todo.id !== id);
};

const toggleComplete = (todo) => {
  todo.completed = !todo.completed;
};

// Stats
const pendingTasks = computed(() => todos.value.filter(t => !t.completed).length);
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-800">My Tasks</h1>
        <p class="text-gray-500 text-sm">You have {{ pendingTasks }} tasks remaining</p>
      </div>

      <form @submit.prevent="addTodo" class="flex gap-2 mb-6">
        <input 
          v-model="newTask"
          type="text" 
          placeholder="What needs to be done?" 
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          Add
        </button>
      </form>

      <ul class="space-y-3">
        <li 
          v-for="todo in todos" 
          :key="todo.id"
          class="flex items-center justify-between p-3 bg-gray-50 rounded-lg group"
        >
          <div class="flex items-center gap-3">
            <input 
              type="checkbox" 
              :checked="todo.completed"
              @change="toggleComplete(todo)"
              class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span 
              :class="{'line-through text-gray-400': todo.completed, 'text-gray-700': !todo.completed}"
              class="transition-all"
            >
              {{ todo.text }}
            </span>
          </div>
          
          <button 
            @click="removeTodo(todo.id)"
            class="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="Wait 19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </li>
      </ul>

      <p v-if="todos.length === 0" class="text-center text-gray-400 mt-4">
        No tasks yet. Add one above!
      </p>
    </div>
  </div>
</template>