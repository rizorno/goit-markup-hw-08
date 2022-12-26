let refs = {
  listComponents: document.querySelectorAll(".portfolio__item"),

  btns: document.querySelector(".filters"),
  btnAll: document.querySelector("[name='all']"),
  btnWeb: document.querySelector("[name='web']"),
  btnApplication: document.querySelector("[name='application']"),
  btnDesign: document.querySelector("[name='design']"),
  btnMarketing: document.querySelector("[name='marketing']"),
};

refs.btnWeb.addEventListener("click", () => sortList("js-web"));
refs.btnApplication.addEventListener("click", () => sortList("js-application"));
refs.btnDesign.addEventListener("click", () => sortList("js-design"));
refs.btnMarketing.addEventListener("click", () => sortList("js-marketing"));

refs.btns.addEventListener("click", (e) => {
  if (e.target !== "BUTTON") {
    if (document.querySelector(".active") === null) {
      return;
    }
    document.querySelector(".active").classList.remove("active");
  }
});

function sortList(nameSelector) {
  refs.listComponents.forEach((element) => {
    if (element.classList.contains(nameSelector)) {
      element.classList.remove("js-hidden");
    } else {
      element.classList.add("js-hidden");
    }
  });
}

refs.btnAll.onclick = () => {
  let activeAll = document.querySelectorAll(".js-hidden");
  activeAll.forEach((element) => {
    element.classList.remove("js-hidden");
  });
  return;
};
