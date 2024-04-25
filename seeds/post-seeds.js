const { Post } = require('../models');

const postSeeds = [
  {
    title: "Apple Watch",
    date_created: `1/31/2023`,
    post_content: "My heart rate randomly fluctuates.",
    user_id: 3
  },
  {
    title: "News",
    date_created: `2/3/2023`,
    post_content: "I sometimes hear voices.",
    user_id: 1
  },
  {
    title: "MVC",
    date_created: `1/29/2023`,
    post_content: "Sometimes I feel like I'm having heart palpations.",
    user_id: 2
  }

]

const seedPosts = () => Post.bulkCreate(postSeeds);

module.exports = seedPosts;