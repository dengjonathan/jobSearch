const expect = require('chai').expect;

const {ACTIVITIES, findJob} = require('../solutions/jobSearchLinear');

describe('findJob function', () => {

  it('should return an empty array if no activities available', () => {
    expect(findJob(10, [])).to.eql([]);
  });

  it('should return an empty array if no time is available', () => {
    expect(findJob(0, ACTIVITIES)).to.eql([]);
  });

  it('should choose the more valuable activity with equal cost', () => {
    const choices = [
      {name: 'worse', time: 1, xp: 1},
      {name: 'better', time: 1, xp: 10}
    ];
    const solution = findJob(1, choices);
    expect(solution.length).to.equal(1);
    expect(solution[0]).to.equal('better');
  });

  it('should choose multiple items if that is optimal', () => {
    const choices = [
      {name: 'expensive', time: 10, xp: 8},
      {name: 'cheap1', time: 5, xp: 5},
      {name: 'cheap2', time: 5, xp: 5}
    ];
    expect(findJob(10, choices)).to.contain('cheap1', 'cheap2');
  });

  it('will seek a better solution if given more time', () => {
    const solutionFor5 = findJob(5, ACTIVITIES);
    const totalFor5 = solutionFor5.reduce((xp, name) => {
      const nameXP = ACTIVITIES.filter(item => item.name === name)[0];
      return xp + nameXP;
    }, 0);

    const solutionFor6 = findJob(6, ACTIVITIES);
    const totalFor6 = solutionFor6.reduce((xp, name) => {
      const nameXP = ACTIVITIES.filter(item => item.name === name)[0];
      return xp + nameXP;
    });

    expect(totalFor6).to.be.greaterThan(totalFor5);
    expect(solutionFor5).to.contain('algorithms', 'exercise');
    expect(solutionFor6).to.contain('algorithms', 'making CSS codepens');
  });

  it('should solve to example problem in the blog post 🙈', () => {
    expect(findJob(10, ACTIVITIES)).to.contain('algorithms', 'systems design', 'making CSS codepens');
  });
});