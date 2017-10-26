import Task1 from '@/tasks/Task1';

describe('Task1', () => {
  it('should render correct contents', () => {
    expect(Task1().console.replace(/(<br>|\s)/g, '')).to.equal('10515');
  });
});
