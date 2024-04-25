const { User } = require('../models');

const userSeeds = [
    {
        username: "leadencat",
        github: "leadencat",
        email: "tamckinn123@gmail.com",
        password: "tankers10"
    }
]

const seedUsers = () => User.bulkCreate(userSeeds);

module.exports = seedUsers;