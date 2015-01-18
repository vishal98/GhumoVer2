'use strict';

/* Controllers */

var phonecatControllers = angular.module('homePage', ['duScroll','ngAnimate']);







phonecatControllers.controller('SearchContrl', [ '$scope','$location','preloader','dataService','$anchorScroll','anchorSmoothScroll',
                                                 function($scope,$location,preloader,dataService,$anchorScroll,anchorSmoothScroll) {
	
	//method for scrolling down
	$scope.cntctUs=function() {
		$location.hash('contactUs');
		  anchorSmoothScroll.scrollTo('contactUs');
		  $scope.showContact = true;
		  
	   // $anchorScroll();
		}
	    $scope.services=function() {
			$location.hash('cnt1');
			  anchorSmoothScroll.scrollTo('cnt1');
			  $scope.showContact = false;
		   
	}
	
//adding image for carousal
	 $scope.images=[{src:'img1.jpg',title:'Pic 1'},{src:'img3.jpg',title:'Pic 2'},{src:'img2.jpg',title:'Pic 3'},{src:'img4.jpg',title:'Pic 4'}]; 
	// console.log("img/"+$scope.images[0].src);
	 $scope.imageLocations=[("img/"+$scope.images[0].src)]; 

	 $scope.showDropdown = true;

	 //service present in app.js
	 $scope.selectedPlaced=dataService.places;
	 $scope.search=dataService.searchFieldSer;
	 $scope.placeholder=dataService.placeholderSer;
	 
	 
	 //adding selected place search box
	$scope.customNavigate=function(selectedPlace){
  
  dataService.getSearchData(selectedPlace);
	};
	

	//change input value in inputbox based on link clic
	$scope.chngeSearch=function(activity){
		
		dataService.chngeSearchSer(activity);
		$scope.selectedPlaced=dataService.getFilterPlaces(activity);
		 $scope.placeholder=dataService.placeholderSer;
			};



	//hardcoded dropdown values
	$scope.place1=[
	            	{
	            		id:"1",
  	            		place : "all places",
  	            		event : "camping",
  	            		verb : "in",
  	            		name : "ChanderTaal Camp ",
  	            			eventCode:"CampChander",
	            		pic : "img/homePageScroll/ckc.jpg"
	            	},
	            	{
	            		id:"2",
  	            		place : "all places",
  	            		event : "trekking",
  	            		verb : "in",
  	            		name : "Triund ",
  	            			eventCode:"TrekTriund",
	            	
	            		pic : "img/homePageScroll/triund_trek.jpg"
	            	},
	            	{
	            		id:"3",
  	            		place : "all places",
  	            		event : "camp",
  	            		verb : "in",
  	            		name : "Triund",
  	            		
  	            			eventCode:"TrekCamp",
	            		
	            		pic : "img/homePageScroll/triundCamping.jpg"
	            	},
	            	{
	            		id:"4",
  	            		place : "all places",
  	            		event : "Rafting",
  	            		verb : "in",
  	            		name : "Manali ",
  	            		
  	            			eventCode:"TrekRaft",
	            		pic : "img/homePageScroll/rafting-manali.jpg"
	            	},
	            	
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

      $scope	.disableInput = true;
      
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
      
   
  	
  	
  //filter place
	
	
	
	

  

}
]);







