const letters = [
  ".three",
  ".a",
  ".b",
  ".c",
  ".d",
  ".e",
  ".f",
  ".g",
  ".h",
  ".i",
  ".j",
  ".k",
  ".l",
  ".n",
  ".m",
  ".o",
  ".p",
  ".r",
  ".s",
  ".t",
  ".u",
  ".v",
  ".w",
  ".x",
  ".y",
  ".z",
];

letters.forEach((letter) => {
  const clickable = document.querySelector(letter);

  clickable.addEventListener("click", (event) => {
    letters.forEach((letter) => {
      document.querySelector(letter).classList.remove("a_to_z_toggle");
    });
    event.target.classList.toggle("a_to_z_toggle");
  });
});
