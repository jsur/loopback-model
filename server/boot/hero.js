module.exports = (app) => {
  app.models.Hero.count((err, count) => {
    if (err) throw err;

    console.log('Found', count, 'Heroes');

    if (count < 1) {
      app.models.Hero.create([{
        Codename: 'Superman',
        FirstName: 'Clark',
        LastName: 'Kent',
        Karma: 100,
      }], (error, heroes) => {
        if (error) throw error;

        console.log('Models created:', heroes);
      });
    }
  });
};
