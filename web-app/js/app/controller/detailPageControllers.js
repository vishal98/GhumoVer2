'use strict';

/* Controllers */

var phonecatControllers = angular.module('detailPage', ['duScroll','ngAnimate','ui-rangeSlider','phonecatFilters']);



phonecatControllers.controller('HeadertCtrl', [ '$scope',
                                                     '$stateParams','$location', '$timeout', function($scope,$stateParams,$location,$timeout) {
	  
	$scope.navigationState='home';
	$scope.change=function (state) {
		console.log("vs"+state);
		$scope.navigationState=state;
		  this.tab = state;
    };  
    
    $scope.isSet = function (tabId) {
        return this.tab === tabId;
    };
	$scope.navClass = function (page) {
	        var currentRoute = $location.path().substring(1) || 'search';
	        return page === currentRoute ? 'active' : '';
	    };  
	    
}
	    ]);

phonecatControllers.controller('PlaceDetailCtrl', [ '$scope', '$stateParams',
                                                    '$log','$location','$anchorScroll','dataService','Restangular',
                                                    function($scope, $stateParams,$log,$location,$anchorScroll,dataService,Restangular) {
	 $scope.images=[{src:'img3.jpg',title:'Piscf 2'},{src:'img2.jpg',title:'Picoda'},{src:'img4.jpg',title:'Pic 4'}]; 	
	 var result;
	//todo
	 $scope.navigationState='home';
	  this.tab = 'home';
		$scope.change=function (state) {
		
			$scope.navigationState=state;
			  this.tab = state;
	    };  
	    
	    $scope.isSet = function (tabId) {
	    	console.log(this.tab+ ":: tabId :: "+ tabId);
	    	console.log(this.tab === tabId);
	        return this.tab === tabId;
	    };
		var placeD=$stateParams.trek;
		
		
		
		  console.log(Restangular.one('detail',placeD).one('event',placeD).getRestangularUrl());
		 var oneUser = Restangular.one('detail',placeD).one('event',placeD);
	  oneUser.get().then(function(user) {
		  // GET /users/abc123/inboxes
		  $scope.activity =user[0]; 
		  console.log("wgre ::"+ user[0].priceRange);
	});
		
	
	//code for changing tabs 
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
    
    
    //generic code for search input
	$scope.customNavigate=function(selectedPlace){

dataService.getSearchData(selectedPlace);
	}
	

	$scope.chngeSearch=function(activity){
		
		dataService.chngeSearchSer(activity);
		$scope.selectedPlaced=dataService.getFilterPlaces(activity);
		 $scope.placeholder=dataService.placeholderSer;
			}
	
	
	
	
	
	$scope.slug='plp';
	
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


