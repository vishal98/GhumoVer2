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
    $scope.usePlaces = {};
    $scope.useDays = {};

	$scope.demo1 = {
		    min: 20,
		    max: 80
		};	
	
	$scope.rate = 2;
	  $scope.ratingStates = [
	                         {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
	                         {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	                         {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	                         {stateOn: 'glyphicon-heart'},
	                         {stateOff: 'glyphicon-off'}	  ];

	  $scope.hoveringOver = function(value) {
		  console.log("hover");
		   console.log(value);
	    $scope.overStar = value;
	    $scope.percent = 100 * (value / $scope.max);
	  };
	$scope.places = ghumo.places.query({


		placeName : $routeParams.placeName

	});

	
	$scope.getDetails=function(trekName){
		$location.path('/trekDetail/'+trekName );


	}
	
	
	

	var uniqueItems = function (data, key) {
	    var result = new Array();
	    for (var i = 0; i < data.length; i++) {
	        var value = data[i][key];
	          
	        if (result.indexOf(value) == -1) {
	            result.push(value);
	        }
	    
	    }
	    return result;
	};
	
	
	// Watch the placeCount that are selected
    $scope.$watch(function () {
        return {
            places: $scope.places,
            usePlaces: $scope.usePlaces,
            useDays: $scope.useDays,
            useShoes: $scope.useShoes
        }
    }, function (value) {
        var selected;
    console.log("min"+$scope.demo1.min)
        $scope.placeGroup = uniqueItems($scope.places, 'activityKeyWord');
        var filterAfterplaceCount = [];        
        selected = false;
        for (var j in $scope.places) {
            
            var p = $scope.places[j];
            for (var i in $scope.usePlaces) {
                
                if ($scope.usePlaces[i]) {
                    selected = true;
                    console.log("pyt: "+$scope.usePlaces[i]+"::player::" +p+ ":useP:: "+i+":p.placeCount:"+p.activityKeyWord);   	
                    if (i == p.activityKeyWord) {
                    	 console.log("herei");  
                        filterAfterplaceCount.push(p);
                        break;
                    }
                }
            }        
        }
        if (!selected) {
        	 console.log("hereddi");  
            filterAfterplaceCount = $scope.places;
        }
        
        $scope.daysGroup = uniqueItems(filterAfterplaceCount, 'days');
        var filterAfterDays = [];        
        selected = false;
        for (var j in filterAfterplaceCount) {
            var p = filterAfterplaceCount[j];
            for (var i in $scope.useDays) {
                if ($scope.useDays[i]) {
                    selected = true;
                    if (i == p.days) {
                        filterAfterDays.push(p);
                        break;
                    }
                }
            }       
        }
        if (!selected) {
            filterAfterDays = filterAfterplaceCount;
        }


      // code comenedte
        $scope.filteredPlaces = filterAfterDays;        
    }, true);
    
    
    $scope.$watch('filtered', function (newValue) {
        if (angular.isArray(newValue)) {
            console.log(newValue.length);
        }
    }, true);    



	
	

} ]);



phonecatControllers.controller('SearchContrl', [ '$scope','ghumo','$location',
                                                 function($scope,ghumo,$location) {
	// carousel

	 $scope.images=[{src:'img1.jpg',title:'Pic 1'},{src:'img3.jpg',title:'Pic 2'},{src:'img2.jpg',title:'Pic 3'}]; 

	$scope.customNavigate=function(placeName){
		
  console.log("test tt");
		$location.path('/detail/'+placeName );


	}
	$scope.chngeSearch=function(placeName){
		
		$scope.placeholder='search';


			}
	$scope.placeholder='search here';
	
	// autocomeplete data
	$scope.place = [ {
		name : "plp",
		surname : "plp",
		twitter : "@darylrowland",
		pic : "http://placehold.itr/2170x150"
	}, {
		name : "Alan",
		surname : "Partridge",
		twitter : "@alangpartridge",
		pic : "http://placehold.itr/270x150"
	}, {
		name : "Annie",
		surname : "Rowland",
		twitter : "@anklesannie",
		pic : "http://placehold.itr/270x150"
	} ];
	
	$scope.places = [ {
		name : "Daryl",
		surname : "Rowland",
		twitter : "@darylrowland",
		pic : "http://placehold.itr/270x150"
	}, {
		name : "Alan",
		surname : "Partridge",
		twitter : "@alangpartridge",
		pic : "http://placehold.it/270x150"
	}, {
		name : "Annie",
		surname : "Rowland",
		twitter : "@anklesannie",
		pic : "http://placehold.itr/270x150"
	} ,
	{
		name : "Daryl",
		surname : "Rowland",
		twitter : "@darylrowland",
		pic : "http://placehold.itr/270x150"
	}, {
		name : "Alan",
		surname : "Partridge",
		twitter : "@alangpartridge",
		pic : "http://placehold.itr/270x150"
	}, {
		name : "Annie",
		surname : "Rowland",
		twitter : "@anklesannie",
		pic : "http://placehold.itr	/270x150"
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



