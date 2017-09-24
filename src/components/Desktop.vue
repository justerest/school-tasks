<template>
<div class="b-task">
  <h2>Задание {{taskNumber}}</h2>
  <component :is="texts[componentName]"></component>
  <div class="b-task__desktop">
    <p v-html="console"></p>
  </div>
  <div v-if="isSuccess"
       class="b-task__success">Готово</div>
</div>
</template>

<script>
import tasks from '@/tasks';
import texts from '@/components/tasksText';

export default {
  props: ['taskNumber'],
  data() {
    return { console: '', texts };
  },
  computed: {
    componentName() {
      return 'Task' + this.taskNumber;
    },
    isSuccess() {
      return this.taskNumber === '1' ? (
        this.console.match('10<br>5<br>15') ||
        this.console.match('10 5 15')
      ) : false;
    }
  },
  mounted() {
    Object.assign(this, tasks[this.componentName]());
  }
};
</script>

<style>
.b-task {
  max-width: 600px;
  margin: auto;
  text-align: left;
}

.b-task__desktop {
  min-height: 200px;
  padding: 0 15px;
  border: 5px double;
}

.b-task__success {
  margin-top: 15px;
  text-align: right;
  font-weight: bold;
  color: #09b600;
}

h2,
p {
  font-weight: normal;
}
</style>
