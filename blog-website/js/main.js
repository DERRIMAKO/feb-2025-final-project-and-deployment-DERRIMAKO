/* Reset some default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Set up basic typography and font */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

/* Header styling */
header {
    background: #333;
    color: #fff;
    padding: 10px 0;
}

header nav ul {
    list-style: none;
    text-align: center;
}

header nav ul li {
    display: inline;
    margin: 0 20px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

/* Main content styling */
main {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    background: #fff;
}

h1 {
    text-align: center;
    color: #333;
}

h2 {
    color: #666;
    margin-top: 20px;
}

section {
    margin: 20px 0;
}

p {
    font-size: 1.1rem;
    color: #555;
}

/* Form styling (on Contact page) */
form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    max-width: 600px;
    margin: 0 auto;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
}

input, textarea {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

textarea {
    resize: vertical;
}

button {
    background-color: #333;
    color: #fff;
    padding: 10px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}

/* Footer styling */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}

/* Media Query for responsiveness */
@media (max-width: 768px) {
    header nav ul li {
        display: block;
        margin: 10px 0;
    }

    form {
        grid-template-columns: 1fr;
    }

    button {
        width: 100%;
    }
}
