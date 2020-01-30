<template>
  <div class="todo-form">
    <input @keyup.enter="submit" v-model="textTodo" type="text" placeholder="Введите название задачи...">
    <button @click="handlerAdd()"><span>Добавить</span></button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'todoForm',
  data() {
    return {
      textTodo: ''
    }
  },
  methods: {
    ...mapMutations(['addTodo']),
    handlerAdd() {
      if(this.textTodo === '') return;

      this.addTodo({
        title: this.textTodo, 
        status: false
      });

      this.textTodo = '';
    }
  }
}
</script>

<style lang="scss">
.todo-form {
  width: 100%;
  height: 45px;
  display: flex;
  margin: 25px 0;
  input {
    width: 75%;
    padding-left: 17px;
    font-size: 17px;
    border: 2px solid #e6e6e6;
    border-right: none;
    border-radius: 5px 0 0 5px;
  }
  button {
    width: 25%;
    background: #41B883;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 18px;
    position: relative;
    border-radius: 0 5px 5px 0;
    span {
      z-index: 3;
      position: relative;
    }
  }
  button:before {
    content: '';
    z-index: 1;
    height: 100%;
    width: 0%;
    background: #35495E;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 0 5px 5px 0;
  }
  button:hover:before {
    transition: 0.8s all ease;
    width: 100%;
  }
}
</style>