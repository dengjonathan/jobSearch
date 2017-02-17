/*
You have a defined set of activities you can be doing during your job search
process.  Each activity has a cost (time that it takes you to complete the activity)
and each activity provides some value (XP, or experience points, 
that will increase your chances of finding a job).

Write a function that maximizes XP for a given input of time. Try to make your
solution as efficient as possible.
 */

const ACTIVITIES = [
  {name: 'side-project', time: 10, xp: 20},
  {name: 'algorithms', time: 3, xp: 5},
  {name: 'networking', time: 1, xp: 0.5},
  {name: 'exercise', time: 2, xp: 1.5},
  {name: 'systems design', time: 4, xp: 4},
  {name: 'making CSS codepens', time: 3, xp: 4}
];

/**
 * Returns array of type string with names of activites that maximize XP
 * @param {number} time
 * @param {Array<Activity>} activities
 */
const findJob = (time, activities) => {
  /* How do I optimize this?!!! */
};

module.exports = {
  findJob,
  ACTIVITIES
};
