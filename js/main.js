//CRUD первого блока с карточками

let btnCreate = document.querySelector("#btnCreate");

let modal_cards = document.querySelector(".main-modal");
let btnCardsModalClose = document.querySelector("#btnClose");
let inpImage = document.querySelector("#inpImage");
let inpName = document.querySelector("#inpName");
let inpProfession = document.querySelector("#inpProfession");
let btnCardsModalSave = document.querySelector("#btnSave");

let cards = document.querySelector(".cards");

let modal_cards2 = document.querySelector(".main-modal2");
let btnCardsModalClose2 = document.querySelector("#btnClose2");
let inpImage2 = document.querySelector("#inpImage2");
let inpName2 = document.querySelector("#inpName2");
let inpProfession2 = document.querySelector("#inpProfession2");
let btnCardsModalSave2 = document.querySelector("#btnSave2");

textAppearingCards();

btnCreate.addEventListener("click", function (event) {
  modal_cards.style.display = "block";
});

btnCardsModalClose.addEventListener("click", function (event) {
  modal_cards.style.display = "none";
});

btnCardsModalSave.addEventListener("click", function (event) {
  event.preventDefault(); //чтобы при нажатии не перезагружалась страница
  if (
    !inpImage.value.trim() &&
    !inpName.value.trim() &&
    !inpProfession.value.trim()
  ) {
    //если поле пустое то не сработает
    alert("заполните поля");
    return;
  }

  let obj = {
    image: inpImage.value,
    name: inpName.value,
    profession: inpProfession.value,
  };

  setItemToStorageCards(obj);
  textAppearingCards();
});

function setItemToStorageCards(task) {
  //кладет данные в localStorage
  let data = JSON.parse(localStorage.getItem("cards")) || [];
  data.push(task);
  localStorage.setItem("cards", JSON.stringify(data));
}

//delete

function deleteCards(id) {
  let data = JSON.parse(localStorage.getItem("cards"));
  data.splice(id, 1);
  localStorage.setItem("cards", JSON.stringify(data));
  textAppearingCards();
}

//read

function textAppearingCards() {
  //достает данные из localStorage  - это отображение read
  if (!localStorage.getItem("cards")) {
    localStorage.setItem("cards", "[]");
  }

  let newData = JSON.parse(localStorage.getItem("cards"));

  cards.innerHTML = "";
  newData.forEach((item, index) => {
    cards.innerHTML += `<a>
    <div class="card-image">
    <img
      src="${item.image}"
      alt="student-image"
    />
    </div>
    <div class="card-description">
    <h3>${item.name}</h3>
    <h3>${item.profession}<div>
    <button onClick="deleteCards(${index})" style="background-color:#ef5d5d; border-radius:20px; cursor: pointer;">✖</button>
    <button onClick="EditCards(${index})" style="background-color:#ffc56e; border-radius:20px; cursor: pointer;">✎</button>
</div></h3>
    </div>
    </a>`;
  });

  inpImage.value = ""; //очищает инпут после нажатия кнопки
  inpName.value = ""; //очищает инпут после нажатия кнопки
  inpProfession.value = ""; //очищает инпут после нажатия кнопки
}

//edit

btnCardsModalClose2.addEventListener("click", function (event) {
  modal_cards2.style.display = "none";
});

function EditCards(index) {
  modal_cards2.style.display = "block";

  let data = JSON.parse(localStorage.getItem("cards"));

  inpImage2.value = data[index].image;
  inpImage2.setAttribute("id", index); // присваиваем атрибут id
  inpName2.value = data[index].name;
  inpName2.setAttribute("id", index); // присваиваем атрибут id
  inpProfession2.value = data[index].profession;
  inpProfession2.setAttribute("id", index); // присваиваем атрибут id
}

btnCardsModalSave2.addEventListener("click", function (event) {
  event.preventDefault(); //чтобы при нажатии не перезагружалась страница

  modal_cards2.style.display = "none";

  let id1 = inpImage2.getAttribute("id");
  let id2 = inpName2.getAttribute("id");
  let id3 = inpProfession2.getAttribute("id");

  let data = JSON.parse(localStorage.getItem("cards"));

  let newObj = {
    image: inpImage2.value,
    name: inpName2.value,
    profession: inpProfession2.value,
  };

  data.splice(id1, 1, newObj);
  data.splice(id2, 1, newObj);
  data.splice(id3, 1, newObj);

  localStorage.setItem("cards", JSON.stringify(data));
  textAppearingCards();
});

