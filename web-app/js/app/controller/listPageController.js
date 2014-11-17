'use strict';

/* Controllers */

var phonecatControllers = angular.module('listPage', ['duScroll','ngAnimate']);




phonecatControllers.controller('HeadertCtrl', [ '$scope',
                                                     'ghumo','$stateParams','$location', '$timeout', function($scope,ghumo,$stateParams,$location,$timeout) {
	  

	$scope.navClass = function (page) {
	        var currentRoute = $location.path().substring(1) || 'search';
	        return page === currentRoute ? 'active' : '';
	    };  
	    
}
	    ]);






//placeList Controller
phonecatControllers.controller('PlaceListCtrl', [ '$scope'
                                                  ,'$stateParams','$location','dataService','Restangular', function($scope,$stateParams,$location,dataService,Restangular) {
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










