const recuperarLS = ()=> JSON.parse(localStorage.getItem('productosCarrito')) || []


/* const URL = 'js/productos.json' */
const cervezas = [
    {Codigo:1, Nombre:'Cream Ale', IBU: 18, Alcohol:'5,5%', Caracteristicas: 'Rubia Suave', Precio:480, Stock:12, Imagen:'img/cervezas/creamAle.jpg'},
    {Codigo:2, Nombre:'Red Ale', IBU: 25, Alcohol:'5,5%', Caracteristicas: 'Roja Maltosa', Precio:580, Stock:24, Imagen:'img/cervezas/redAle.jpg'},
    {Codigo:3, Nombre:'Porter', IBU: 20, Alcohol:'5,5%', Caracteristicas: 'Negra Tostada', Precio:580, Stock:12, Imagen:'img/cervezas/porter.jpg'},
    {Codigo:4, Nombre:'Stout', IBU: 25, Alcohol:'5,5%', Caracteristicas: 'Negra Maltosa', Precio:580, Stock:12, Imagen:'img/cervezas/guinness.jpg'},
    {Codigo:5, Nombre:'IPA', IBU: 45, Alcohol:'5,5%', Caracteristicas: 'Rubia Lupulada', Precio:650, Stock:24, Imagen:'img/cervezas/ipa.jpg'},
    {Codigo:6, Nombre:'Scotish Ale', IBU: 30, Alcohol:'5,5%', Caracteristicas: 'Roja', Precio:580, Stock:24, Imagen:'img/cervezas/latacarlsberg.jpg'},
    {Codigo:7, Nombre:'Heineken', IBU: 12, Alcohol:'5,5%', Caracteristicas: 'Rubia Lager', Precio:400, Stock:24, Imagen:'img/cervezas/heineken.jpg'},
    {Codigo:8, Nombre:'Six Pack', IBU: 30, Alcohol:'5,5%', Caracteristicas: 'Estilos Varios', Precio:2300, Stock:12, Imagen:'img/cervezas/sixpack.jpg'}
]
const carrito = recuperarLS()


