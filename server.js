const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware do parsowania danych formularza
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serwowanie plików statycznych z folderu 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Domyślny endpoint, który wyświetla plik index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint, który odbiera dane z formularza
app.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;

    // Tutaj możesz zapisać dane do bazy danych lub wysłać e-mail
    console.log('Dane kontaktowe otrzymane:');
    console.log('Imię i nazwisko:', name);
    console.log('E-mail:', email);
    console.log('Wiadomość:', message);

    // Odpowiedź po wysłaniu formularza
    res.send('<h1>Dziękujemy za kontakt! Twoja wiadomość została wysłana.</h1>');
});

// Uruchomienie serwera na porcie 3000
app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
