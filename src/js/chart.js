var xValues = [0];

var acc_gyro = new Chart(document.getElementById("chart"), {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [0],
      borderColor: "red",
      fill: false
    },{
      data: [0],
      borderColor: "green",
      fill: false
    },{
      data: [0],
      borderColor: "yellow",
      fill: false
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Acc / Gyro"
    },
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
    legend: {display: false},
    title: {
      display: true,
      text: "Altitude"
    },
  }
});

var ctx_alt = document.getElementById("gauge-alt").getContext("2d");
var gradientStroke_alt = ctx_alt.createLinearGradient(500, 0, 100, 0);
gradientStroke_alt.addColorStop(0, "#80b6f4");
gradientStroke_alt.addColorStop(1, "#f49080");

var config_alt = {
 type: "radialGauge",
 data: {
  labels: ["m"],
  datasets: [
   {
    data: [0],
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
            text: '0 m',
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
  labels: ["m/s"],
  datasets: [
   {
    data: [0],
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
            text: '0 m/s',
          },
  centerPercentage: 80
 }
};

window.AltGauge = new Chart(ctx_alt, config_alt);
window.SpeedGauge = new Chart(ctx_speed, config_speed);

function test() {
  return Math.random();
}

var count = 1;
setInterval(function () {
  AltGauge.data.datasets[0].data[0] = count%100;
  AltGauge.options.centerArea.text = count + " m";
  AltGauge.update();

  SpeedGauge.data.datasets[0].data[0] = count%100;
  SpeedGauge.options.centerArea.text = count + " m/s";
  SpeedGauge.update();

  if (count > 50) {
    xValues.splice(0, 1);
    acc_gyro.data.datasets[0].data.splice(0, 1);
    acc_gyro.data.datasets[0].data.push(test());
    acc_gyro.data.datasets[1].data.splice(0, 1);
    acc_gyro.data.datasets[1].data.push(test());
    acc_gyro.data.datasets[2].data.splice(0, 1);
    acc_gyro.data.datasets[2].data.push(test());
    xValues.push(count);
  } else {
    acc_gyro.data.datasets[0].data.push(test());
    acc_gyro.data.datasets[1].data.push(test());
    acc_gyro.data.datasets[2].data.push(test());
    xValues.push(count);
  }
  acc_gyro.update();

  count++;
}, 200)