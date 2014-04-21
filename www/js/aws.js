

//  From http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/browser-configuring.html
AWS.config.region = 'ap-southeast-1';

//  Also in the above URL there are details about configuring CORS, which I have
//  for the time being ignored.


function awsListImages () {
  var bucket = new AWS.S3({params: {Bucket: 'mipitw'}});
  bucket.listObjects(function (err, data) {
    if (err) {
      document.getElementById('storageImages').innerHTML =
        'Could not load objects from S3';
    } else {
      document.getElementById('storageImages').innerHTML =
        'Loaded ' + data.Contents.length + ' items from S3';
      for (var i = 0; i < data.Contents.length; i++) {
        document.getElementById('objects').innerHTML +=
          '<li>' + data.Contents[i].Key + '</li>';
      }
    }
  });

}