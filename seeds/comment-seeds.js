const { Comment } = require('../models');

const commentSeeds = [
  {
    user_id: 1,
    post_id: 1,
    comment_date: `1/31/2030`,
    comment: "Ilike cats."
  },
  {
    user_id: 2,
    post_id: 1,
    comment_date: `11/1/2030`,
    comment: "I agree!."
  },
  {
    user_id: 2,
    post_id: 2,
    comment_date: `2/3/2030`,
    comment: "My cat stinks most of the time."
  },
  {
    user_id: 3,
    post_id: 3,
    comment_date: `10/2/2030`,
    comment: "Just learned MVC. Great way to organize code!"
  },
  {
    user_id: 4,
    post_id: 3,
    comment_date: `8/4/2030`,
    comment: "My cat also sometimes stinks."
  }

]

const seedComments = () => Comment.bulkCreate(commentSeeds);

module.exports = seedComments;