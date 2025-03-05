const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lenghtCounter = rangeContainer.querySelector('h1');
const generateBtn = document.querySelector('.generator form button');
const passwordHeading = document.querySelector('.password-container h1');


const handleChange = () => {
    lenghtCounter.textContent = inputRange.value;
}

const generatePassword = (passwordLenght) => {
    let result = '';
    let characters = '';

    //obtener las opciones que estén seleccionadas
    const useUppercase = document.querySelector('#uppercase').checked;
    const useLowercase = document.querySelector('#lowercase').checked;
    const useNumbers = document.querySelector('#numbers').checked;
    const useSymbols = document.querySelector('#symbols').checked;

    //creamos un conjunto de caracteres a usar en la contraseña
    if(useUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(useLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if(useNumbers) characters += "1234567890";
    if(useSymbols) characters += "!#$%&/@";

    //Si no selecciona ninguna opción
    if(characters === ""){
        passwordHeading.textContent = "Selecciona al menos una opción :)";
        return "";
    }

    //Generador de contraseña aleatoria
    for(let i=0; i < passwordLenght; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        //multiplicamos por el largo de la cadena de caracteres para obtener un número aleatorio ya que en Math.random() nos da un valor entre 0 y 1
    }
    return result;
};

//función que imprima la contraseña
const printPassword =(event) => {
    event.preventDefault(); //previene que el formulario se envíe por defecto
    const password = generatePassword(inputRange.value); //genera la contrasñea
    if(password){
        passwordHeading.textContent = password; //muestra la contraseña generada
    }
};


//configuración de los eventos
inputRange.addEventListener("input", handleChange);
generateBtn.addEventListener("click", printPassword);