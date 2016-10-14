<<<<<<< HEAD
if (typeof localStorage == 'undefined')
{
  alert("Local storage is not available")
}
else
{
  var username = document.getElementById()
  function store() {
      localStorage.setItem('username', name.value);
      localStorage.setItem('pw', pw.value);
  }
=======
if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    //store values
    function register() {
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      var title = document.getElementById('title').value;
      var fullname = document.getElementById('fullname').value;
      var gender = document.getElementById('gender').value;
      var email = document.getElementById('email').value;
      var birthdate = document.getElementById('birthdate').value;
      var ccn = document.getElementById('ccn').value;
      var apple = document.getElementById('apple').value;
      //store
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('title', title);
      localStorage.setItem('fullname', fullname);
      localStorage.setItem('gender', gender);
      localStorage.setItem('email', email);
      localStorage.setItem('birthdate', birthdate);
      localStorage.setItem('ccn', ccn);
      localStorage.setItem('apple', apple);

      document.getElementById('registration').innerHTML =
      "Thank you for joining the North American League of Greninja Enthusiasts!"
      }
}
else {
    document.getElementById("result").innerHTML =
    "Sorry, your browser does not support Web Storage...";
>>>>>>> origin/master
}
