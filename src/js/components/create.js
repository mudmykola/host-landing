let regModal = document.getElementById("createModal");
let regBtn = document.getElementById("createBtn");
let regSub = document.getElementById("regSub");
let regMob = document.getElementById("regMob");
let regClose = document.getElementsByClassName("create-close")[0];

regBtn.onclick = function () {
  regModal.style.display = "block";
};
// regMob.onclick = function () {
//   regModal.style.display = "block";
// };
regSub.onclick = function () {
  regModal.style.display = "none";
};
regClose.onclick = function () {
  regModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == regModal) {
    regModal.style.display = "none";
  }
};
