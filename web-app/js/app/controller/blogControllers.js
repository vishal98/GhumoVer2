'use strict';

/* Controllers */

var phonecatControllers = angular.module('blogPage', ['duScroll','ngAnimate','ui-rangeSlider','phonecatFilters']);





phonecatControllers.controller('blogCtrl', [ '$scope', '$stateParams',
                                                    '$log','$location','$anchorScroll','dataService','Restangular',
                                                    function($scope, $stateParams,$log,$location,$anchorScroll,dataService,Restangular) {
	
	
	$scope.value=false;
		  console.log(Restangular.one('blogList').getRestangularUrl());
		 var oneUser = Restangular.one('blogList');
	  oneUser.get().then(function(user) {
		  // GET /users/abc123/inboxes
		  $scope.blog =user[0]; 
		 
	});
	  

	
	$scope.appid='724919397607271|hWGSN6mhNYHXcv0jzWwxOB_FOzY';
	$scope.view_tab = "tab1";
	$scope.indext=1;

	
	$scope.hideFlag=function(checkVal){
		
		return false;	
			} 
    
   

    
	 $scope.blogEr=	 {
	        "class": "ghumover2.ArticleDetails",
	        "id": 12,
	        "article": {
	          "_ref": "../..",
	          "class": "ghumover2.Article"
	        },
	        "articleDetailsId": 1,
	        "image": [
	          
	        ],
	        "ownerId": 1,
	        "post": " \n  The water flow was turbulent that it looked like white foam with patches of blue. But it was also very clear and glassy. The mountain at the other side was colored with maple trees, in shades of burgundy, red, orange, yellowish green. The valley was so awe-inspiring that I found myself with my mouth full open and eyes widened double the original size.  ",
	        "sequence": 2,
	        "title": "The unbelievable Valley!"
	      };
	
	$scope.moreBlog=function(blogId){
		 $scope.value=true;
			$scope.tab='hide'
				$scope.tab2 = 'hide';
		  $scope.blogdetails =	
		  {
				    "class": "ghumover2.Article",
				    "id": 1,
				    "allowComments": "y",
				    "appidFb": "34",
				    "articleDetails": [

				  {
				        "class": "ghumover2.ArticleDetails",
				        "id": 14,
				        "article": {
				          "_ref": "../..",
				          "class": "ghumover2.Article"
				        },
				        "articleDetailsId": 1,
				        "image": [
				          {
				            "class": "ghumover2.Image",
				            "id": 2,
				            "articleDetails": [
				              {
				                "_ref": "../../..",
				                "class": "ghumover2.ArticleDetails"
				              }
				            ],
				            "createdBy": "vis",
				            "creationDate": "9999-12-30T18:30:00Z",
				            "imageCode": "kherGanga",
				            "imageName": "kgng12.png",
				            "imagePath": "img/blog/kheerGanga/",
				            "imageSeq": "1",
				            "lastUpdatedDate": "9999-12-30T18:30:00Z",
				            "updatedBy": "vis"
				          },
				          {
				            "class": "ghumover2.Image",
				            "id": 1,
				            "articleDetails": [
				              {
				                "_ref": "../../..",
				                "class": "ghumover2.ArticleDetails"
				              }
				            ],
				            "createdBy": "vis",
				            "creationDate": "9999-12-30T18:30:00Z",
				            "imageCode": "kherGanga",
				            "imageName": "kgng11.png",
				            "imagePath": "img/blog/kheerGanga/",
				            "imageSeq": "1",
				            "lastUpdatedDate": "9999-12-30T18:30:00Z",
				            "updatedBy": "vis"
				          }
				        ],
				        "ownerId": 1,
				        "post": " \nWe reached ‘Barshaini’, the last motorable village near to Kheerganga. From there we went further up to Pulga, a remote village with no road access. And to our surprise, locals there were speaking in British and American accent. Later we found that this village received many European tourists, hence villagers adapted to their style. It is a very small village, not even half km in diameter.\nWe found some local restaurants serving Italian cuisines. They baked their own bread in local chullas . And adding more to our surprise, Italian food was better than any good Italian restaurant in Delhi. \n ",
				        "sequence": 3,
				        "title": "Pulga, the dream village"
				      },
				{
				        "class": "ghumover2.ArticleDetails",
				        "id": 15,
				        "article": {
				          "_ref": "../..",
				          "class": "ghumover2.Article"
				        },
				        "articleDetailsId": 1,
				        "image": [
				          {
				            "class": "ghumover2.Image",
				            "id": 5,
				            "articleDetails": [
				              {
				                "_ref": "../../..",
				                "class": "ghumover2.ArticleDetails"
				              }
				            ],
				            "createdBy": "vis",
				            "creationDate": "9999-12-30T18:30:00Z",
				            "imageCode": "kherGanga",
				            "imageName": "kgng31.png",
				            "imagePath": "img/blog/kheerGanga/",
				            "imageSeq": "1",
				            "lastUpdatedDate": "9999-12-30T18:30:00Z",
				            "updatedBy": "vis"
				          },
				          {
				            "class": "ghumover2.Image",
				            "id": 4,
				            "articleDetails": [
				              {
				                "_ref": "../../..",
				                "class": "ghumover2.ArticleDetails"
				              }
				            ],
				            "createdBy": "vis",
				            "creationDate": "9999-12-30T18:30:00Z",
				            "imageCode": "kherGanga",
				            "imageName": "kgng22.png",
				            "imagePath": "img/blog/kheerGanga/",
				            "imageSeq": "1",
				            "lastUpdatedDate": "9999-12-30T18:30:00Z",
				            "updatedBy": "vis"
				          },
				          {
				            "class": "ghumover2.Image",
				            "id": 3,
				            "articleDetails": [
				              {
				                "_ref": "../../..",
				                "class": "ghumover2.ArticleDetails"
				              }
				            ],
				            "createdBy": "vis",
				            "creationDate": "9999-12-30T18:30:00Z",
				            "imageCode": "kherGanga",
				            "imageName": "kgng21.png",
				            "imagePath": "img/blog/kheerGanga/",
				            "imageSeq": "1",
				            "lastUpdatedDate": "9999-12-30T18:30:00Z",
				            "updatedBy": "vis"
				          }
				        ],
				        "ownerId": 1,
				        "post": " \nNext day when we got up, the whole view changed overnight, it became white all over. It had snowed last night and the valley had now become white with some shades of autumn here and there. We could not believe our eyes as the valley became 110 times more beautiful than yesterday. . ",
				        "sequence": 4,
				        "title": "Snowfall Yuppies!!"
				      },
				      {
				        "class": "ghumover2.ArticleDetails",
				        "id": 16,
				        "article": {
				          "_ref": "../..",
				          "class": "ghumover2.Article"
				        },
				        "articleDetailsId": 1,
				        "image": [
				          
				        ],
				        "ownerId": 1,
				        "post": " \n   We started climbing up for Kheerganga; which is around 15 km trek from Pulga village. As our guide mentioned there was another shortcut, but we did not take it because it was steep and had become slippery due to snow. On the way, scenery was like computer wallpaper, the colorful valley, white gushing Parvati river, one more amusing village, Kalga with distinctive wooden houses.Later we reached a point where there was an end to the valley and we had to cross a little fragile wooden bridge towards the other hill. \nParvati River was very loud under it. And the scary part was that the bridge was very narrow and slippery.But Somehow, we maintained guts and went ahead .It also vibrated when we crossed.\n ",
				        "sequence": 5,
				        "title": "The Trek"
				      },  {
				        "class": "ghumover2.ArticleDetails",
				        "id": 17,
				        "article": {
				          "_ref": "../..",
				          "class": "ghumover2.Article"
				        },
				        "articleDetailsId": 1,
				        "image": [
				          {
				            "class": "ghumover2.Image",
				            "id": 6,
				            "articleDetails": [
				              {
				                "_ref": "../../..",
				                "class": "ghumover2.ArticleDetails"
				              }
				            ],
				            "createdBy": "vis",
				            "creationDate": "9999-12-30T18:30:00Z",
				            "imageCode": "kherGanga",
				            "imageName": "kgng32.png",
				            "imagePath": "img/blog/kheerGanga/",
				            "imageSeq": "1",
				            "lastUpdatedDate": "9999-12-30T18:30:00Z",
				            "updatedBy": "vis"
				          }
				        ],
				        "ownerId": 1,
				        "post": " \n     Then there started a steep ascent. My gut feeling told me to go back, because it would get very dangerous to return this way next morning, if it snowed again. I argued with my fellow trekkers, but nobody listened. Anyhow we continued. Trail became difficult, narrower, and more slippery due to snow. There was an abyss, which added to the risk. But we chose to keep on.",
				        "sequence": 6,
				        "title": "The Risks"
				      }
				   
				   
				      
				    ],
				    "articleId": 1,
				    "articleUrl": "4",
				    "author": "ishita",
				    "authorId": 1,
				    "createdAt": "2014-12-31T18:29:59Z",
				    "details": "Bedi’s action plan includes measures like increased and smart patrolling in vulnerable areas, community policing and neighbourhood watch, safe and healthy nightlife – strengthening of patrolling and police presence in entertainment areas/hubs, stringent driver verification and state-wide centralized criminal database with inter-state coordination, CCTV cameras in public areas and buses, home guards and civil defence escorts on buses on vulnerable routes and at non-peak times, more ladies-special buses by DTC, street lighting in all areas with surprise inspections and full city accountability, and self-defence training among other"
				  }
		  
		  
		  
		                      	;
		  console.log(Restangular.one('id',blogId).one('blog','blogId').getRestangularUrl());
		// var oneUser = Restangular.one('id',blogId).one('blog','blogId');
		
	//  oneUser.get().then(function(user) {
		  // GET /users/abc123/inboxes
	/*console.log("tesgggg"+user[0].articleDetails);
	
		// JSON.stringify("tesssr"+user[0].articleDetails[0]); 
		  $scope.blogdetails =$scope.blogt.articleDetails; 
		 
		//  console.log("wgre ::"+  $scope.blogdetails.articleDetails[0].post);
	});*/
	//		}   
	}
	$scope.tab = 'show';
	$scope.tab2 = 'show';
	   $scope.isSet = function (tabId) {
		 
	        return $scope.tab == tabId;
	    };
	    $scope.isSetv = function (tabId) { 
	    	  console.log($scope.tab  +"::"+ tabId);
			   console.log($scope.tab == tabId);
	    	 return $scope.tab2 == tabId; 
	    }
	   
	$scope.moreBlogT=function(blogId){

			$scope.tab2 = 'show';
	  $scope.blogdetailsT =	
	  {
			    "class": "ghumover2.Article",
			    "id": 1,
			    "allowComments": "y",
			    "appidFb": "34",
			    "articleDetails": [
    {
      "class": "ghumover2.ArticleDetails",
      "id": 18,
      "article": {
        "_ref": "../..",
        "class": "ghumover2.Article"
      },
      "articleDetailsId": 1,
      "image": [
        {
          "class": "ghumover2.Image",
          "id": 7,
          "articleDetails": [
            {
              "_ref": "../../..",
              "class": "ghumover2.ArticleDetails"
            }
          ],
          "createdBy": "vis",
          "creationDate": "9999-12-30T18:30:00Z",
          "imageCode": "kherGanga",
          "imageName": "kgng33.png",
          "imagePath": "img/blog/kheerGanga/",
          "imageSeq": "1",
          "lastUpdatedDate": "9999-12-30T18:30:00Z",
          "updatedBy": "vis"
        },
        {
          "class": "ghumover2.Image",
          "id": 8,
          "articleDetails": [
            {
              "_ref": "../../..",
              "class": "ghumover2.ArticleDetails"
            }
          ],
          "createdBy": "vis",
          "creationDate": "9999-12-30T18:30:00Z",
          "imageCode": "kherGanga",
          "imageName": "kgng41.png",
          "imagePath": "img/blog/kheerGanga/",
          "imageSeq": "1",
          "lastUpdatedDate": "9999-12-30T18:30:00Z",
          "updatedBy": "vis"
        },
        {
          "class": "ghumover2.Image",
          "id": 9,
          "articleDetails": [
            {
              "_ref": "../../..",
              "class": "ghumover2.ArticleDetails"
            }
          ],
          "createdBy": "vis",
          "creationDate": "9999-12-30T18:30:00Z",
          "imageCode": "kherGanga",
          "imageName": "kgng42.png",
          "imagePath": "img/blog/kheerGanga/",
          "imageSeq": "1",
          "lastUpdatedDate": "9999-12-30T18:30:00Z",
          "updatedBy": "vis"
        }
      ],
      "ownerId": 1,
      "post": " \n     Finally, we reached our destination Kheergana, a white mountain with fascinating wooden hermitages and hot water geysers. We rushed into one of the hermitage, a big wooden hall with many Tandoors. We lit fire in one of the Tandoors; sat around it and ordered Pizzas.",
      "sequence": 7,
      "title": "Finally Reached"
    },
    {
      "class": "ghumover2.ArticleDetails",
      "id": 19,
      "article": {
        "_ref": "../..",
        "class": "ghumover2.Article"
      },
      "articleDetailsId": 1,
      "image": [
        {
          "class": "ghumover2.Image",
          "id": 10,
          "articleDetails": [
            {
              "_ref": "../../..",
              "class": "ghumover2.ArticleDetails"
            }
          ],
          "createdBy": "vis",
          "creationDate": "9999-12-30T18:30:00Z",
          "imageCode": "kherGanga",
          "imageName": "kgng43.png",
          "imagePath": "img/blog/kheerGanga/",
          "imageSeq": "1",
          "lastUpdatedDate": "9999-12-30T18:30:00Z",
          "updatedBy": "vis"
        }
      ],
      "ownerId": 1,
      "post": " \n    Then we went to the hot geysers. Oh My God!!! What have you made! Right in the middle of the harsh cold winter land, was the bliss; hot water springs. It was an ecstasy, on earth. We were nude (bathing in hot springs: P), and the snow was all around us, but even though it was exceptionally comfortable. It healed us like somras, all the tiredness vanished. We were rejuvenated. One of the best experiences of my life. I can go there again and again to have it.Kheerganga is the God Shiva’s own place and you can feel it when you get there. It seems that Shiva, himself, is helping you, protecting you at every difficult moment. He’s with you. Even in the ruthless hard conditions of Himalayas, there is a protective, kind and homely feeling.",
      "sequence": 8,
      "title": "Hot Springs; a great luxury and delight"
    },
    
    {
      "class": "ghumover2.ArticleDetails",
      "id": 20,
      "article": {
        "_ref": "../..",
        "class": "ghumover2.Article"
      },
      "articleDetailsId": 1,
      "image": [
        
      ],
      "ownerId": 1,
      "post": " \n     When we were returning, our guides showed us silhouette of Lord Shiva on a cliff, just nearby the boisterous waters of the Parvati River. It was the epic moment of the journey, it’s not possible to go so near to the tumultuous river, down the deadly cliff and paint it. The blessing of Lord Shiva is over the valley and that’s why the locals are such content and happy people, despite of not having the worldly acquisitive pleasure..",
      "sequence": 9,
      "title": "Seventh heaven"
    },
    {
      "class": "ghumover2.ArticleDetails",
      "id": 21,
      "article": {
        "_ref": "../..",
        "class": "ghumover2.Article"
      },
      "articleDetailsId": 1,
      "image": [
        
      ],
      "ownerId": 1,
      "post": " \n     Must try food: Siddu , a local cuisine and Pizzas\nMust do: Trek and bath in hot springs\n",
      "sequence": 10,
      "title": "Travelers’ tip"
    }]
	  }
	};				
	   
}
	 ]);







