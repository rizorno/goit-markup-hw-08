let refs = {
  listComponents: document.querySelectorAll(".portfolio__item"),

  listFilters: document.querySelector(".filters"),
  btnAll: document.querySelector("[name='all']"),
  btnWeb: document.querySelector("[name='web']"),
  btnApplication: document.querySelector("[name='application']"),
  btnDesign: document.querySelector("[name='design']"),
  btnMarketing: document.querySelector("[name='marketing']"),
};

refs.btnAll.classList.add("active");

refs.listFilters.addEventListener("click", (e) => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  document.querySelector(".active").classList.remove("active");
  e.target.classList.toggle("active");

  if (e.target === refs.btnWeb) {
    sortList("js-web");
    return;
  }

  if (e.target === refs.btnApplication) {
    sortList("js-application");
    return;
  }

  if (e.target === refs.btnDesign) {
    sortList("js-design");
    return;
  }

  if (e.target === refs.btnMarketing) {
    sortList("js-marketing");
    return;
  }

  if (e.target === refs.btnAll) {
    let activeAll = document.querySelectorAll(".js-hidden");
    activeAll.forEach((element) => {
      element.classList.remove("js-hidden");
    });
    return;
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
