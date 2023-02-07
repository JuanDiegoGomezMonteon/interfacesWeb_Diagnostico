function autenticar(){

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if (user == "judigomezmo" && password == "12345"){
        window.location.href = "admin.html";
    }

    if (user == "diego_gomez" && password == "12345"){
        window.location.href = "user.html";
    }


    if (user != "judigomezmo" && user != "diego_gomez"){
        alert("Usuario incorrecto");
        return;
    }

    if (password != "12345"){
        alert("Contraseña incorrecta");
        return;
    }
}