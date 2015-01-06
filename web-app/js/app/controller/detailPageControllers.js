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
                                                    '$log','$location','$anchorScroll','dataService', function($scope, $stateParams,$log,$location,$anchorScroll,$document,dataService) {
	
	$scope.changeTab = function (tab) {
	    $scope.view_tab = tab;
	}
	$scope.c1=true;
	$scope.c2=false;
	$scope.getPlaylist=function (tab) {
	    if(tab=='1'){
	    	$scope.c1=true;
	    	$scope.c2=false;
	    }
	    else if (tab=='2'){
	    	$scope.c1=false;
	    	$scope.c2=true;
	    }
	}
	$scope.view_tab = "tab1";
	$scope.indext=1;
	 $scope.images=[{src:'img1.jpg',title:'Pic 1'},{src:'img3.jpg',title:'Pic 2'},{src:'img2.jpg',title:'Pic 3'},{src:'img4.jpg',title:'Pic 4'}]; 
	// $scope.images=[{'img/'+ $scope.imagest[0].src},{'img/'+$scope.imagest[1].src}]; 
	 //$scope.images=[("img/"+$scope.imagest[0].src)]; 
	
	 
	 // show a certain image
	    $scope.showPhoto = function (index) {
	    	console.log(index);
	        $scope.indext = index;
	    };
	//search
    $scope.showDropdown = true;
	 
//	 $scope.selectedPlaced=dataService.places;
//	 $scope.search=dataService.searchFieldSer;
//	 $scope.placeholder=dataService.placeholderSer;
//	 
	$scope.customNavigate=function(selectedPlace){

dataService.getSearchData(selectedPlace);
	}
	

	$scope.chngeSearch=function(activity){
		
		dataService.chngeSearchSer(activity);
		$scope.selectedPlaced=dataService.getFilterPlaces(activity);
		 $scope.placeholder=dataService.placeholderSer;
			}
	
	
	
	
	
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