//CRUD второго блока с текстом

let btnAddText = document.querySelector("#btnAddText");

let text_modal = document.querySelector(".text-modal");
let btnTextModalClose = document.querySelector("#textModalClose");
let inpHeading = document.querySelector("#inpHeading");
let inpText = document.querySelector("#inpText");
let btnTextModalSave = document.querySelector("#textModalSave");

let addArea = document.querySelector("#addArea");

let text_modal2 = document.querySelector(".text-modal2");
let btnTextModalClose2 = document.querySelector("#textModalClose2");
let inpHeading2 = document.querySelector("#inpHeading2");
let inpText2 = document.querySelector("#inpText2");
let btnTextModalSave2 = document.querySelector("#textModalSave2");

textAppearing();

//контейнер автоматически увеличивается при добавлении из-за верстки на процентах

btnAddText.addEventListener("click", function (event) {
  text_modal.style.display = "block";
});

btnTextModalClose.addEventListener("click", function (event) {
  text_modal.style.display = "none";
});

btnTextModalSave.addEventListener("click", function () {
  console.log(inpHeading.value);
  console.log(inpText.value);

  if (!inpHeading.value.trim() && !inpText.value.trim()) {
    //если поле пустое то не сработает
    alert("заполните поля");
    return;
  }

  let obj = {
    heading: inpHeading.value,
    text: inpText.value,
  };

  setItemToStorage(obj);
  textAppearing();
});

function setItemToStorage(task) {
  //кладет данные в localStorage
  let data = JSON.parse(localStorage.getItem("text")) || [];
  data.push(task);
  localStorage.setItem("text", JSON.stringify(data));
}

//delete

function deleteElement(id) {
  let data = JSON.parse(localStorage.getItem("text"));
  data.splice(id, 1);
  localStorage.setItem("text", JSON.stringify(data));
  textAppearing();
}

//read

function textAppearing() {
  //достает данные из localStorage  - это отображение read
  if (!localStorage.getItem("text")) {
    localStorage.setItem("text", "[]");
  }

  let newData = JSON.parse(localStorage.getItem("text"));

  addArea.innerHTML = "";
  newData.forEach((item, index) => {
    addArea.innerHTML += `<p style="margin-top:32px; margin-bottom:32px;">
        <span style="color: #ff784f;
        ";>${item.heading}</span>
        <br />
        <span>${item.text}</span>
        <button onClick="deleteElement(${index})" style="background-color:#ef5d5d; border-radius:20px; cursor: pointer;">✖</button>
        <button onClick="textEdit(${index})" style="background-color:#ffc56e; border-radius:20px; cursor: pointer;">✎</button>
    </p>`;
  });

  inpHeading.value = ""; //очищает инпут после нажатия кнопки
  inpText.value = ""; //очищает инпут после нажатия кнопки
}

//edit

btnTextModalClose2.addEventListener("click", function (event) {
  text_modal2.style.display = "none";
});

function textEdit(index) {
  text_modal2.style.display = "block";

  let data = JSON.parse(localStorage.getItem("text"));

  inpHeading2.value = data[index].heading;
  inpHeading2.setAttribute("id", index); // присваиваем атрибут id
  inpText2.value = data[index].text;
  inpText2.setAttribute("id", index); // присваиваем атрибут id
}

btnTextModalSave2.addEventListener("click", function () {
  text_modal2.style.display = "none";

  let id1 = inpHeading2.getAttribute("id");
  let id2 = inpText2.getAttribute("id");
  let data = JSON.parse(localStorage.getItem("text"));

  let newObj = {
    heading: inpHeading2.value,
    text: inpText2.value,
  };

  data.splice(id1, 1, newObj);
  data.splice(id2, 1, newObj);

  localStorage.setItem("text", JSON.stringify(data));
  textAppearing();
});

//CRUD третьего блока с текстом-карточкой

let btnStageCreate = document.querySelector("#btnCreateCard");

let modal_stage = document.querySelector(".main-modal3");
let btnStageModalClose = document.querySelector("#btnClose3");
let inpNumber = document.querySelector("#inpImage3");
let inpTitle = document.querySelector("#inpName3");
let inpDescription = document.querySelector("#inpProfession3");
let btnStageModalSave = document.querySelector("#btnSave3");

let addStageArea = document.querySelector(".programa_container");

