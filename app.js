const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); 
app.get('/', (req, res) => {
    res.send(`
        <form action="/submit-form" method="post">
            <input type="text" name="username" placeholder="Username" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="number" name="age" placeholder="Age" required />
            <input type="text" name="city" placeholder="City" required />
            <input type="submit" value="Submit the form" />
        </form>
    `);
});

app.post('/submit-form', (req, res) => {
    console.log('Form submission has been received:', req.body);
    res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The server is running on the http://localhost:${PORT}`);
});
