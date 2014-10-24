'use strict';

/* Filters */

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});


var ghumoFilters = angular.module('phonecatFilters', ['duScroll','ngAnimate']);


	


ghumoFilters.filter('count', function() {
    return function(collection, key) {
      var out = "test";
      for (var i = 0; i < collection.length; i++) {
          // console.log(collection[i].pants);
          // var out = myApp.filter('filter')(collection[i].pants, "42",
			// true);
      }
      return out;
    }
});


ghumoFilters.filter('groupBy',
            function () {
                return function (collection, key) {
                    if (collection === null) return;
                    return uniqueItems(collection, key);
        };
    });

