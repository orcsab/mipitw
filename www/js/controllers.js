angular.module('starter.controllers', [])

.controller('ExploreCtrl', function($scope) {
})

.controller('SnapCtrl', function($scope) {
  // This code came from here: http://forum.ionicframework.com/t/how-to-make-uploading-files-or-images-using-ionicframwork-or-angularjs/391/11
  $scope.takePic = function() {
    capturePhoto();
  }
})

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

.controller('MyPicsCtrl', function($scope) {
});
