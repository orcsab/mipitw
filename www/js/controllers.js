angular.module('starter.controllers', [])

.controller('ExploreCtrl', function($scope, $http) {
  $scope.listStoredImages = function () {
    console.log('In listStoredImages()');

    // Server.getPhotoList('storageImages');

    console.log('listStoredImages(): ' + Server.name + '/getPhotos');
    $http({method: 'GET',
           url: Server.name + '/getPhotos'}).
      success(function(data, status, headers, config) {
        console.log('listStoredImages(): successful GET');
        $scope.photoMetaList = angular.fromJson(data);
      }).
      error(function(data, status, headers, config) {
        console.log('listStoredImages(): failed GET');
      });

  }
})

.controller('SnapCtrl', function($scope, $http) {
  $scope.photo = {
    name: "unnamed",
    location: "unspecified",
    caption: "uncompleted"
  }
  $scope.takePic = function() {
    console.log('In takePic()');
    capturePhoto();
  }
  $scope.submitPhoto = function(photo) {
    console.log('in submitPhoto()');
    var photo = {
      meta: {
        user: $scope.photo.name,
        date: new Date(),
        caption: $scope.photo.caption,
        location: $scope.photo.location
      }
      // data: document.getElementById('smallImage').src
    };

    console.log('submitPhoto(): posting ' + JSON.stringify(photo.meta));
    $http({
      url: Server.name + '/postPhoto',
      method: "POST",
      data: photo.meta,
      headers: {'Content-Type': 'application/json'}
    }).success(function(data, status, headers, config) {
      $scope.data = data;
    }).error(function(data, status, headers, config) {
      $scope.status = status;
    });

  }
})

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

.controller('MyPicsCtrl', function($scope) {
});
