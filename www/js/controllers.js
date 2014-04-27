angular.module('starter.controllers', [])

.controller('ExploreCtrl', function($scope, $http) {
  $scope.listStoredImages = function () {
    console.log('In listStoredImages()');

    // Server.getPhotoList('storageImages');

    console.log('listStoredImages(): ' + Server.name + '/getPhotos');
    $http({method: 'GET',
           url: 'http://' + Server.name + '/getPhotos'}).
      success(function(data, status, headers, config) {
        console.log('listStoredImages(): successful GET');
        $scope.photoMetaList = angular.fromJson(data);
      }).
      error(function(data, status, headers, config) {
        console.log('listStoredImages(): failed GET');
        $scope.photoMetaList = ['fail'];
      });

  }
})

.controller('SnapCtrl', function($scope) {
  $scope.takePic = function() {
    console.log('In takePic()');
    capturePhoto();
  }
  $scope.submitPhoto = function() {
    console.log('in submitPhoto()');
    var photo = new Photo();

    photo.meta.creator = document.getElementById('name').src;
    photo.meta.date = document.getElementById('date').src;
    photo.meta.caption = document.getElementById('caption').src;
    photo.meta.location = document.getElementById('location').src;
    photo.data = document.getElementById('smallImage').src;

  }
})

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

.controller('MyPicsCtrl', function($scope) {
});