let modal_stage2 = document.querySelector(".main-modal4");
let btnStageModalClose2 = document.querySelector("#btnClose4");
let inpNumber2 = document.querySelector("#inpImage4");
let inpTitle2 = document.querySelector("#inpName4");
let inpDescription2 = document.querySelector("#inpProfession4");
let btnStageModalSave2 = document.querySelector("#btnSave4");

textAppearingStage();

btnStageCreate.addEventListener("click", function (event) {
  modal_stage.style.display = "block";
});

btnStageModalClose.addEventListener("click", function (event) {
  modal_stage.style.display = "none";
});

btnStageModalSave.addEventListener("click", function (event) {
  event.preventDefault(); //чтобы при нажатии не перезагружалась страница
  if (
    !inpNumber.value.trim() &&
    !inpTitle.value.trim() &&
    !inpDescription.value.trim()
  ) {
    //если поле пустое то не сработает
    alert("заполните поля");
    return;
  }

  let obj = {
    number: inpNumber.value,
    title: inpTitle.value,
    description: inpDescription.value,
  };

  setItemToStorageStage(obj);
  textAppearingStage();
});

function setItemToStorageStage(task) {
  //кладет данные в localStorage
  let data = JSON.parse(localStorage.getItem("stage")) || [];
  data.push(task);
  localStorage.setItem("stage", JSON.stringify(data));
}

//delete

function deleteStage(id) {
  let data = JSON.parse(localStorage.getItem("stage"));
  data.splice(id, 1);
  localStorage.setItem("stage", JSON.stringify(data));
  textAppearingStage();
}

//read

function textAppearingStage() {
  //достает данные из localStorage  - это отображение read
  if (!localStorage.getItem("stage")) {
    localStorage.setItem("stage", "[]");
  }

  let newData = JSON.parse(localStorage.getItem("stage"));

  addStageArea.innerHTML = "";
  newData.forEach((item, index) => {
    addStageArea.innerHTML += `<div class="programa_container_language">
    <p>${item.number}</p>
    <h4>${item.title}</h4>
    <p>${item.description}</p>
    <div>
        <button onClick="deleteStage(${index})" style="background-color:#ef5d5d; border-radius:20px; cursor: pointer;">✖</button>
        <button onClick="EditStage(${index})" style="background-color:#ffc56e; border-radius:20px; cursor: pointer;">✎</button>
    </div>
  </div>`;
  });

  inpNumber.value = ""; //очищает инпут после нажатия кнопки
  inpTitle.value = ""; //очищает инпут после нажатия кнопки
  inpDescription.value = ""; //очищает инпут после нажатия кнопки
}

//edit

btnStageModalClose2.addEventListener("click", function (event) {
  modal_stage2.style.display = "none";
});

function EditStage(index) {
  modal_stage2.style.display = "block";

  let data = JSON.parse(localStorage.getItem("stage"));

  inpNumber2.value = data[index].number;
  inpNumber2.setAttribute("id", index); // присваиваем атрибут id
  inpTitle2.value = data[index].title;
  inpTitle2.setAttribute("id", index); // присваиваем атрибут id
  inpDescription2.value = data[index].description;
  inpDescription2.setAttribute("id", index); // присваиваем атрибут id
}

btnStageModalSave2.addEventListener("click", function (event) {
  event.preventDefault(); //чтобы при нажатии не перезагружалась страница

  modal_stage2.style.display = "none";

  let id1 = inpNumber2.getAttribute("id");
  let id2 = inpTitle2.getAttribute("id");
  let id3 = inpDescription2.getAttribute("id");

  let data = JSON.parse(localStorage.getItem("stage"));

  let newObj = {
    number: inpNumber2.value,
    title: inpTitle2.value,
    description: inpDescription2.value,
  };

  data.splice(id1, 1, newObj);
  data.splice(id2, 1, newObj);
  data.splice(id3, 1, newObj);

  localStorage.setItem("stage", JSON.stringify(data));
  textAppearingStage();
});


//модальное окно для кнопки узнай все о профессии тут

let btnOpenAll = document.querySelector('#btnOpen-all')
let btnCloseAll = document.querySelector('#btnClose-all')
let modal_all = document.querySelector('.main-modal-all')

btnOpenAll.addEventListener("click", function (event) {
  modal_all.style.display = "block";
});

btnCloseAll.addEventListener("click", function (event) {
  modal_all.style.display = "none";
});


//