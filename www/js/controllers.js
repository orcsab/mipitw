angular.module('starter.controllers', ['Server'])

.controller('ExploreCtrl',
            ['$scope', '$http', 'Server',
             function($scope, $http, server) {
  $scope.photoList = {};

  console.log("entering ExploreCtrl");
  var getThumbs = function(photoList) {
    console.log("getThumbs(): photoList = " + JSON.stringify(photoList));
    for (i in photoList) {
      console.log("getThumbs(): getting URL for " + JSON.stringify(photoList[i]));
      server.getPhoto({id: photoList[i]._id, thumb: true, url: false}).success (function(data) {
        console.log("getThumbs(): got thumb: " + data);
        photoList[i].data = "data:image/jpeg;base64," + data;
      })
      .error  (function (reason) {
        console.log("ExploreCtrl: failed to get thumb for " + photoList[i]._id);
      });
    }

    console.log("ExplorCtrl: photoList = " + JSON.stringify(photoList));
    $scope.photoList = photoList;
  };

  console.log("ExploreCtrl: calling server.getPhotoList()");
  server.getPhotoList().success(getThumbs).error(function (reason) {
    console.log("ExploreCtrl: failed to fetch photoList: " + reason);
  });
}])

.controller('SnapCtrl', ['$scope', '$http', 'Server', function($scope, $http, server) {
  var smallImage = document.getElementById('smallImage');
  smallImage.style.display = 'block';
  smallImage.src = "data:image/jpeg;base64," + SampleImage.data;

  $scope.photo = {
    name: "",
    location: "",
    caption: ""
  }
  $scope.takePic = function() {
    console.log('In takePic()');
    capturePhoto();
  }
  $scope.submitPhoto = function(photo) {
    console.log('in submitPhoto()');
    var date = new Date();

    //  split out the base64 encoded image data from its header.
    var parts = document.getElementById('smallImage').src.split(",");
    console.log("submitPhoto(): image data split into parts: " + parts.length);
    var photo = {
      meta: {
        user: $scope.photo.name,
        caption: $scope.photo.caption,
        location: $scope.photo.location
      },
      data: parts[1]
    };

    console.log('submitPhoto(): posting ' + JSON.stringify(photo));
    server.sendPhoto(photo);
    console.log('submitPhoto(): photo appears to be sent');
  }
}])

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

.controller('MyPicsCtrl', function($scope) {
});
