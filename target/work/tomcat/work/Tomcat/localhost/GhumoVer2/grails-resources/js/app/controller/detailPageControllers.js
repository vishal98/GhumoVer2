'use strict';

/* Controllers */

var phonecatControllers = angular.module('detailPage', ['duScroll','ngAnimate','ui-rangeSlider','ui.bootstrap','phonecatFilters']);




phonecatControllers.controller('HeadertCtrl', [ '$scope',
                                                     '$stateParams','$location', '$timeout', function($scope,$stateParams,$location,$timeout) {
	  

	$scope.navClass = function (page) {
	        var currentRoute = $location.path().substring(1) || 'search';
	        return page === currentRoute ? 'active' : '';
	    };  
	    
}
	    ]);

phonecatControllers.controller('PlaceDetailCtrl', [ '$scope', '$stateParams',
                                                    '$log','$location','$anchorScroll', function($scope, $stateParams,$log,$location,$anchorScroll,$document) {
	 $scope.slug='plp';
	//carousel
	$scope.myInterval = 5000;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = 900 + slides.length;
	    slides.push({
	      image: 'http://placekitten.com/' + newWidth + '/300',
	      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
	        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	    });
	  };
	  for (var i=0; i<4; i++) {
	    $scope.addSlide();
	  }
	
	var top = 400;
	  var duration = 2000; // milliseconds
//	console.log("hello");
	  // Scroll to the exact position
	 

	  var offset = 30; // pixels; adjust for floating menu, context etc
	  // Scroll to #some-id with 30 px "padding"
	  // Note: Use this in a directive, not with document.getElementById
	
	
		$scope.setVal=function() {
		$location.hash('content');
	    $anchorScroll();
		}
	    $scope.backDet=function() {
			$location.hash('content');
		    $anchorScroll();
	}
	    
	    $scope.myInterval = 5000;
	    var slides = $scope.slides = [];
	    $scope.addSlide = function() {
	      var newWidth = 600 + slides.length;
	      slides.push({
	        image: 'http://placekitten.com/' + newWidth + '/300',
	        text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
	          ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	      });
	    };
	    for (var i=0; i<4; i++) {
	      $scope.addSlide();
	    }
}
	 ]);

var scroll = angular.module('duScroll', []);




scroll.
controller('PlaceDetCtrl', ['$scope',function($scope, $document) {
  var top = 400;
  var duration = 2000; // milliseconds

  // Scroll to the exact position
  $document.scrollTop(top, duration).then(function() {
    console && console.log('You just scrolled to the top!');
  });

  var offset = 30; // pixels; adjust for floating menu, context etc
  // Scroll to #some-id with 30 px "padding"
  // Note: Use this in a directive, not with document.getElementById
  var someElement = angular.element(document.getElementById('content'));
  $document.scrollToElement(someElement, offset, duration);
} ]
);


