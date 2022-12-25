const tabs = document.querySelectorAll(".header-btn__tab");
const tabCont = document.querySelectorAll(".header-cont__info");

if (tabCont.length > 0 || tabs.length > 0) {
  function hideCont() {
    tabCont.forEach((item) => {
      item.classList.remove("active");
    });

    tabs.forEach((item) => {
      item.classList.remove("active");
    });
  }
  function showCont(i = 0) {
    tabCont[i].classList.add("active");
    tabs[i].classList.add("active");
  }
  hideCont();
  showCont();

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      hideCont();
      showCont(index);
    });
  });
}
