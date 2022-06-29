function sumar(a, b) {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 3000);
    });
    return prom;
}

sumar(4, 9)
    .then(resultado => console.log(resultado));