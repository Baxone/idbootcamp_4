function sumar(a, b, callback) {
    setTimeout(() => {
        callback(a + b);
    }, 3000);
}




sumar(8, 9, (resultado) => {
    console.log(resultado);
});

sumar(3, 4, (resultado) => {
    sumar(5, resultado, (resultado2) => {
        console.log(resultado2);
    });
});
