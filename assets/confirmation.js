(function () {
  const confirmation = document.querySelector("#confirmation_num");
  confirmation.textContent = Math.floor(Math.random() * (50000 - 0));
})();

(function () {
  window.localStorage.getItem("userdata");
  var userdetails = JSON.parse(localStorage.getItem("userdata"));
  console.log(document.getElementById("customer-name"));
  document.getElementById("customer-name").innerText = userdetails[0];
  document.getElementById("tattoo-date").innerHTML = userdetails[4];
})();
