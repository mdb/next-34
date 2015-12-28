(function() {
  function getLocation(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(callback);
    }
  }

  getLocation(function(pos) {
    var url = 'https://septascheduler.herokuapp.com/point?route=34&lat=' + pos.coords.latitude + '&lng=' + pos.coords.longitude;

    fetch(url).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    }).catch(function(err) {
      console.log(console.log(err));
    });
  });
})();
