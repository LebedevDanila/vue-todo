<template>
  <div class="todos container">
    <div class="banner">
      <img src="../assets/logo.png" alt="">
      <h1><span>Vue</span> Todos</h1>
    </div>
    <TodoForm />
    <TodoList v-if="this.$store.getters.todos.length" />
    <h1 class="todo-not-found" v-else>Задач пока нету!</h1>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import TodoForm from '@/components/TodoForm.vue'

export default {
  name: 'todos',
  components: {
    TodoList,
    TodoForm
  }
}
</script>

<style lang="scss">
.container {
  max-width: 630px;
  padding: 30px 15px;
  margin: 0 auto;
}
.banner {
  width: 100%;
  height: 165px;
  border: 10px solid #41B883;
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70px;
  }
  h1 {
    margin: 0 0 0 15px;
    font-size: 42px;
    span {
      color: #41B883;
    }
  }
}
.todo-not-found {
  margin: 60px 0 0 0;
  text-align: center;
}
</style>