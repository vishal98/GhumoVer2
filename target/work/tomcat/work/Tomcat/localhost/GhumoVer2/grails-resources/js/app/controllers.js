'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', ['duScroll','ngAnimate']);



phonecatControllers.controller('PlaceDetailCtrl', [ '$scope', '$routeParams',
                                                    '$log','$location','$anchorScroll', function($scope, $routeParams,$log,$location,$anchorScroll,$document) {
	var top = 400;
	  var duration = 2000; // milliseconds
	console.log("hello");
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
console.log("hello");
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




phonecatControllers.controller('PlaceListCtrl', [ '$scope',
                                                  'ghumo','$routeParams','$location', function($scope,ghumo,$routeParams,$location) {
	


	
	
	$scope.places = ghumo.places.query({


		placeName : $routeParams.placeName

	});

	
	$scope.getDetails=function(trekName){
		$location.path('/trekDetail/'+trekName );


	}

} ]);

phonecatControllers.controller('SearchContrl', [ '$scope','ghumo','$location',
                                                 function($scope,ghumo,$location) {
	// carousel

	 $scope.images=[{src:'img1.jpg',title:'Pic 1'},{src:'img3.jpg',title:'Pic 2'},{src:'img2.jpg',title:'Pic 3'}]; 

	$scope.customNavigate=function(placeName){
		
  console.log("test tt");
		$location.path('/detail/'+placeName );


	}
	
	// autocomeplete data
	$scope.place = [ {
		name : "plp",
		surname : "plp",
		twitter : "@darylrowland",
		pic : "http://placehold.it/270x150"
	}, {
		name : "Alan",
		surname : "Partridge",
		twitter : "@alangpartridge",
		pic : "http://placehold.it/270x150"
	}, {
		name : "Annie",
		surname : "Rowland",
		twitter : "@anklesannie",
		pic : "http://placehold.it/270x150"
	} ];
	
	$scope.places = [ {
		name : "Daryl",
		surname : "Rowland",
		twitter : "@darylrowland",
		pic : "http://placehold.it/270x150"
	}, {
		name : "Alan",
		surname : "Partridge",
		twitter : "@alangpartridge",
		pic : "http://placehold.it/270x150"
	}, {
		name : "Annie",
		surname : "Rowland",
		twitter : "@anklesannie",
		pic : "http://placehold.it/270x150"
	} ,
	{
		name : "Daryl",
		surname : "Rowland",
		twitter : "@darylrowland",
		pic : "http://placehold.it/270x150"
	}, {
		name : "Alan",
		surname : "Partridge",
		twitter : "@alangpartridge",
		pic : "http://placehold.it/270x150"
	}, {
		name : "Annie",
		surname : "Rowland",
		twitter : "@anklesannie",
		pic : "http://placehold.it/270x150"
	} 
	];
	
    $scope.inputChanged = function(str) {
        $scope.console10 = str;
      }

      $scope.focusState = 'None';
      $scope.focusIn = function() {
        var focusInputElem = document.getElementById('ex12_value');
        $scope.focusState = 'In';
        focusInputElem.classList.remove('small-input');
      }
      $scope.focusOut = function() {
        var focusInputElem = document.getElementById('ex12_value');
        $scope.focusState = 'Out';
        focusInputElem.classList.add('small-input');
      }

      $scope.disableInput = true;

}
]);



