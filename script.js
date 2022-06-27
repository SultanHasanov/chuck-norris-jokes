const url = "https://api.chucknorris.io/jokes/random ";
const url2 = 'https://api.funtranslations.com/translate/'
const button = document.querySelector('.btn');
const par = document.querySelector('.par')


async function fenchHandler () {
try {
const response = await fetch(url);
// console.log('-----------', response);
const data = await response.json();
if(response.ok){
    console.log('-----------', data);
    par.innerText = data.value

} else {
    // если ответ отриц предуп.
}
} catch (error){
    console.log(error);
}
}

button.addEventListener('click', () => {
    fenchHandler()
})
