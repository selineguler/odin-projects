export default function loadHome() {
  const content = document.querySelector("#content");

  const title = document.createElement("h1");
  title.textContent = "Welcome to Selin’s Restaurant";

  const desc = document.createElement("p");
  desc.textContent =
    "Enjoy fresh meals made with love. This is the best restaurant in the multiverse.";

  const img = document.createElement("img");
  img.src = "https://picsum.photos/600/300";
  img.style.width = "100%";
  img.style.borderRadius = "8px";

  content.appendChild(title);
  content.appendChild(desc);
  content.appendChild(img);
}

