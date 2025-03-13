const requestForms = document.querySelectorAll(".request-form");
const file = document.querySelector(".cost__file-input");
const names = document.querySelectorAll(".global-input-name");
const phones = document.querySelectorAll(".global-input-phone");

const maskName = (e) => {
  e.target.value = e.target.value.replace(/[^A-Za-zА-Яа-я]/g, "");
};

const maskPhone = (e) => {
  let value = e.target.value.replace(/\D/g, ""); // Убираем все символы, кроме цифр
  value = value.replace(/^7/, ""); // Убираем первую семерку, если она есть, чтобы не дублировалась
  if (value.length > 10) value = value.slice(0, 10); // Ограничиваем длину до 10 цифр
  // Форматируем номер телефона
  if (value.length > 6) {
    value = `+7 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
  } else if (value.length > 3) {
    value = `+7 (${value.slice(0, 3)}) ${value.slice(3)}`;
  } else if (value.length > 0) {
    value = `+7 (${value.slice(0, 3)}`;
  } else {
    value = "+7 ";
  }
  e.target.value = value; // Применяем формат
};

const setFileName = (e) => {
  e.target.nextElementSibling.textContent = e.target.files[0]?.name || "Добавить фото";
};

const getFormData = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const phone = e.target.querySelector(".global-input-phone");
  if (phone.value.length !== 17) {
    alert("Введите полный номер телефона");
  } else if (data.file && data.file.size === 0) {
    alert("Добавьте фото");
  } else {
    alert(`Ваше имя ${data.name}\nВаш номер ${data.phone}\n${data.file ? `Ваше фото - ${data.file.name}` : ""}\nСпасибо за заявку, ожидайте!`);
    e.target.reset();
    data.file ? (file.nextElementSibling.textContent = "Добавить фото") : "";
  }
};

export const initForms = () => {
  names.forEach((name) => name.addEventListener("input", maskName));
  phones.forEach((phone) => phone.addEventListener("input", maskPhone));
  file.addEventListener("change", setFileName);
  requestForms.forEach((requestForm) => requestForm.addEventListener("submit", getFormData));
};
