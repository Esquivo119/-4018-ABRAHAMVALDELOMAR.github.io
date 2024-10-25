let books = [];

// Cargar los libros desde localStorage al iniciar
function loadBooks() {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        books = JSON.parse(storedBooks);
        displayBooks();
    }
}

// Función para mostrar los libros
function displayBooks() {
    const bookList = document.getElementById('bookList');
    if (bookList) { // Asegúrate de que el elemento exista
        bookList.innerHTML = '';
        books.forEach((book) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Descripción:</strong> ${book.description}</p>
                <p>${book.pdf ? `<a href="${book.pdf}" target="_blank">Descargar PDF</a>` : ''}</p>
            `;
            bookList.appendChild(li);
        });
    }
}

// Función para agregar un libro
function setupForm() {
    const form = document.getElementById('bookForm');
    if (form) { // Asegúrate de que el formulario exista
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const description = document.getElementById('description').value;
            const pdfInput = document.getElementById('pdf');

            const pdf = pdfInput.files[0] ? URL.createObjectURL(pdfInput.files[0]) : null;

            books.push({ title, author, description, pdf });
            localStorage.setItem('books', JSON.stringify(books)); // Guardar en localStorage
            window.location.href = 'listaLibros.html'; // Redirigir a la lista de libros
        });
    }
}

// Espera a que el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    loadBooks(); // Cargar libros en la página
    setupForm(); // Configurar el formulario
});
