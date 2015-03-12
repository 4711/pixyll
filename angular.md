---
layout: page
title: AngularJS Test
permalink: /angular/
angular: true
---

<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.4/angular.min.js"></script>
  
<div ng-app="myApp" ng-controller="MyCtrl">

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

Hello, [[name]]

</div>


