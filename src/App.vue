<template>
<div id="app">
  <h1 @click="$router.push('/')">Староуткинская школа №13</h1>
  <router-view></router-view>
  <h3>Список заданий:</h3>
  <nav>
    <ul>
      <li v-for="task, name in tasks"
          v-if="name !== 'index'">
        <router-link :to="'/task/' + name.slice(4)">Задание {{name.slice(4)}}</router-link>
      </li>
    </ul>
  </nav>
</div>
</template>

<script>
import Desktop from '@/components/Desktop';
import tasks from '@/tasks';

export default {
  name: 'app',
  data() {
    return { tasks };
  },
  components: { Desktop }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  cursor: pointer;
}

h3 {
  font-weight: normal;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
