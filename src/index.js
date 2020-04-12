const messages = [
    "Oscar",
    "Noel",
    "Sel",
    "Ana",
    "Diego",
    "Yessica",
    "Melany",
    "Nancy"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}

module.exports = { randomMsg };