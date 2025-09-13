🔹 Common Request Types in Express
1. JSON Request

Sabse common (REST APIs me use hota hai).
Header:

Content-Type: application/json


Example request body:

{
  "name": "Ali",
  "email": "ali@mail.com"
}


Express me handle karne ke liye:

app.use(express.json());

2. Form Data (URL Encoded)

Mostly HTML forms ke through aata hai.
Header:

Content-Type: application/x-www-form-urlencoded


Example body:

name=Ali&email=ali@mail.com


Express me handle karne ke liye:

app.use(express.urlencoded({ extended: true }));

3. Multipart Form Data

File uploads ke liye use hota hai (image, PDF, etc).
Header:

Content-Type: multipart/form-data


Isko handle karne ke liye tumhe middleware chahiye, jaise multer:

npm install multer


Example:

import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file); // file info
  console.log(req.body); // other form fields
  res.send('File uploaded!');
});

4. Raw Data

Kabhi-kabhi koi service raw text ya XML bhej deti hai.
Header:

Content-Type: text/plain


ya

Content-Type: application/xml


Express me handle karne ke liye:

app.use(express.text());      // for plain text
app.use(express.raw());       // for binary/raw body

5. Query Params (GET requests)

GET requests body nahi bhejte, unka data URL ke query string me hota hai:

GET /users?name=Ali&age=25


Access in Express:

req.query.name  // "Ali"
req.query.age   // "25"

6. Route Params

Kabhi URL me directly values di jaati hain:

GET /users/123


Route definition:

app.get('/users/:id', (req, res) => {
  console.log(req.params.id); // 123
});