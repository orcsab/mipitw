var server = angular.module('Server', []);

server.factory('Server', function($http) {
  return {
    // url: 'http://pure-sands-5851.herokuapp.com',
    url: 'http://localhost:4791',

    // args:
    // photo is an object containing the image data and metadata.
    sendPhoto: function (photo) {
      return $http({url: this.url + '/postPhoto', method: 'POST', data: photo, headers: {'Content-Type': 'application/json'}})
              .success (function(data, status, headers, config) {
                console.log("sendPhoto: success");
              }).error (function(data, status, headers, config) {
                throw "sendPhoto: failure: " + JSON.stringify(status);
              });
    },

    getPhotoList: function () {
      console.log('entered Server.getPhotoList()');
      return $http({method: 'GET', url: this.url + '/getPhotos'})
      .success(function(data, status, headers, config) {
        console.log('Server.getPhotoList: successful GET of /getPhotos: ' + JSON.stringify(data));
        return data;
      })
      .error(function(data, status, headers, config) {
        console.log('Server.getPhotoList: failed GET of /getPhotos ' + status);
      });
    },

    //  arguments
    //  id: must be set to the image id (AWS key)
    //  thumb: if set to true then the thumbnail will be returned.  otherwise the original
    //  url: if set to true then a url to image will be returned.  otherwise the data.
    getPhoto: function (args) {
      console.log("entered Server.getPhoto()");
      if (!args.id) throw "getPhoto must be called with id argument";
      var size = (args.thumb) ? '-thumb' : '-orig';
      var type = (args.url) ? 'url' : 'data';
      var key = args.id + size;
      console.log("Server.getPhoto() getting for key " + key);
      return $http({method: 'GET', url: this.url + '/getPhoto', params: {key: key, type: type}})
      .success(function(data) {
        console.log("Server.getPhoto() success: " + JSON.stringify(data));
        return data;
      })
      .error(function (reason) {
        console.log("Server.getPhoto() failure");
        return reason;
      });
    }
  }
});