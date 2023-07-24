var order = data.order;
var time = data.time;
var status;
if (data.status == 0) {
  status = "Pending";
} else if (data.status == 1) {
  status = "Executed";
}
var orderHtml = document.getElementById("order");
var timeHtml = document.getElementById("time");
var statusHtml = document.getElementById("status");
orderHtml.innerHTML = order;
timeHtml.innerHTML = time;
statusHtml.innerHTML = status;

setInterval(() => {
  fetch("https://api.daad.wtf/uop")
    .then((res) => res.json())
    .then((data) => {
      var order = data.order;
      var time = data.time;
      var status;
      if (data.status == 0) {
        status = "Pending";
      } else if (data.status == 1) {
        status = "Executed";
      }
      var orderHtml = document.getElementById("order");
      var timeHtml = document.getElementById("time");
      var statusHtml = document.getElementById("status");
      orderHtml.innerHTML = order;
      timeHtml.innerHTML = time;
      statusHtml.innerHTML = status;
    });
}, 1000);
