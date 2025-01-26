<template>
    <div>
        {{  full_name  }}
        <br>
        <button @click="Click">Clique</button>
    </div>

    <br> <br>
    <h2>Todos em aberto</h2>
    <div v-for="(todo, index) in uncompletedTodos"
        :key="todo.id" 
        class="todo-item">
        {{ index }} - {{ todo.title }} <span> {{ todo.completed }} </span>
    </div>

    <h2>Todos completas</h2>
    <div v-for="(todo, index) in completedTodos"
        :key="todo.id" 
        class="todo-item">
        {{ index }} - {{ todo.title }} <span> {{ todo.completed }} </span>
    </div>

    <h2>Todos as todos</h2>
    <div v-for="(todo) in todos" :key="todo.id">
      <input
        v-model="todo.completed"
        type="checkbox"
        :id="todo.id" 
        :name="'todo_' + todo.id" 
      />
      <label :for="todo.id">{{ todo.title }}</label>
    </div>
</template>
  
<script>
    export default {
        name: 'aula_10_computed_property',
        props: {
            msg: String
        }, 
        data() {
            return {
                user: {
                    first_name: 'Carlos',
                    last_name: 'Souza',
                    age: 21
                },
                todos: 
                [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 2,
                        "title": "quis ut nam facilis et officia qui",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 3,
                        "title": "fugiat veniam minus",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 4,
                        "title": "et porro tempora",
                        "completed": true
                    },
                    {
                        "userId": 1,
                        "id": 5,
                        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                        "completed": true
                    }
                ]
            }
        },
        computed: {
            full_name()  {
                return `${this.user.first_name} ${this.user.last_name}`
            },
            uncompletedTodos() {
                return this.todos.filter(todo => !todo.completed);
            },
            completedTodos() {
                return this.todos.filter(todo => todo.completed);
            }
        },
        methods: {
            Click() {
                console.log(this.user);
            }
        },
        mounted() {
            // Expor o objeto `user` globalmente (apenas para depuração)
            if (process.env.NODE_ENV === 'development') {
                window.user = this.user;
            }
        },
    }
  
</script>

<style>
  
</style>