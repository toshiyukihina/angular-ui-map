'use strict';

/**
 * @ngdoc function
 * @name angularUiMapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularUiMapApp
 */
angular.module('angularUiMapApp')
  .controller('MainCtrl', [
    '$scope', 
    '$log',
    function($scope, $log) {
      $scope.myMarkers = [];

      $scope.mapOptions = {
        center: new google.maps.LatLng(35.784, -78.670),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $scope.defaultMapOptions = angular.copy($scope.mapOptions);

      $scope.addMarker = function($event, $params) {
        $scope.myMarkers.push(new google.maps.Marker({
          map: $scope.myMap,
          position: $params[0].latLng
        }));
      };

      $scope.setZoomMessage = function(zoom) {
        $scope.zoomMessage = 'You just zoomed to ' + zoom + '!';
        $log.debug(zoom, 'zoomed');
      };

      $scope.openMarkerInfo = function(marker) {
        $scope.currentMarker = marker;
        $scope.currentMarkerLat = marker.getPosition().lat();
        $scope.currentMarkerLng = marker.getPosition().lng();
        $scope.myInfoWindow.open($scope.myMap, marker);
      };

      $scope.setMarkerPosition = function(marker, lat, lng) {
        marker.setPosition(new google.maps.LatLng(lat, lng));
      };

      $scope.setDefaultOptions = function() {
        $log.debug('* setDefaultOptions');
        $scope.myMarkers = [];
        $scope.mapOptions.zoom  = 15;
      };

      $scope.onDoubleClick = function() {
        $log.debug('*** onDoubleClick');
      };
    }]);
