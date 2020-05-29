function registrar() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var pass2 = document.getElementById('pass2').value;
    if (pass == pass2) {
        firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error, llenar todos los campos.\nLa contraseña debe tener al menos 6 caracteres.\nVerificar el correo, puede ser que ya este registrado");

            // ...
        });
    } else {
        window.alert("Error, las contraseñas deben coincidir");

    }

    
    
}

function reset() {

    var email2 = document.getElementById('email2').value;
   

    var auth = firebase.auth();
    var emailAddress = email2 ;

    auth.sendPasswordResetEmail(emailAddress).then(function () {
        window.alert("Correo de recuperacion de contraseña fue enviado con exito.\nPuede ser que llegue a su carpeta de SPAM");
    }).catch(function (error) {
        window.alert("Error, Verifique el correo");
    });

}