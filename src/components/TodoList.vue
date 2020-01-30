<template>
  <div class="todo-list">
    <div class="todo" v-for="(todo, index) in this.$store.getters.todos" :key="index">
      <input type="checkbox" v-on:change="executeTodo(index)" :checked="todo.status ? true : false">
      <span :class="todo.status ? 'execute' : ''">{{todo.title}}</span>
      <div class="delete" @click="handlerRemove(index)" :data-id="index"><img src="../assets/delete.svg" alt=""></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'todoList',
  methods: {
    ...mapMutations(['removeTodo', 'executeTodo']),
    handlerRemove(index) {
      this.removeTodo(index);
    }
  }
}
</script>

<style lang="scss">
.todo {
  background: #35495E;
  padding: 12px 17px;
  margin-bottom: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input[type=checkbox] {
    margin: 0;
    width: 3.381%;
    height: 19px;
  }
  span {
    font-size: 20px;
    flex-basis: 83%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    color: #fff;
  }
  .delete {
    width: 30px;
    height: 30px;
    background: #d32f2f;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .execute {
    text-decoration: line-through;
  }
}
</style>