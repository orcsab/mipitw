var Server = {
  name: 'pure-sands-5851.herokuapp.com',
  port: 80,
  awsBucket: 'mipitw',
  sendPhoto: function (data, creator, caption, date, location) {
  },

  // get a list of photos, optionally owned/created by "creator"
  // the "id" if the ID of the HTML element to which the results will
  // be placed
  getPhotoList: function (id, creator) {
    creator = (typeof creator === "undefined") ? "" : creator;

    console.log('in getPhotoList()');
    $http({method: 'GET', url: this.name + '/getPhotos'}).
      success(function(data, status, headers, config) {
        document.getElementById(id).innerHTML = data;
      }).
      error(function(data, status, headers, config) {
        document.getElementById(id).innerHTML = "failed to get photo meta from " + name;
      });
  },

  getPhoto: function (id) {
  }
}