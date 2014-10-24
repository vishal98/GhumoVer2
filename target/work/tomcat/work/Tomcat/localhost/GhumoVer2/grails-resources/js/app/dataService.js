'use strict';

/* Services */

var ghumoServices = angular.module('ghumoServices', ['ngResource']);

ghumoServices.factory('ghumo', ['$resource',
  function($resource){
    return {
  places:  $resource('detail/:placeName.json', {}, {
      query: {method:'GET', params:{placeName:'detail'}, isArray:true}
   
    }),
    
     phoneName: $resource('phones/name/:phoneName.json', {}, {
      query: { method: 'GET', params: {phoneName:'phones'}, isArray: false }
    //  save: {method: 'POST', params: {dest:"modifyProduct"}},
      //update: { method: 'POST', params: {dest:"modifyProduct"}},
    })
    
} ;
  }]);

    





