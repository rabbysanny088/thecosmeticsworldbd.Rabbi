const koreaCheckbox = document.getElementById("koreaCheckbox");

const filter_icon_svg = document.querySelector(".filter_icon_svg");

const res_fill = document.querySelector(".res_fill");
const filter_close_X = document.querySelector(".filter_close_X");

document.addEventListener("DOMContentLoaded", () => {
  var checkboxes = document.querySelectorAll(".form-check-input");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
          cb.checked = false;
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("koreaLabel").addEventListener("click", function () {
    this.classList.toggle("highlight");
  });
});

filter_icon_svg.addEventListener("click", () => {
  res_fill.style.display = "block";
});
filter_close_X.addEventListener("click", () => {
  res_fill.style.display = "none";
});
