var helpers = {
    shuffle: function(array, random) {
      if(random == 'false') return array;
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

};

module.exports.register = function(Handlebars, options) {
    options = options || {};

    for (var helper in helpers) {
        Handlebars.registerHelper(helper, helpers[helper]);
    }
    return this;
};
