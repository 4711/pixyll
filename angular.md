---
layout: page
title: AngularJS Test
permalink: /angular/
---

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.12/angular.min.js"></script>

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

