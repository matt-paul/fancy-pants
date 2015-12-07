app.controller('pantsController', ['optionList', function(optionList) {
  'use strict';

  var self = this;

  self.getOptions = function() {
    optionFactory
      .success(function (ops) {
        self.options = ops;
      })
      .error(function (error) {
        self.status = 'unable to load options data: ' + error.message;
      });
console.log("Hi");
    };


}]);
