var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
// El comentario se inserta con doble diagonal
typewriter.typeString('Desarrolladora Fronted Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('La calidad nunca es un accidente;')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong> es el resultado de un esfuerzo inteligente.</strong>')
    .pauseFor(2500)
    .start();