'use strict';

/* Controllers */

var phonecatControllers = angular.module('homePage', ['duScroll','ngAnimate']);







phonecatControllers.controller('SearchContrl', [ '$scope','$location','preloader','dataService',
                                                 function($scope,$location,preloader,dataService) {
	// carousel

	 $scope.images=[{src:'img1.jpg',title:'Pic 1'},{src:'img3.jpg',title:'Pic 2'},{src:'img2.jpg',title:'Pic 3'},{src:'img4.jpg',title:'Pic 4'}]; 
	// console.log("img/"+$scope.images[0].src);
	 $scope.imageLocations=[("img/"+$scope.images[0].src)]; 
; 
	 $scope.showDropdown = true;

	$scope.customNavigate=function(selectedPlace){
  
  var obj=selectedPlace.originalObject

  dataService.setSearchObj(obj);
  
		$location.path('/detail/:'+obj.name);


	}
	
	$scope.search='event,place,name';
	
	
	$scope.chngeSearch=function(activity){
		
		$scope.placeholder='Enter Name of Place for '+activity;
		$scope.search='place,name';
		selectedPlace1();

			}
	$scope.placeholder='search here';

	$scope.place = [
	            	{
	            		placeName : "Shimla",
	            		event : "paragliding",
	            		verb : "in",
	            		name : "Shimla",
	            		pic : "http://placehold.it/200x150"
	            	}
	]
	
	
	
	    
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
      
      //preloading


      // I keep track of the state of the loading images.
      $scope.isLoading = true;
      $scope.isSuccessful = false;
      $scope.percentLoaded = 0;


      // I am the image SRC values to preload and display./
      // --
      // NOTE: "cache" attribute is to prevent images from caching in the
      // browser (for the sake of the demo).
     

      // Preload the images; then, update display when returned.
      preloader.preloadImages( $scope.imageLocations ).then(
          function handleResolve( imageLocations ) {

              // Loading was successful.
              $scope.isLoading = false;
              $scope.isSuccessful = true;

            //  console.info( "Preload Successful" );

          },
          function handleReject( imageLocation ) {

              // Loading failed on at least one image.
              $scope.isLoading = false;
              $scope.isSuccessful = false;

              console.error( "Image Failed", imageLocation );
              console.info( "Preload Failure" );

          },
          function handleNotify( event ) {

              $scope.percentLoaded = event.percent;

          //    console.info( "Percent loaded:", event.percent );

          }
      );
      
   // autocomeplete data
  	$scope.places = [
  	  {
  		  
  		                id:"1",
  	            		place : "all places",
  	            		event : "trekking",
  	            		verb : "in",
  	            		name : "all places ",
  	            		pic : "http://placehold.it/200x150"
  	   },  
               {
  		 id:"2",
  		place : "himachal",
  	            		event : "trekking",
  	            		verb : "in",
  	            		name : "himachal",
  	            		event : "trekking in himachal",
  	            		pic : "http://placehold.it/200x150"
  	            	},             
  	                
  	                {
  	            		id:"3",
  		place : "manali",
  		event : "trekking",
  		verb : "in",
  		name : "churdhar",
  		pic : "http://placehold.it/200x150"
  	}, {
  		id:"4",
  		place : "manali",
  		event : "camping",
  		verb : "in",
  		name : "manikaran",
  		pic : "http://placehold.it/200x150"
  	}, {
  		id:"5",
  		place : "leh",
  		event : "trekking",
  		verb : "in",
  		name : "khardungla",
  		pic : "http://placehold.it/200x150"
  	},{
  		id:"6",
  		place : "dharamshala",
  		event : "trekking",
  		verb : "in",
  		name : "triund",
  		pic : "http://placehold.it/200x150"
  	}, {
  		id:"7",
  		place : "dharamshala",
  		event : "trekking",
  		verb : "in",
  		name : "indrahaar",
  		pic : "http://placehold.it/200x150"
  	}, {
  		id:"8",
  		place : "dharamshala",
  		event : "paragliding",
  		verb : "in",
  		name : "dharamshala",
  		pic : "http://placehold.it/200x150"
  	},
  	{
  		id:"9",
  		place : "Shimla",
  		event : "paragliding",
  		verb : "in",
  		name : "Shimla",
  		pic : "http://placehold.it/200x150"
  	}
  	,
  	{
  		id:"10",
  		place : "leh",
  		event : "biking",
  		verb : "",
  		name : "leh to manali",
  		pic : "http://placehold.it/200x150"
  	}, {
  		id:"11",
  		place : "kinnuar",
  		event : "trekking",
  		verb : "in",
  		name : "spiti",
  		pic : "http://placehold.it/200x150"
  	}, {
  		id:"12",
  		place : "kinnaur",
  		event : "trekking",
  		verb : "in",
  		name  : "ladakh",
  		pic : "http://placehold.it/200x150"
  	} 
  	];
  	
  	
  //filter place
	
	$scope.selectedPlaced=$scope.places;
	
	function selectedPlace1() {
		console.log("slPl Before:: "+$scope.places)
		  $scope.selectedPlaced=_.filter($scope.places, { 'event':'trekking'});
	       console.log("slPl:: "+$scope.selectedPlaced);
	        
	    };

  

}
]);







