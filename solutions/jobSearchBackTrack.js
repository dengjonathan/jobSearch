const ACTIVITIES = [
  {name: 'side-project', time: 10, xp: 12},
  {name: 'algorithms', time: 3, xp: 7},
  {name: 'networking', time: 1, xp: 0.5},
  {name: 'exercise', time: 2, xp: 1.5},
  {name: 'systems design', time: 4, xp: 4},
  {name: 'making CSS codepens', time: 3, xp: 4}
];

/**
 * Returns array of type string with names of activites that maximize XP
 * @param {number} time
 */
const findJob = (time, activities) => {
  const currentSet = [];

  let maxXp = -Infinity;
  let maxSet = [];

  // keep track of a pointer to left side (so we don't have to copy array)
  // and total xp and time of current state (so we can calc in O(1))
  const backTrack = (items, left = 0, xp = 0, totalTime = 0) => {

    // for each activity do a depth first search
    for (let i = left; i < items.length; i++) {
      const newTime = totalTime + items[i].time;
      const newXp = xp + items[i].xp;

      // only recurse if will lead to valid solution
      if (newTime <= time) {

        // update set to include new activity
        currentSet.push(activities[i]);

        if (newXp > maxXp) {
          maxXp = xp;
          maxSet = currentSet.slice();
        }

        backTrack(items, i + 1, newXp, newTime);

        // after we depth first search, return to previous state (backtrack)
        currentSet.pop();
      }
    }
  };

  backTrack(activities);
  return maxSet.map(act => act.name);
};

// The time complexity of this solution is O(n!)
// The space complexity is O(n!)
console.log(findJob(10, ACTIVITIES)); 
//=> [ 'algorithms', 'systems design', 'making CSS codepens' ]

module.exports = {
  findJob,
  ACTIVITIES
};
