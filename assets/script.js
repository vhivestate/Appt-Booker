var userdata = [];

var formEl = document.querySelector("#client-form");
var igEl = document.querySelector("ig-section");

// Artist generator API
var apiUrl = "https://random-data-api.com/api/users/random_user?size=5";

// make a get request to url
fetch(apiUrl).then(function (response) {
  // request was successful
  if (response.ok) {
    response.json().then(function (data) {
      document.getElementById("artist-name").innerHTML =
        data[0].first_name + " " + data[0].last_name;
      document.getElementById("artist-email").innerHTML = data[0].email;
      document.getElementById("artist-picture").innerHTML =
        "<img src=" + data[0].avatar + "/>";

      document.getElementById("artist2-name").innerHTML =
        data[1].first_name + " " + data[1].last_name;
      document.getElementById("artist2-email").innerHTML = data[1].email;
      document.getElementById("artist2-picture").innerHTML =
        "<img src=" + data[1].avatar + "/>";

      document.getElementById("artist3-name").innerHTML =
        data[1].first_name + " " + data[2].last_name;
      document.getElementById("artist3-email").innerHTML = data[2].email;
      document.getElementById("artist3-picture").innerHTML =
        "<img src=" + data[2].avatar + "/>";
    });
  } else {
    // if not successful, redirect to homepage
    document.location.replace("./index.html");
  }
});

var formHandler = function () {
  event.preventDefault();
  var formNameInput = document.querySelector("input[name='name']").value;
  var formEmailInput = document.querySelector("input[name='email']").value;
  var formPhoneInput = document.querySelector("input[name='phone']").value;
  var formConfirmAgeInput = document.querySelector("input[name='age-confirm']");
  var formDescInput = document.querySelector(
    "textarea[name='tat-description']"
  ).value;
  console.log(formConfirmAgeInput.checked);
  // check if inputs are empty
  if (
    formNameInput === "" ||
    formEmailInput === "" ||
    formPhoneInput === "" ||
    formConfirmAgeInput.checked === false ||
    formDescInput === ""
  ) {
    alert("You need to fill out the Client Form!");
    return false;
  } else {
    saveForm();
  }
};

formEl.addEventListener("submit", formHandler);

var saveForm = function () {
  userdata.push(document.querySelector("input[name='name']").value);
  userdata.push(document.querySelector("input[name='email']").value);
  userdata.push(document.querySelector("input[name='phone']").value);
  userdata.push(
    document.querySelector("textarea[name='tat-description']").value
  );
  console.log(userdata);
  localStorage.setItem("userdata", JSON.stringify(userdata));
  window.location.href = "/confirmation.html";
  //   JSON.parse(localStorage.getItem("userdata"));
};

calBtn = document.getElementById("calBtn");
calendarEl = document.querySelector("#calender-section");

calBtn.addEventListener("click", function () {
  event.preventDefault();
  console.log("testing", calendarEl);
  calendarEl.classList.add("is-active");
});
