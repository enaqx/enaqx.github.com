var _ = require('underscore');

function AverageAggregation() {
  this.count = 0,
  this.total = 0;

  var parent = this;

  this.add = function(value) {
    if (_.isArray(value)) {
      _.each(value, function(iter) {
        parent.total += iter;
        parent.count++;
      });
    }
    if (_.isNumber(value)) { 
      parent.total += value;
      parent.count++;
    }
  };

  this.result = function() {
     return this.total / this.count;
  };
}

var averageAggregation = new AverageAggregation;
averageAggregation.add([1, 2, 3, 4]);
averageAggregation.add(7);
console.log(averageAggregation.result()); // => 3.4

module.exports.AverageAggregation = AverageAggregation;