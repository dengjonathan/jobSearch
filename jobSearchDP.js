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

  const optimalSolution = (items, n = items.length, timeLeft = time) => {

    // if we have no time left or no items left to consider, return empty arr
    if (n === 0 || timeLeft === 0) {
      return [];
    }

    // if last item is too heavy (we sorted the array), don't consider it
    if (items[n - 1].time > timeLeft) {
      return optimalSolution(items, n - 1, timeLeft);
    }

    const lastItem = items[n - 1];
    const withLastItem = [
      lastItem,
      ...optimalSolution(items, n - 1, timeLeft - lastItem.time)
    ];
    const withoutLastItem = optimalSolution(items, n - 1, timeLeft);

    if (totalXp(withLastItem) > totalXp(withoutLastItem)) {
      return withLastItem;
    } else {
      return withoutLastItem;
    }
  };

  const totalXp = arr => arr.reduce((total, ea) => total + ea.xp, 0);

  const sortedByTime = activities
    .slice()
    .sort((a, b) => a.time - b.time);

  return optimalSolution(sortedByTime)
    .map(act => act.name);
};

/*
 The time complexity of this solution is O(n * nT) where n is number of items
and T is the total amount of time we have.

We have to recusively find the optimal solution for each time from 0 to the total
time we have, and for each recursive call we have to consider each item in the
list of items.  And for each item we consider, we have to calculate the total
XP.

At the cost of being less clear, we could refactor the solution to not
calculate total XP every time. This would make our solution O(nT)

The space complexity is O(nT) because there are T function scopes created by
recursive calls and each scope stores an array with up to n items.
*/
console.log(findJob(10, ACTIVITIES)); 
//=> [ 'systems design', 'making CSS codepens', 'algorithms' ]