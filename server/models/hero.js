'use strict';

module.exports = function(Hero) {
  Hero.prototype.upvote = function(cb) {
    var response = 'Yay! Hero did a good thing.';
    this.Karma += 1;
    this.save(function(err, hero) {
      if (err) throw err;

      cb(null, hero);
    });
  };
  Hero.remoteMethod('prototype.upvote', {
    http: {
      path: '/upvote',
      verb: 'post',
    },
    returns: {
      arg: 'result',
      type: 'object',
    },
  });

  Hero.prototype.downvote = function(cb) {
    var response = 'Boo! Hero did a bad thing';
    this.Karma -= 1;
    this.save(function(err, hero) {
      if (err) throw err;

      cb(null, hero);
    });
  };
  Hero.remoteMethod('prototype.downvote', {
    http: {
      path: '/downvote',
      verb: 'post',
    },
    returns: {
      arg: 'result',
      type: 'object',
    },
  });
  Hero.validatesUniquenessOf('Codename');
};
