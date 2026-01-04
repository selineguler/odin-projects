export default function loadMenu() {
  const content = document.querySelector("#content");

  const title = document.createElement("h1");
  title.textContent = "Menu";

  const list = document.createElement("ul");

  const items = [
    "Quantum Soup – 12 €",
    "Schrödinger’s Steak (alive/dead) – 18 €",
    "Spin-Orbit Salad – 10 €",
    "Many-Body Pasta – 15 €",
  ];

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.style.margin = "10px 0";
    list.appendChild(li);
  });

  content.appendChild(title);
  content.appendChild(list);
}

