let userLoggedIn;

function loadUserLoggedIn() {

  const userFromLS = localStorage.getItem('userLoggedIn');

  if(!userFromLS) {
    window.location.replace("./")
    return;
  }

  userLoggedIn = JSON.parse(userFromLS)
  loadUserData()
}

function loadUserData(){
  const saldo = document.getElementById('saldo');
  saldo.value = userLoggedIn.saldo;
}

function closeSession(){
  localStorage.clear('userLoggedIn');
  window.location.replace("./")
}

function paymentEvent() {
  let saldo = userLoggedIn.saldo;
  let payment = parseInt(document.getElementById('abono').value)
  // Regla del Negocio
  if(saldo + payment > 990) {
    alert ("Pasó el limite de su cuenta, no puede abonar esa cantidad")
    return;
  }
    // Actualizamos el objeto usuario
    userLoggedIn.saldo = saldo + payment;
    // Actualizamos el usuario en el localstorage
    updateUserInLocalStorage(userLoggedIn);
    // Actualizamos la UI
    document.getElementById('saldo').value = (saldo+payment)
}

function removeEvent() {
  let saldo = userLoggedIn.saldo
  let remove = parseInt(document.getElementById('abono').value)
  // Regla del Negocio
  if ( saldo - remove < 10) {
    alert ("Su saldo dispoble no es suficiente, no puede tener menos de $10 en su cuenta")
    return;
  } 
   // Actualizamos el objeto usuario
   userLoggedIn.saldo = saldo - remove;
   // Actualizamos el usuario en el localstorage
   updateUserInLocalStorage(userLoggedIn);
   // Actualizamos la UI
   document.getElementById('saldo').value = (saldo-remove)
}

function updateUserInLocalStorage(user) {
  localStorage.setItem('userLoggedIn', JSON.stringify(user))
}

function checkBalance(){
  let saldo = userLoggedIn.saldo;
  document.getElementById('saldo1').value = saldo
  document.getElementById('saldo').value = " " 
 }

loadUserLoggedIn(); // Carga el usuario en sesion desde el localstorage





