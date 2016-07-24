(function() {
  function getLocation(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(callback);
    }
  }

  function times(stops) {
    return stops.map(function(stop) {
      return '<li>' + stop.time + 'm</li>';
    }).join('');
  }

  function templateData(data) {
    return '<h1>' + data.inbound[0].stopName + '</h1>' +
      '<h2>East</h2>' +
      '<ol>' + times(data.inbound) + '</ol>' +
      '<h2>West</h2>' +
      '<ol>' + times(data.outbound) + '</ol>';
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
