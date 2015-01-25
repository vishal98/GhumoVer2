'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'phonecatControllers',
 // 'phonecatFilters',
//  'ghumoServices',
 'ui.bootstrap',
  'angucomplete-alt',
 // 'ui-rangeSlider',
  'ui.router',
  'ngAnimate',
  'ncy-angular-breadcrumb',
  'restangular',
  'angularSpinner',
  'ngDialog',
  'ezfb'
]);


phonecatApp.constant('SOCIAL_PLUGINS', [
                             'like', 'share-button', 'send', 'post',
                             'follow', 'comments', 'comments-count', 'activity', 'recommendations',
                             'recommendations-bar', 'like-box', 'facepile'
                           ]);

phonecatApp.config(function($stateProvider, $urlRouterProvider,RestangularProvider,ezfbProvider, SOCIAL_PLUGINS){
                    
	//$urlRouterProvider.otherwise("/checkOutStep1")
	
		  ezfbProvider.setInitParams({
		    appId: '724770587622152'
		  });
		  
                  
                    $urlRouterProvider.otherwise("/search")
                      $stateProvider
                      .state('search', {
                    	  url: "/search",
                    	  templateUrl: 'partials/searchVer.html',
                    	  controller: 'SearchContrl',
                    	  ncyBreadcrumb: {
                    		    label: 'Home page'
                    		  }
                      })
                        .state('trekList', {
                            url: "/detail/:placeName",
                            templateUrl: 'partials/hotel-grid-view.html',
                            controller: 'PlaceListCtrl',
                            ncyBreadcrumb: {
                                label: 'List',
                                parent: 'search'
                              }
                        })
                        
                      .state('details', {
                          url: "/trekDetail/:trek",
                          templateUrl: 'partials/details.html',
                          controller: 'PlaceDetailCtrl',
                          ncyBreadcrumb: {
                              label: 'Details',
                              //parent: 'trekList'
                            	  parent: function ($scope) {
                                    var param = $scope.slug; // Or wherever is the slug value.
                                      return 'trekList({placeName:' + param + '})';
                                  }
                              
                            }
                      })
                        $stateProvider.state('checkout', {
                            url: "/checkout",
                            templateUrl: 'partials/checkOutFlow.html',
                            controller: 'CheckOutListCtrl'
                            
                        })   
                        
                        .state('checkout.checkOutStep1', {
                            url: '/checkOutStep1',
                            templateUrl: 'partials/checkOutStep1.html',
                            controller: 'CheckOutListCtrl'
                        })
                        
                        // nested states 
                        // each of these sections will have their own view
                        // url will be nested (/form/profile)
                        .state('checkout.checkOutStep2', {
                            url:'/checkOutStep2' ,
                            templateUrl: 'partials/checkOutStep2.html',
                                controller: 'CheckOutListCtrl'
                        })
                        
                        // url will be /form/interests
                        .state('checkout.checkOutStep3', {
                            url: '/checkOutStep3',
                            templateUrl: 'partials/checkOutStep3.html',
                                controller: 'CheckOutListCtrl'
                        })
                        
                     
                       
                       
                            RestangularProvider.setBaseUrl('http://localhost:8080/GhumoVer2/');
                          
                    
}

     	);

phonecatApp.directive('disableAnimation', function($animate){
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs){
            $attrs.$observe('disableAnimation', function(value){
                $animate.enabled(!value, $element);
            });
        }
    }
});

