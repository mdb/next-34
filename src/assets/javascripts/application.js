(function() {
  function getLocation(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(callback);
    }
  }

  function times(stops) {
    return stops.map(function(stop) {
      return stop.time + 'm';
    }).join(', ');
  }

  function templateData(data) {
    return '<h1>' + data.inbound[0].stopName + '</h1>' +
      '<h2>East</h2>' +
      '<p>' + times(data.inbound) + '</p>' +
      '<h2>West</h2>' +
      '<p>' + times(data.outbound) + '</p>';
  }

  getLocation(function(pos) {
    var url = 'https://septascheduler.herokuapp.com/point?route=34&lat=' + pos.coords.latitude + '&lng=' + pos.coords.longitude,
        target = document.querySelector('div.next');

    fetch(url).then(function(response) {
      return response.json();
    }).then(function(data) {
      target.innerHTML = templateData(data);
    }).catch(function(err) {
      console.log(console.log(err));
    });
  });
})();
