let refs = {
  listComponents: document.querySelectorAll(".portfolio__item"),

  btns: document.querySelector(".filters"),
  btnAll: document.querySelector("[name='all']"),
  btnWeb: document.querySelector("[name='web']"),
  btnApplication: document.querySelector("[name='application']"),
  btnDesign: document.querySelector("[name='design']"),
  btnMarketing: document.querySelector("[name='marketing']"),
};

refs.btns.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    document.querySelector(".active").classList.remove("active");
  }
});

refs.btnAll.onclick = () => {
  let activeAll = document.querySelectorAll(".js-hidden");
  activeAll.forEach((element) => {
    element.classList.remove("js-hidden");
  });
  return;
};

refs.btnWeb.onclick = () => {
  refs.listComponents.forEach((element) => {
    element.classList.add("js-hidden");
  });
  let activeDesign = document.querySelectorAll(".js-web");
  activeDesign.forEach((element) => {
    element.classList.remove("js-hidden");
  });
};

refs.btnApplication.onclick = () => {
  refs.listComponents.forEach((element) => {
    element.classList.add("js-hidden");
  });
  let activeDesign = document.querySelectorAll(".js-application");
  activeDesign.forEach((element) => {
    element.classList.remove("js-hidden");
  });
};

refs.btnDesign.onclick = () => {
  refs.listComponents.forEach((element) => {
    element.classList.add("js-hidden");
  });
  let activeDesign = document.querySelectorAll(".js-design");
  activeDesign.forEach((element) => {
    element.classList.remove("js-hidden");
  });
};

refs.btnMarketing.onclick = () => {
  refs.listComponents.forEach((element) => {
    element.classList.add("js-hidden");
  });
  let activeDesign = document.querySelectorAll(".js-marketing");
  activeDesign.forEach((element) => {
    element.classList.remove("js-hidden");
  });
};
