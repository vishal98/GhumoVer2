'use strict';

/* Controllers */

var phonecatControllers = angular.module('checkOutPage', ['duScroll','ngAnimate']);




phonecatControllers.controller('HeadertCtrl', [ '$scope',
                                                     ,'$stateParams','$location', '$timeout', function($scope,$stateParams,$location,$timeout) {
	  

	$scope.navClass = function (page) {
	        var currentRoute = $location.path().substring(1) || 'search';
	        return page === currentRoute ? 'active' : '';
	    };  
	    
}
	    ]);

phonecatControllers.controller('CheckOutListCtrl', [ '$scope',
                                                  ,'$stateParams','$location', '$timeout', function($scope,$stateParams,$location,$timeout) {
	
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

