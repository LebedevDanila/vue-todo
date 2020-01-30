import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.unshift(todo);
    },
    removeTodo(state, id) {
      state.todos.splice(id, 1);
    },
    executeTodo(state, id) {
      state.todos[id].status = !state.todos[id].status;
    }
  },
  actions: {
  },
  getters: {
    todos: state => state.todos
  }
})
