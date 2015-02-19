'use strict';

/* Controllers */

var phonecatControllers = angular.module('homePage', ['duScroll','ngAnimate']);







phonecatControllers.controller('SearchContrl', [ '$scope','$location','preloader','dataService','$anchorScroll','anchorSmoothScroll','Restangular','ngDialog',
                         function($scope,$location,preloader,dataService,$anchorScroll,anchorSmoothScroll,Restangular,ngDialog) {
	
	$scope.isCollapsed = true;
	

	
$scope.description=	{
		name : "What GimmeWings Does",
		place1:"GimeWings brings you various adventure travel activities in Himachal Pradesh, ranging from Trekking the amazing treks of Himalayas, Camping in beautiful and serene places.",
		place2:"We put together our learning of adventure travel destinations to help you make wiser choices.",
		place3:"You can also join our travellers community and share your experiences and help fellow travellers",
		place4:"We connect you to authorised, competent travel guides and tour operators. Our platform helps you to make wise and safe travel choices",	
		
		show:"false",
		showDesc:"true"
			
	};

	var baseAccounts = Restangular.all('user');
	$scope.submit= function(user){
			console.log("testScope"+user.name)
			
		baseAccounts.one("name",user.name).one("email",user.emailAddr).one("message",user.message).post().then(function() {
		    
		    $scope.message="data saved successfully"
		  }, function() {
			    $scope.message="There was an error saving"
		   
		  });
	}
	
	
	   $scope.clickToOpen = function (place) {
		
	//	   setPlacePopUpDetails(place);
		   $scope.value = false;
		   $scope.place = place;
	        ngDialog.open({ template: 'partials/externalTemplate.html',  className: 'ngdialog-theme-plain ngdialog-theme-custom ',
	            scope: $scope
				});
	    };
	    
		$scope.next = function () {
			ngDialog.close('ngdialog1');
			ngDialog.open({
				template: 'secondDialog',
				className: 'ngdialog-theme-flat ngdialog-theme-custom'
			});
		};
	$scope.name = "Calvin";
	//method for scrolling down
	$scope.cntctUs=function() {
		$location.hash('contactUs');
		  anchorSmoothScroll.scrollTo('contactUs');
		  $scope.showContact = true;
		  
	   // $anchorScroll();
		}
		
		$scope.scrollToTop=function() {
			$location.hash('scrollToTop');
			 anchorSmoothScroll.scrollTo('scrollToTop');
			 // $scope.showContact = true;
	
		    $anchorScroll();
			}
	
	
	    $scope.services=function() {
			$location.hash('cnt1');
			  anchorSmoothScroll.scrollTo('cnt1');
			  $scope.showContact = false;
	
		   
	}
	
//adding image for carousal
//	 $scope.images=[{src:'img1.jpg',title:'Pic 1'},{src:'img3.jpg',title:'Pic 2'},{src:'img2.jpg',title:'Pic 3'},{src:'img4.jpg',title:'Pic 4'}]; 
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
  	            		name : "ChanderTaal Camping ",
  	            			eventCode:"CampChander",
	            		pic : "img/homePageScroll/ckc.jpg",
	            		place1:"Chandra taal means lake of moon. It is situated at an altitude of about 4300 meters in Himalaya. " +
	            				"Mountains of scree overlook the lake on one side, and a magnificent cirque presents a view on the other side.",
	            		place2:"Manali - Chandratal : 140 hms (drive) + 3.5 kms (hike) - 10.5 hours",
	            		place3:"Mid June-October",
	            		place4:"Camping start at 2250 per person including meals"	,
	            		place5:"beautiful lake and hill,peace of mind	",
	            		show:"true"	,
	            		showDesc:"false"
	            			
	            	},
	            	{
	            		id:"2",
  	            		place : "all places",
  	            		event : "trekking",
  	            		verb : "in",
  	            		name : "Triund Trekking and Camping",
  	            			eventCode:"TrekTriund",
	            	
	            		pic : "img/homePageScroll/triund_trek.jpg",
	            			place1:"Triund is beautiful hill top near Dharamshala . It is situated at an altitude of about Height 2975m meters in Himalaya. " +
            				"Mountains of scree overlook the lake on one side, and a magnificent cirque presents a view on the other.",
            		place2:"Dharamshala - Triund : 3-4 hours of trek (upside) + 1.5 hours(Downside)",
            		place3:"Whole Year",
            		place4:"Trekking with Night Stay start at 2450 per person including meals",	
            		place5:"best trek for starters,beautiful view",
            		show:"true"	,
            		showDesc:"false"
	            	},
	            	
	            	{
	            		id:"4",
  	            		place : "all places",
  	            		event : "Trekking all Himachal",
  	            		verb : "in",
  	            		name : "Treks in Kinnaur ",
  	            		
  	            			eventCode:"TrekRaft",
	            		pic : "img/homePageScroll/rafting-manali.jpg",
	            			place1:"Bawa-pin trek 5 days && kinner  Kailash parikarma 4 to 5 Days",
	                		place2:"Trek to Shivalinga 4 days && Bhawa Wild Life Sanctuary 6 to 8 days"	,
	                		place3:"Chitkul - Harshil trek 8 days and Chitkul to chanshal valley trek three treks 3 to 5 days",
	            			place4:"Trek to Manirang Pass 8 days",
	            			place5:"Ropa to Mane (pin valley) 5-6days",
	            			place6:"kanam to sunnam to nako trek 4-5days",
	            			place7:"Sangla valley n kalpa has more than 5 treks which r not more than three days",
	            			place8:"all treks starts from 3rd week of June to Oct 2nd week && Price starts from 3500 INR/day/pax",
	            			place9:"Minimum Group $r. Package includes accommodation in kinnaur n pin valley ",
	            				show:"false"	,
	                    		showDesc:"false",
	                    			showDescMan:"true"
	            	},
	            	
	            	{
	            		id:"3",
  	            		place : "all places",
  	            		event : "camp",
  	            		verb : "in",
  	            		name : "Triund Trekking",
  	            		
  	            			eventCode:"TrekCamp",
	            		
	            		pic : "img/homePageScroll/triundCamping.jpg",
	            	place1:"Triund is beautiful hill top near Dharamshala . It is situated at an altitude of about Height 2975m meters in Himalaya. " +
            				"Mountains of scree overlook the lake on one side, and a magnificent cirque presents a view on the other.",
            		place2:"Dharamshala - Triund : 3-4 hours of trek (upside) + 1.5 hours(Downside)",
            		place3:"Whole Year",
            		place4:"Camping start at 1500 person including meals"	,
            		place5:"snow covered mountains in clear night,serene beauty and peace"	,
            		show:"true"	,
            		showDesc:"false"
	            			
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
//      preloader.preloadImages( $scope.imageLocations ).then(
//          function handleResolve( imageLocations ) {
//
//              // Loading was successful.
//              $scope.isLoading = false;
//              $scope.isSuccessful = true;
//            
//            //  console.info( "Preload Successful" );
//
//          },
//          function handleReject( imageLocation ) {
//
//              // Loading failed on at least one image.
//              $scope.isLoading = false;
//              $scope.isSuccessful = false;
//
//              console.error( "Image Failed", imageLocation );
//              console.info( "Preload Failure" );
//
//          },
//          function handleNotify( event ) {
//
//              $scope.percentLoaded = event.percent;
//
//          //    console.info( "Percent loaded:", event.percent );
//
//          }
//    
//      );
      
   
  	
  	
  //filter place
	
      $scope.htmlReady();
   
	

  

}
]);







