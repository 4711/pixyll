---
layout: page
title: AngularJS Test
permalink: /angular/
angular: true
---
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.4/angular.min.js"></script>
  
<div ng-app="four04App" ng-controller="PostListCtrl">

<script>
  var myApp = angular.module('myApp', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

  function MyCtrl($scope) {
    $scope.name = 'Clark Kent';
  }
  </script>

  ## Should print name

  <div ng-controller="MyCtrl">
    Hello, [[name]]
  </div>

</div>


