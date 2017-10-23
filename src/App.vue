<template>
<div id="app">
  <h1 @click="$router.push('/')">Староуткинская школа №13</h1>
  <router-view></router-view>
  <nav class="b-navbar">
    <h3>Список заданий:</h3>
    <ul class="b-navbar__ul">
      <li class="b-navbar__li"
          v-for="task, name in tasks"
          v-if="name !== 'index'">
        <router-link :to="'/task/' + name.slice(4)">Задание {{name.slice(4)}}</router-link>
      </li>
    </ul>
  </nav>
</div>
</template>

<script>
import Desktop from '@/components/Desktop';
import tasks from '@/components/TaskTexts';

export default {
  name: 'app',
  components: { Desktop },
  data() {
    return { tasks };
  },
};
</script>

<style lang="scss">
@import "~@/styles/_application.scss";
</style>
