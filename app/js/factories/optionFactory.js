app.factory('optionList', function($http) {
  'use strict';

  return $http.get('js/optionList.json');

});
