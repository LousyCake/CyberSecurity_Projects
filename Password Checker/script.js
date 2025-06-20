document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const strengthBar = document.getElementById("strength-bar");
  const feedback = document.getElementById("feedback");
  const toggleVisibility = document.getElementById("toggle-visibility");
  const themeSwitch = document.getElementById("theme-switch");
  const generateBtn = document.getElementById("generate-pass");
  const copyBtn = document.getElementById("copy-pass");

  const rules = {
    length: { el: document.getElementById("length"), test: val => val.length >= 8 },
    uppercase: { el: document.getElementById("uppercase"), test: val => /[A-Z]/.test(val) },
    lowercase: { el: document.getElementById("lowercase"), test: val => /[a-z]/.test(val) },
    number: { el: document.getElementById("number"), test: val => /[0-9]/.test(val) },
    special: { el: document.getElementById("special"), test: val => /[^A-Za-z0-9]/.test(val) },
  };

  const evaluate = () => {
    const val = passwordInput.value;
    let passed = 0;

    Object.values(rules).forEach(({ el, test }) => {
      if (test(val)) {
        el.classList.add("pass");
        el.classList.remove("fail");
        passed++;
      } else {
        el.classList.remove("pass");
        el.classList.add("fail");
      }
    });

    const levels = ["Weak", "Medium", "Strong"];
    const colors = ["var(--danger)", "var(--warning)", "var(--success)"];
    const level = passed <= 2 ? 0 : passed <= 4 ? 1 : 2;

    strengthBar.style.backgroundColor = colors[level];
    feedback.textContent = `Strength: ${levels[level]}`;
  };

  const generatePassword = () => {
    const length = 14;
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";
    const special = "!@#$%^&*()-_=+[]{}|;:,.<>?";
    const all = upper + lower + nums + special;

    let password = "";
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += nums[Math.floor(Math.random() * nums.length)];
    password += special[Math.floor(Math.random() * special.length)];

    for (let i = 4; i < length; i++) {
      password += all[Math.floor(Math.random() * all.length)];
    }

    password = password
      .split('')
      .sort(() => 0.5 - Math.random())
      .join('');

    passwordInput.value = password;
    evaluate();
  };

  const copyToClipboard = () => {
    const text = passwordInput.value;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy to Clipboard"), 2000);
    });
  };

  const togglePassword = () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    toggleVisibility.textContent = type === "password" ? "👁️" : "🙈";
  };

  const handleTheme = () => {
    document.body.classList.toggle("dark", themeSwitch.checked);
  };

  passwordInput.addEventListener("input", evaluate);
  toggleVisibility.addEventListener("click", togglePassword);
  themeSwitch.addEventListener("change", handleTheme);
  generateBtn.addEventListener("click", generatePassword);
  copyBtn.addEventListener("click", copyToClipboard);

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    themeSwitch.checked = true;
    handleTheme();
  }
});