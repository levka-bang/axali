document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const login  = document.getElementById("login");
  const pwd    = document.getElementById("password");
  const toggle = document.getElementById("togglePassword");

  setTimeout(() => {
    splash.classList.add("hidden");
    login.classList.add("visible");
  }, 1000);

  if (pwd && toggle) {
    toggle.addEventListener("click", () => {
      const isPwd = pwd.type === "password";
      pwd.type = isPwd ? "text" : "password";

    });
  }
});
