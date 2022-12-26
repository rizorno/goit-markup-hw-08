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
  if (e.target !== "BUTTON") {
    if (document.querySelector(".active") === null) {
      return;
    }
    document.querySelector(".active").classList.remove("active");
  }
});

// window.addEventListener("click", (e) => {
//   if (e.target.nodeName !== "BUTTON") {
//     refs.btnAll.classList.add("active");
//     let activeAll = document.querySelectorAll(".js-hidden");
//     activeAll.forEach((element) => {
//       element.classList.remove("js-hidden");
//     });
//     return;
//   }
// });

refs.btnAll.onclick = () => {
  let activeAll = document.querySelectorAll(".js-hidden");
  activeAll.forEach((element) => {
    element.classList.remove("js-hidden");
  });
  return;
};

// refs.btnWeb.onclick = () => {
//   refs.listComponents.forEach((element) => {
//     element.classList.add("js-hidden");
//   });
//   let activeDesign = document.querySelectorAll(".js-web");
//   activeDesign.forEach((element) => {
//     element.classList.remove("js-hidden");
//   });
// };

// refs.btnApplication.onclick = () => {
//   refs.listComponents.forEach((element) => {
//     element.classList.add("js-hidden");
//   });
//   let activeList = document.querySelectorAll(".js-application");
//   activeList.forEach((element) => {
//     element.classList.remove("js-hidden");
//   });
// };

// refs.btnDesign.onclick = () => {
//   refs.listComponents.forEach((element) => {
//     element.classList.add("js-hidden");
//   });
//   let activeList = document.querySelectorAll(".js-design");
//   activeList.forEach((element) => {
//     element.classList.remove("js-hidden");
//   });
// };

// refs.btnMarketing.onclick = () => {
//   refs.listComponents.forEach((element) => {
//     element.classList.add("js-hidden");
//   });
//   let activeList = document.querySelectorAll(".js-marketing");
//   activeList.forEach((element) => {
//     element.classList.remove("js-hidden");
//   });
// };

function sortList(nameSelector) {
  refs.listComponents.forEach((element) => {
    element.classList.add("js-hidden");
  });
  let activeList = document.querySelectorAll(nameSelector);
  console.log(activeList);

  activeList.forEach((element) => {
    element.classList.remove("js-hidden");
  });
}

refs.btnWeb.addEventListener("click", sortList(".js-web"));
refs.btnApplication.addEventListener("click", sortList(".js-application"));

// refs.btnWeb.onclick = sortList(".js-web");
// refs.btnApplication.onclick = sortList(".js-application");
// refs.btnDesign.onclick = sortList(".js-design");
// refs.btnMarketing.onclick = sortList(".js-marketing");
