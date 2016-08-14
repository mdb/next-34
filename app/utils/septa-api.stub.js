export {getMockSchedule};

function getMockSchedule() {
  return {
    stopName: 'Baltimore Av & 50th St',
    inbound: [{
      day: "Sat",
      date: "08/13/16 10:13 am",
      direction: "1",
      route: "34",
      stopName: "Baltimore Av & 50th St",
      time: "10:13a"
    }],
    outbound: [{
      day: "Sat",
      date: "08/13/16 10:08 am",
      direction: "0",
      route: "34",
      stopName: "Baltimore Av & 50th St",
      time: "10:08a"
    }],
    alert: {
      advisoryMessage: 'advisor message',
      currentMessage: 'Trolley tunnel to close for improvements beginning Friday, Aug. 12 at 8 p.m. | More details at <a href="http://www.septa.org/rebuilding/2016-trolley-tunnel-blitz.html" target="_top">http://www.septa.org/rebuilding/2016-trolley-tunnel-blitz.html</a>',
      detourEndTime: '',
      detourMessage: '',
      detourReason: '',
      detourStartLocation: '',
      detourStartTime: '',
      lastUpdated: 'Aug 12 2016 07:40:25:460PM'
    }
  };
}
