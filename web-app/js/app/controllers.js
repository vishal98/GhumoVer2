'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', ['duScroll','ngAnimate']);




phonecatControllers.controller('HeadertCtrl', [ '$scope',
                                                     'ghumo','$stateParams','$location', '$timeout', function($scope,ghumo,$stateParams,$location,$timeout) {
	  

	$scope.navClass = function (page) {
	        var currentRoute = $location.path().substring(1) || 'search';
	        return page === currentRoute ? 'active' : '';
	    };  
	    
}
	    ]);

phonecatControllers.controller('CheckOutListCtrl', [ '$scope',
                                                  'ghumo','$stateParams','$location', '$timeout', function($scope,ghumo,$stateParams,$location,$timeout) {
	
	  $scope.openAcc=1;
	 $scope.step1open= true;
	 $scope.isFirstDisabled=true;
	 $scope.isSecondDisabled=true;
	$scope.isThirdDisabled=true;
	$scope.isFourthDisabled=true;
	 $scope.edit=false;
	 $scope.editClick1=false;
	 $scope.editClick2=false;
	 $scope.editClick3=false;
	 $scope.editClick4=false;
	 $scope.currentState=1;
	// $scope.dayslist=[{one},{two},{three},{four}];
	

	
	
	 
		$scope.editClick=function(editState) {
			$scope.edit=true;
			$scope.openAcc=editState;
			
			    $scope.isFirstDisabled=true;
			
				$scope.isSecondDisabled=true;
	
				$scope.isThirdDisabled=true;
			
				$scope.isFourthDisabled=true;
			
		};
				      
		
	 
	$scope.submit=function(step) {
		
		if($scope.edit){
		step=$scope.currentState;
		$scope.edit;
		}
		$scope.currentState=step;
		$scope.openAcc=step;
		console.log("step:"+step)
		if(step==2 ||step==3||step==4){
			$scope.isFirstDisabled=false;
			$scope.isSecondDisabled=false;
			$scope.editClick1=true;
		}	if(step==3||step==4){	
			$scope.isThirdDisabled=false;
			$scope.editClick2=true;
			
		}	if(step==4){
			$scope.isFourthDisabled=false;
			$scope.editClick3=true;
		}
		

	}	; 
	  
			      
		 
	
	$scope.oneAtATime = true;



	  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

	  $scope.addItem = function() {
	    var newItemNo = $scope.items.length + 1;
	    $scope.items.push('Item ' + newItemNo);
	  };

	  $scope.status = {
	    isFirstOpen: true,
	    isFirstDisabled: false
	  };
	
	 $scope.formData = {};
	    
	    // function to process the form
	    $scope.processForm = function() {
	        alert('awesome!');  
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



//placeList Controller
phonecatControllers.controller('PlaceListCtrl', [ '$scope',
                                                  'ghumo','$stateParams','$location','dataService','Restangular', function($scope,ghumo,$stateParams,$location,dataService,Restangular) {
    $scope.usePlaces = {};
    $scope.useDays = {};

	$scope.demo1 = {
		    min: 20,
		    max: 80
		};	
	
	if(!$stateParams.placeName){
		  console.log('$stateParamsName null::'+$stateParams.placeName);
		$stateParams.placeName= dataService.getListName();  
	}else{
		dataService.setListName($stateParams.placeName);
	}
	$scope.rate = 2;
	  $scope.ratingStates = [
	                         {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
	                         {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	                         {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	                         {stateOn: 'glyphicon-heart'},
	                         {stateOff: 'glyphicon-off'}	  ];

	  $scope.hoveringOver = function(value) {
		
		   
	    $scope.overStar = value;
	    $scope.percent = 100 * (value / $scope.max);
	  };
	  
		 var searchObj= dataService.searchObj;
	  console.log('$stateParamsName ::');
	  console.log("placename :"+searchObj.name);
	  console.log(Restangular.one('detail',searchObj.place).one('event',searchObj.event).getRestangularUrl());
	  //RestangularProvider.setBaseUrl('/');

	  var oneUser = Restangular.one('detail',searchObj.name).one('event',searchObj.event);
	  oneUser.get().then(function(user) {
		  // GET /users/abc123/inboxes
		  $scope.places =user; 
	});


	
	$scope.getDetails=function(trekName){
			$location.path('/trekDetail/'+trekName );


	}
	
	
	

	var uniqueItems = function (data, key) {
	    var result = new Array();
	    if(data){
	    for (var i = 0; i < data.length; i++) {
	        var value = data[i][key];
	          
	        if (result.indexOf(value) == -1) {
	            result.push(value);
	        }
	    
	    }}
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
    //console.log("min"+$scope.demo1.min)
        $scope.placeGroup = uniqueItems($scope.places, 'activityKeyWord');
        var filterAfterplaceCount = [];        
        selected = false;
        for (var j in $scope.places) {
            
            var p = $scope.places[j];
            for (var i in $scope.usePlaces) {
                
                if ($scope.usePlaces[i]) {
                    selected = true;
                    if (i == p.activityKeyWord) {
                    	
                        filterAfterplaceCount.push(p);
                        break;
                    }
                }
            }        
        }
        if (!selected) {
        	  
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



phonecatControllers.controller('SearchContrl', [ '$scope','ghumo','$location','preloader','dataService',
                                                 function($scope,ghumo,$location,preloader,dataService) {
	// carousel

	 $scope.images=[{src:'img1.jpg',title:'Pic 1'},{src:'img3.jpg',title:'Pic 2'},{src:'img2.jpg',title:'Pic 3'},{src:'img4.jpg',title:'Pic 4'}]; 
	// console.log("img/"+$scope.images[0].src);
	 $scope.imageLocations=[("img/"+$scope.images[0].src)]; 
; 
	 $scope.showDropdown = true;

	$scope.customNavigate=function(selectedObj){

  dataService.setSearchObj(selectedObj);
  
		$location.path('/detail/:'+selectedObj.place);


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
  	            		event1 : "trekking in himachal",
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







