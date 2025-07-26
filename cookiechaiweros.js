document.addEventListener("DOMContentLoaded", () => {
  const saved = Cookies.get("saved_username");
  if (saved) {
    document.getElementById("email").value = saved;
    document.getElementById("save").checked = true;
  }
});

const formEl = document.getElementById("form-login");
formEl.addEventListener("submit", function (e) {

  const checkbox = document.getElementById("save");
  const emailVal = document.getElementById("email").value;

  if (checkbox.checked) {
    
    Cookies.set("saved_username", emailVal, { expires: 7, path: "/" });
  } else {
    Cookies.remove("saved_username", { path: "/" });
  }

});
