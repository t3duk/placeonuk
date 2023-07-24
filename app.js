setInterval(() => {
  fetch("https://api.daad.wtf/uop")
    .then((res) => res.json())
    .then((data) => {
      var status;
      if (data.status == 0) {
        status = "Pending";
      } else if (data.status == 1) {
        status = "Executed";
      }
      const orderHtml = document.getElementById("order");
      const timeHtml = document.getElementById("time");
      const statusHtml = document.getElementById("status");
      orderHtml.innerHTML = data.order;
      timeHtml.innerHTML = data.time;
      statusHtml.innerHTML = status;
    });
}, 1000);
