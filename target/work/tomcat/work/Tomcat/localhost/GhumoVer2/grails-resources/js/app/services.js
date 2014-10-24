'use strict';

/* Services */

var ghumoServis = angular.module('ghumoServis', ['ngResource']);

ghumoServis.factory('ghumo', ['$resource',
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

    





