document.addEventListener("DOMContentLoaded", () => {
  const myLibrary = [];

  // ===== Book Constructor =====
  function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  // Toggle read status prototype
  Book.prototype.toggleRead = function () {
    this.read = !this.read;
  };

  // Add new book to array
  function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
  }

  // ===== Display Books =====
  function displayBooks() {
    displayBooksTable();
    // Removed displayBooksCards(); // <- This caused the crash because it's undefined
  }

  // ===== TABLE VIEW =====
  function displayBooksTable() {
    const tbody = document.querySelector("#libraryTable tbody");
    if (!tbody) return; // guard if table not present
    tbody.innerHTML = "";

    myLibrary.forEach((book) => {
      const row = document.createElement("tr");
      row.dataset.id = book.id;

      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read ? "Read" : "Not Read"}</td>
        <td>
          <button class="toggle-btn">Toggle</button>
          <button class="remove-btn">Remove</button>
        </td>
      `;

      row.querySelector(".toggle-btn").addEventListener("click", () => {
        book.toggleRead();
        displayBooks();
      });

      row.querySelector(".remove-btn").addEventListener("click", () => {
        const index = myLibrary.findIndex((b) => b.id === book.id);
        if (index !== -1) {
          myLibrary.splice(index, 1);
          displayBooks();
        }
      });

      tbody.appendChild(row);
    });
  }

  // ===== Dialog + Form wiring =====
  const newBookBtn = document.getElementById("newBookBtn");
  const bookDialog = document.getElementById("bookDialog");
  const closeDialogBtn = document.getElementById("closeDialog");
  const bookForm = document.getElementById("bookForm");

  if (newBookBtn && bookDialog) {
    newBookBtn.addEventListener("click", () => bookDialog.showModal());
  }

  if (closeDialogBtn && bookDialog) {
    closeDialogBtn.addEventListener("click", () => bookDialog.close());
  }

  if (bookForm) {
    bookForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const title = document.getElementById("title").value.trim();
      const author = document.getElementById("author").value.trim();
      const pages = Number(document.getElementById("pages").value);
      const read = document.getElementById("read").checked;

      // (Optional) basic validation
      if (!title || !author || !pages) return;

      addBookToLibrary(title, author, pages, read);
      bookForm.reset();
      if (bookDialog) bookDialog.close();
    });
  }

  // Example starter books
  addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
  addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, false);
});
