const isIntersecting = (entry) => {
    return entry.isIntersecting //true dentro de la pantalla, falso si es contrario
}

const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //cargar la imagen
    imagen.src = url;



    //des registra la imagen 
    observer.unobserve(container);
};


const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});

//
export const registerImage = (imagen) => {
    //IntersectationOberserador -> observer (imagen)
    observer.observe(imagen)
};