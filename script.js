$(document).ready(() => {
  $("#studentform").submit((event) => {
    event.preventDefault();

    var Fname = $("#Fname").val().trim();
    if (Fname === "") {
      alert("Please Enter First Name");
      $("#Fname").focus();
      return;
    }
    var Lname = $("#Lname").val().trim();
    if (Lname === "") {
      alert("Please Enter Last Name");
      $("#Lname").focus();
      return;
    }
    var Email = $("#Email").val().trim();
    if (Email === "") {
      alert("Please Enter Email");
      $("#Email").focus();
      return;
    }

    $("#Submitbtn").click(() => {
      function getdata() {
        var student = {
          Fname: $("#Fname").val(),
          Lname: $("#Lname").val(),
          Email: $("#Email").val(),
          DOB: $("#dob").val(),
          Gender: $("input[name='Gender']:checked ").val(),
        };
        return student;
      }

      function store() {
        if (!localStorage.getItem("student")) {
          localStorage.setItem("student", JSON.stringify(getdata()));
        } else {
          localStorage.removeItem("student");
          localStorage.setItem("student", JSON.stringify(getdata()));
        }
      }

      store();
      window.location.href = "display.html";
    });
  });
});
