const flags = document.querySelectorAll(".flag");
const dropZone = document.querySelector(".drop-container");

flags.forEach((flag) => {
  flag.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", flag.alt);
  });
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const flagAlt = e.dataTransfer.getData("text/plain");
  const flagElement = document.querySelector(`[alt="${flagAlt}"]`);

  if (flagElement) {
    dropZone.appendChild(flagElement);
  }
});
