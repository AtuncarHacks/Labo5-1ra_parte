const $usuario = $("#usuario");
const $password = $("#password");

/* CREDENCIALES VERDADERAS */
const credenciales = {
    usuario: "desarrolloweb",
    pass: "666666"
};

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    if (valueUsuario == credenciales.usuario) {
        if (valuePassword == credenciales.pass) {
            location.href = "dashboard.html";
        } else {
            Swal.fire({
                title: "ERROR",
                text: "Contraseña incorrecta...vuelve a intentarlo papi",
                icon: "error"
            });
        }
    } else {
        Swal.fire({
            title: "ERROR",
            text: "No se encuentra el usuario ",
            icon: "error"
        });
    }
});

