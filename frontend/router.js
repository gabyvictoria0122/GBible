import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index.vue'
import Todos from '~/pages/todos.vue'
import Bible from '~/pages/bible.vue'
import More from '~/pages/more.vue'
import Record from '~/pages/record.vue'
import Start from '~/pages/start.vue'
import conteudoCap from '~/pages/conteudoCap.vue'

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  routes: [
    {path: '/', component: Index, name: 'index'},
    {path: '/todos', component: Todos, name: 'todos'},
    {path: '/bible', component: Bible, name: 'bible'},
    {path: '/more', component: More, name: 'more'},
    {path: '/record', component: Record, name: 'record'},
    {path: '/start', component: Start, name: 'start'},
    {path: '/conteudo', component: conteudoCap, name: 'conteudoCap'}
  ]
}

export function createRouter (ctx) {
  return new Router(routerOptions)
}
