module.exports = (Hero) => {
  Hero.prototype.upvote = function upvote(cb) {
    const response = 'Yay! Hero did a good thing.';
    this.Karma += 1;
    this.save((err, hero) => {
      if (err) throw err;

      cb(null, { response, hero });
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

  Hero.prototype.downvote = function downvote(cb) {
    const response = 'Boo! Hero did a bad thing';
    this.Karma -= 1;
    this.save((err, hero) => {
      if (err) throw err;

      cb(null, { response, hero });
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