//httpresource
var forceSsl = function () {
    if ($location.protocol() != 'https')
        $window.location.href = $location.absUrl().replace('http', 'https');
}
phonecatApp.directive('slider', function ($timeout) {
	  return {
	    restrict: 'AE',
		replace: true,
		scope:{
			indext: '='	,
			images: '='
			
		},
	    link: function (scope, elem, attrs) {
			scope.currentIndex=0;
			
			scope.imagest=scope.images;

			scope.next=function(){
				scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
			};
			scope.showPhoto	=function($index){
				//scope.images[currentIndex].visible=false;
				scope.currentIndex=$index;
				scope.images[$index].visible=true;
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
					timer=$timeout(sliderFunc,900);
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
phonecatApp.factory("user",function(){
    return {};
});
phonecatApp.factory(
        "preloader",
        function( $q, $rootScope ) {

            // I manage the preloading of image objects. Accepts an array of image URLs.
            function Preloader( imageLocations ) {

                // I am the image SRC values to preload.
                this.imageLocations = imageLocations;

                // As the images load, we'll need to keep track of the load/error
                // counts when announing the progress on the loading.
                this.imageCount = this.imageLocations.length;
                this.loadCount = 0;
                this.errorCount = 0;

                // I am the possible states that the preloader can be in.
                this.states = {
                    PENDING: 1,
                    LOADING: 2,
                    RESOLVED: 3,
                    REJECTED: 4
                };

                // I keep track of the current state of the preloader.
                this.state = this.states.PENDING;

                // When loading the images, a promise will be returned to indicate
                // when the loading has completed (and / or progressed).
                this.deferred = $q.defer();
                this.promise = this.deferred.promise;

            }


            // ---
            // STATIC METHODS.
            // ---


            // I reload the given images [Array] and return a promise. The promise
            // will be resolved with the array of image locations.
            Preloader.preloadImages = function( imageLocations ) {

                var preloader = new Preloader( imageLocations );

                return( preloader.load() );

            };


            // ---
            // INSTANCE METHODS.
            // ---


            Preloader.prototype = {

                // Best practice for "instnceof" operator.
                constructor: Preloader,


                // ---
                // PUBLIC METHODS.
                // ---


                // I determine if the preloader has started loading images yet.
                isInitiated: function isInitiated() {

                    return( this.state !== this.states.PENDING );

                },


                // I determine if the preloader has failed to load all of the images.
                isRejected: function isRejected() {

                    return( this.state === this.states.REJECTED );

                },


                // I determine if the preloader has successfully loaded all of the images.
                isResolved: function isResolved() {

                    return( this.state === this.states.RESOLVED );

                },


                // I initiate the preload of the images. Returns a promise.
                load: function load() {

                    // If the images are already loading, return the existing promise.
                    if ( this.isInitiated() ) {

                        return( this.promise );

                    }

                    this.state = this.states.LOADING;

                    for ( var i = 0 ; i < this.imageCount ; i++ ) {

                        this.loadImageLocation( this.imageLocations[ i ] );

                    }

                    // Return the deferred promise for the load event.
                    return( this.promise );

                },


                // ---
                // PRIVATE METHODS.
                // ---


                // I handle the load-failure of the given image location.
                handleImageError: function handleImageError( imageLocation ) {

                    this.errorCount++;

                    // If the preload action has already failed, ignore further action.
                    if ( this.isRejected() ) {

                        return;

                    }

                    this.state = this.states.REJECTED;

                    this.deferred.reject( imageLocation );

                },


                // I handle the load-success of the given image location.
                handleImageLoad: function handleImageLoad( imageLocation ) {

                    this.loadCount++;

                    // If the preload action has already failed, ignore further action.
                    if ( this.isRejected() ) {

                        return;

                    }

                    // Notify the progress of the overall deferred. This is different
                    // than Resolving the deferred - you can call notify many times
                    // before the ultimate resolution (or rejection) of the deferred.
                    this.deferred.notify({
                        percent: Math.ceil( this.loadCount / this.imageCount * 100 ),
                        imageLocation: imageLocation
                    });

                    // If all of the images have loaded, we can resolve the deferred
                    // value that we returned to the calling context.
                    if ( this.loadCount === this.imageCount ) {

                        this.state = this.states.RESOLVED;

                        this.deferred.resolve( this.imageLocations );

                    }

                },


                // I load the given image location and then wire the load / error
                // events back into the preloader instance.
                // --
                // NOTE: The load/error events trigger a $digest.
                loadImageLocation: function loadImageLocation( imageLocation ) {

                    var preloader = this;

                    // When it comes to creating the image object, it is critical that
                    // we bind the event handlers BEFORE we actually set the image
                    // source. Failure to do so will prevent the events from proper
                    // triggering in some browsers.
                    var image = $( new Image() )
                        .load(
                            function( event ) {

                                // Since the load event is asynchronous, we have to
                                // tell AngularJS that something changed.
                                $rootScope.$apply(
                                    function() {

                                        preloader.handleImageLoad( event.target.src );

                                        // Clean up object reference to help with the
                                        // garbage collection in the closure.
                                        preloader = image = event = null;

                                    }
                                );

                            }
                        )
                        .error(
                            function( event ) {

                                // Since the load event is asynchronous, we have to
                                // tell AngularJS that something changed.
                                $rootScope.$apply(
                                    function() {

                                        preloader.handleImageError( event.target.src );

                                        // Clean up object reference to help with the
                                        // garbage collection in the closure.
                                        preloader = image = event = null;

                                    }
                                );

                            }
                        )
                        .prop( "src", imageLocation )
                    ;

                }

            };


            // Return the factory instance.
            return( Preloader );

        }
    );


phonecatApp
.directive('bsActiveLink', ['$location', function ($location) {
return {
    restrict: 'A', //use as attribute 
    replace: false,
    link: function (scope, elem) {
        //after the route has changed
        scope.$on("$routeChangeSuccess", function () {
            var hrefs = ['/#' + $location.path(),
                         '#' + $location.path(), //html5: false
                         $location.path()]; //html5: true
            console.log(hrefs);
            angular.forEach(elem.find('a'), function (a) {
                a = angular.element(a);
                console.log(hrefs.indexOf(a.attr('href')));
                if (-1 !== hrefs.indexOf(a.attr('href'))) {
                    a.parent().addClass('active');
                } else {
                    a.parent().removeClass('active');   
                };
            });     
        });
    }
}
}]);

phonecatApp.factory('dataService', function($location) {
	 //   var stateData = window.jsObjFromBackend.weather.data;
	    return {
	        // default to A2 Michigan
	        listName : '',
	        searchObj :'',
	        placeDetails :'',     
	     
	        //places data
	     // autocomeplete data
	      	places: [
	      	  {
	      		  
	      		                id:"1",
	      	            		place : "all places",
	      	            		event : "trekking",
	      	            		verb : "in",
	      	            		name : "all places ",
	      	            		pic : "http://placehold.it/200x150",
	      	            			eventCode:"TrekTriund"	
	      	   },  
	                   {
	      		 id:"2",
	      		place : "himachal",
	      	            		event : "trekking",
	      	            		verb : "in",
	      	            		name : "himachal",
	      	            		event : "trekking in himachal",
	      	            		pic : "http://placehold.it/200x150",
	      	            		eventCode:"TrekTriund"	
	      	            	},             
	      	                
	      	                {
	      	            		id:"3",
	      		place : "manali",
	      		event : "trekking",
	      		verb : "in",
	      		name : "churdhar",
	      		pic : "http://placehold.it/200x150",
	      			eventCode:"TrekManali"		
	      	}, {
	      		id:"4",
	      		place : "manali",
	      		event : "camping",
	      		verb : "in",
	      		name : "manikaran",
	      		pic : "http://placehold.it/200x150",
	      			eventCode:"CampManali"
	      	}, {
	      		id:"5",
	      		place : "leh",
	      		event : "trekking",
	      		verb : "in",
	      		name : "khardungla",
	      		pic : "http://placehold.it/200x150",
	      			eventCode:"CampManali"
	      	},{
	      		id:"6",
	      		place : "dharamshala",
	      		event : "trekking",
	      		verb : "in",
	      		name : "triund",
	      		pic : "http://placehold.it/200x150",
	      			eventCode:"TrekTriund"	
	      			
	      	} /*,{
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
	      	}*/ 
	      	],
	      	
	      	 getSearchData : function(selectedPlace) {
	      	var obj=selectedPlace.originalObject;
	      	this.setSearchObj(obj);
	      		//$location.path('/detail/:'+obj.name);
	      $location.path('/detail/:'+obj.name);
	      	 },
	      	 
	      	searchFieldSer:'event,place,name',
	     	
	     	
	     	chngeSearchSer : function(activity){
	     		if(!activity){
	     			activity="your adventure example trekking in manali,camping in "
	     		}
	     		this.placeholderSer='Enter Name of Place for '+activity;
	     		this.searchFieldSer='place,name';
	     		

	     			},
	     	placeholderSer:'search here',
	     	
	     	getFilterPlaces : function (activity) {
	    		
	     		if(activity){
	    		 return(_.filter(this.places, { 'event':activity}));
	     	}else{
	     		return this.places;
	     	}
	    	       
	    	    },
	      	 
	 	   setSearchObj : function(searchObj) {
	 		   console.log("seTobj");
	 	            this.searchObj=searchObj;
	 	        },
	 	       

	 	        setListName : function(listName) {
	 	            this.listName = listName;
	 	        },

	 	        setPlace : function(place) {
	 	            this.state = place;
	 	        } ,
	 	      
	 	       setPlaceDetails : function(placeDetails) {
		 		   console.log("seTobj");
		 	            this.placeDetails=placeDetails;
		 	        },
	 	        
	    };
	});


phonecatApp.service('anchorSmoothScroll', function(){
    
    this.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };
    
});


phonecatApp.run(['Restangular', '$window', function(Restangular, $window){
    Restangular.setErrorInterceptor(
        function(response) {
            if (response.status == 401) {
                console.log("Login required... ");
                $window.location.href='/login';
            } else if (response.status == 404) {
                console.log("Resource not available...");
            } else {
                console.log("Response received with HTTP error code: " + response.status );
            }
            return false; // stop the promise chain
        }
    );
}]);



