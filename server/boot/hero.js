'use strict';

module.exports = function(app) {
  app.models.Hero.count(function(err, count) {
    if (err) throw err;

    console.log('Found', count, 'Heroes');

    if (count < 1) {
      app.models.Hero.create([{
        Codename: 'Superman',
        FirstName: 'Clark',
        LastName: 'Kent',
        Karma: 100,
      }], function(err, heroes) {
        if (err) throw err;

        console.log('Models created:', heroes);
      });
    }
  });
};
