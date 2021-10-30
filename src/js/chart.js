var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart(document.getElementById("chart"), {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    },{
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    },{
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "yellow",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

new Chart(document.getElementById("other"), {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    },{
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    },{
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "yellow",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

var ctx_alt = document.getElementById("gauge-alt").getContext("2d");
var gradientStroke_alt = ctx_alt.createLinearGradient(500, 0, 100, 0);
gradientStroke_alt.addColorStop(0, "#80b6f4");
gradientStroke_alt.addColorStop(1, "#f49080");

var config_alt = {
 type: "radialGauge",
 data: {
  labels: ["Meters"],
  datasets: [
   {
    data: [75],
    backgroundColor: [gradientStroke_alt],
    borderWidth: 0,
    label: "Score"
   }
  ]
 },
 options: {
  responsive: true,
  legend: {},
  title: {
   display: true,
   text: "Altitude"
  }, 
  centerArea: {
            text: '75 m',
          },
  centerPercentage: 80
 }
};

var ctx_speed = document.getElementById("gauge-speed").getContext("2d");
var gradientStroke_speed = ctx_speed.createLinearGradient(300, 0, 100, 0);
gradientStroke_speed.addColorStop(0, "#0d6dfd");
gradientStroke_speed.addColorStop(0.5, "#0d95fd");
gradientStroke_speed.addColorStop(1, "#0d41fd");

var config_speed = {
 type: "radialGauge",
 data: {
  labels: ["Meters"],
  datasets: [
   {
    data: [95],
    backgroundColor: [gradientStroke_speed],
    borderWidth: 0,
    label: "Score"
   }
  ]
 },
 options: {
  responsive: true,
  legend: {},
  title: {
   display: true,
   text: "Speed"
  }, 
  centerArea: {
            text: '95 m/s',
          },
  centerPercentage: 80
 }
};


window.AltGauge = new Chart(ctx_alt, config_alt);
window.SpeedGauge = new Chart(ctx_speed, config_speed);
