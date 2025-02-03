<template>
 <div class="px-3 py-10 md:px-10">
  <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

    <pre>
      {{  todos }}
    </pre>
      <TodoSpinner/>

      <TodoFormAdd/>

      <TodoItens/>
      
      <TodoEmpty/>
  </div>
</div>
</template>

<script>
import TodoEmpty from './components/TodoEmpty.vue';
import TodoFormAdd from './components/TodoFormAdd.vue';
import TodoItens from './components/TodoItens.vue';
import TodoSpinner from './components/TodoSpinner.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    TodoFormAdd,
    TodoSpinner,
    TodoItens,
    TodoEmpty,
  },
  data() {
    return {
      todos: [],
    };
  },
  created() {
    this.todos = axios.get('http://localhost:3000/todos')
      .then((response) => {
        this.todos = response.data;
      })
  }
}
</script>
