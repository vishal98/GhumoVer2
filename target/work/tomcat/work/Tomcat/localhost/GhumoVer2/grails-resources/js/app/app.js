'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'duScroll',
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'ghumoServices',
  'ui.bootstrap',
  'angucomplete-alt'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/trekDetail/:trekName', {
        templateUrl: 'partials/hotel-detailed.html',
        controller: 'PlaceDetailCtrl'
      }).
      when('/detail/:placeName', {
    	  templateUrl: 'partials/hotel-grid-view.html',
          controller: 'PlaceListCtrl'
      }).
      when('/search', {
    	  templateUrl: 'partials/searchVer.html',
    	  controller: 'SearchContrl'
         
      }).
      otherwise({
        redirectTo: '/search'
      });
      
  }]);

phonecatApp.directive('slider', function ($timeout) {
	  return {
	    restrict: 'AE',
		replace: true,
		scope:{
			images: '='
		},
	    link: function (scope, elem, attrs) {
		
			scope.currentIndex=0;

			scope.next=function(){
				scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
			};
				
			scope.prev=function(){
				scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
			};
			
			scope.$watch('currentIndex',function(){
				scope.images.forEach(function(image){
					image.visible=false;
				});
				scope.images[scope.currentIndex].visible=true;
			});
			
			/* Start: For Automatic slideshow*/
			
			var timer;
			
			var sliderFunc=function(){
				timer=$timeout(function(){
					scope.next();
					timer=$timeout(sliderFunc,6000);
				},6000);
			};
			
			sliderFunc();
			
			scope.$on('$destroy',function(){
				$timeout.cancel(timer);
			});
			
			/* End : For Automatic slideshow*/
			
	    },
	    
		templateUrl:'template/templateurl.html'
	  }
	});





