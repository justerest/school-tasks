import Vue from 'vue';
import Desktop from '@/components/Desktop';

describe('Desktop.vue', () => {
  it('should render correct contents', done => {
    const Constructor = Vue.extend(Desktop);
    const vm = new Constructor().$mount();
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.b-task__success span').textContent)
        .to.equal('Ответ совпал');
      done();
    });
  });
});
