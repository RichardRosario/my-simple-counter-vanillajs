let count = 0;

const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    styles.contains("decrease")
      ? count--
      : styles.contains("increase")
      ? count++
      : (count = 0);
    // refactor to es6 ternary operator
    count > 0
      ? (value.style.color = "green")
      : count < 0
      ? (value.style.color = "red")
      : (value.style.color = "#000000");

    value.textContent = count;
  });
});
