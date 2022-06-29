const q = (el) => document.querySelector(el);
const newEl = (el) => document.createElement(el);

const $wrapperSection = newEl("section");
$wrapperSection.className = "wrapperSection";

const createCard = (parent, imgLink, title, price) => {
  const wrapperEl = newEl("div");
  const titleEl = newEl("h3");
  const priceEl = newEl("p");
  const imgEl = newEl("img");

  wrapperEl.className = "wrapper";
  titleEl.className = "title";
  priceEl.className = "price";
  imgEl.className = "img";

  imgEl.setAttribute("alt", title);
  imgEl.setAttribute("src", imgLink);

  titleEl.textContent = title + ":";
  priceEl.textContent = "$" + price;

  wrapperEl.append(imgEl, titleEl, priceEl);
  $wrapperSection.appendChild(wrapperEl);
};

export { createCard, q, newEl, $wrapperSection };
