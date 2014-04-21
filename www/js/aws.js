

//  From http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/browser-configuring.html
AWS.config.region = 'ap-southeast-1';



//  Code stolen from http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/browser-examples.html
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

function awsLoadImage () {
  var bucket = new AWS.S3({params: {Bucket: 'mipitw'}});
  var smallImage = document.getElementById('smallImage');
  var data = smallImage.src;

  var results = document.getElementById('snapStatus');

  var params = {Key: 'image.jpg', Body: data};
  bucket.putObject(params, function (err, data) {
      results.innerHTML = err ? 'ERROR!' : 'SAVED.';
  }
}