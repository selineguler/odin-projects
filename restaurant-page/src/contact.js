export default function loadContact() {
  const content = document.querySelector("#content");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const info = document.createElement("p");
  info.innerHTML = `
    You can reach us at:<br><br>
    <strong>Email:</strong> selin-restaurant@example.com<br>
    <strong>Phone:</strong> +370 123 45678<br>
    <strong>Address:</strong> Kaunas, Lithuania
  `;

  content.appendChild(title);
  content.appendChild(info);
}

