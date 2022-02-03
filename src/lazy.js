const isIntersecting = (entry) => {
    return entry.isIntersecting //true dentro de la pantalla, falso si es contrario
}

const accion = (entry) => {
    const nodo = entry.target
    console.log("hola");

    //des registra la imagen 
    observer.unobserve(nodo)
};


const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(accion)
});

//
export const registerImage = (imagen) => {
    //IntersectationOberserador -> observer (imagen)
    observer.observe(imagen)
};