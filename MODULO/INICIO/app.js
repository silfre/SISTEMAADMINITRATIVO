function abrirModulo(nombreModulo) {

    if (nombreModulo === "combustible") {
        window.location.href = "../COMBUSTIBLE/modulo-combustible.html";
        return;
    }

    if (nombreModulo === "rendimientoAceite") {
        window.location.href = "../RENDIMIENTO DE ACEITE/RENDIMIENTO_ACEITE.html";
        return;
    }

    if (nombreModulo === "mantenimiento") {
        alert("El módulo de Mantenimiento todavía no está creado.");
        return;
    }

    if (nombreModulo === "conversaciones") {
        alert("El módulo de Conversaciones todavía no está creado.");
        return;
    }
    if (nombreModulo === "datoFicha") {
    window.location.href = "../DATO FICHA/dato-ficha.html";
    return;
    }

     if (nombreModulo === "dato") {
    window.location.href = "../DATO/modulo_unidades.html";
    return;
    }

    alert("Módulo no encontrado.");
}