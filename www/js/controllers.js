angular.module('starter.controllers', [])

.controller('ExploreCtrl', function($scope) {
  $scope.listStoredImages = function () {
    console.log('In listStoredImages()');
    awsListImages();
  }
})

.controller('SnapCtrl', function($scope) {
  $scope.takePic = function() {
    console.log('In takePic()');
    capturePhoto();
  }
})

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

.controller('MyPicsCtrl', function($scope) {
});
