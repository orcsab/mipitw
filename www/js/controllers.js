angular.module('starter.controllers', [])

.controller('ExploreCtrl', function($scope) {
})

.controller('SnapCtrl', function($scope) {
  $scope.takePic = function() {
    capturePhoto();
  }
})

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

.controller('MyPicsCtrl', function($scope) {
});
