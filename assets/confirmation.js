(function () {
  const confirmation = document.querySelector("#confirmation_num");
  confirmation.textContent = Math.floor(Math.random() * (50000 - 0));
})();

(function () {
  window.localStorage.getItem("userdata");
  var userdetails = JSON.parse(localStorage.getItem("userdata"));
  document.getElementById("customer-name").value = userdetails[1];
  document.getElementById("tattoo-date").value = userdetails[4];
})();
