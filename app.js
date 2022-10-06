const cuentas = [
  { nombre: "Mali", saldo:200, password: '12345' },
  { nombre: "Gera", saldo:290, password: '12345' },
  { nombre: "Maui", saldo:67, password: '12345' }
];

function findUserByName(name, password) {
  return cuentas.find(account => account.nombre === name)
}

/**
 * Validate User and his password
 * 
 * @param {string} name - The user's name
 * @param {string} password - The user's password
 * @returns {boolean} A boolean value if user and password is valid
 */
function isUserIsValid(name, password) {
  const account = findUserByName(name);
  // early returns instead of if/else
  if(!account) {
    return false;
  }

  if(account.password !== password) {
    return false;
  }

  return true;
}

function login(form){
  const name = form.usuario.value;
  const password = form.contraseña.value;

  if(isUserIsValid(name, password)) {
    const user = findUserByName(name, password)
    localStorage.setItem('userLoggedIn', JSON.stringify(user))
    window.location.replace('http://localhost:5500/Bienvenidos.html')
    return;
  }

  alert("usuario o contraseña incorrecto")
  form.usuario.value = "";
  form.contraseña.value = "";

}

function checkIfUserIsLoggedIn() {
  const userFromLS = localStorage.getItem('userLoggedIn');

  if(userFromLS) {
    window.location.replace('./Bienvenidos.html')
  }

}

checkIfUserIsLoggedIn()



