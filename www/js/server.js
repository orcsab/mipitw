var Server = {
  name: 'heroku.com',
  port: 1111,
  awsBucket: 'mipitw',
  sendPhoto: function (data, creator, caption, date, location) {
  },

  // get a list of photos, optionally owned/created by "creator"
  // the "id" if the ID of the HTML element to which the results will
  // be placed
  getPhotoList: function (id, creator) {
    creator = (typeof creator === "undefined") ? "" : creator;

    console.log('in getPhotoList()');
    var bucket = new AWS.S3({params: {Bucket: this.awsBucket}});
    bucket.listObjects(function (err, data) {
      if (err) {
        document.getElementById(id).innerHTML =
          'Could not load objects from S3';
      } else {
        document.getElementById(id).innerHTML =
          'Loaded ' + data.Contents.length + ' items from S3';
        for (var i = 0; i < data.Contents.length; i++) {
          document.getElementById('objects').innerHTML +=
            '<li>' + data.Contents[i].Key + '</li>';
        }
      }
    });
  },

  getPhoto: function (id) {
  }
}