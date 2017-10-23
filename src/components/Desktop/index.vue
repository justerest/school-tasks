<template>
<div class="b-task">
  <h2>Задание {{taskNumber}}</h2>
  <component class="b-task__text"
             :is="texts[componentName]"></component>
  <div class="b-task__desktop">
    <p v-html="console"></p>
  </div>
  <div v-if="isSuccess"
       class="b-task__success">
    <span>Ответ совпал</span>
    <br>
    <br>
    <mark>
      <small>
        - Но это не значит, что задание выполнено полностью!
        <br>
        <small> - А может оно вообще не выполнено.
          <br>
          <small> - А может и выполнено.
            <br>
            <small> - Неизвестно.</small>
          </small>
        </small>
      </small>
    </mark>
  </div>
</div>
</template>

<script>
import tasks from '@/tasks';
import texts from '@/components/TaskTexts';

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
      if (this.taskNumber === '1') return (
        this.console.match('10<br>5<br>15') ||
        this.console.match('10 5 15')
      );
      if (this.taskNumber === '2') return (
        this.console.match('120')
      );
    },
  },
  created() {
    this.connectPupilCode();
  },
  updated() {
    this.connectPupilCode();
  },
  methods: {
    connectPupilCode() {
      Object.assign(this, tasks[this.componentName]());
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
