setInterval(() => {
  fetch("https://api.daad.wtf/uop")
    .then((res) => res.json())
    .then((data) => {
      const order = data.order;
      const time = data.time;
      var status;
      if (data.status == 0) {
        status = "Pending";
      } else if (data.status == 1) {
        status = "Executed";
      }
      const orderHtml = document.getElementById("order");
      const timeHtml = document.getElementById("time");
      const statusHtml = document.getElementById("status");
      orderHtml.innerHTML = order;
      timeHtml.innerHTML = time;
      statusHtml.innerHTML = status;
    });
}, 1000);
