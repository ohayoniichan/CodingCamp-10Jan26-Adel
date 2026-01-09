document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("dob", dob);

  alert("Data berhasil disimpan ✨");
});
