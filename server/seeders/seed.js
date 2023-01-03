const db = require('../config/connection');
const { Link } = require('../models');
const linkSeeds = require('./linkSeeds.json');
// const mongoose = require('mongoose')


db.once('open', async () => {
    try {
      const result = await Link.insertMany(linkSeeds)
      console.log(result); 
    }
    catch (err) {
        console.log(err)
    }

});