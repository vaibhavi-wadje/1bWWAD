$(document).ready(function () {
  getData();
});

function getData() {
  let localStorageData = localStorage.getItem("student");
  let studentObj = JSON.parse(localStorageData);
  console.log(studentObj);
  $("#Fname").text(studentObj.Fname);
  $("#Lname").text(studentObj.Lname);
  $("#Email").text(studentObj.Email);
  $("#Gender").text(studentObj.Gender);
  $("#dob").text(studentObj.DOB);
}
