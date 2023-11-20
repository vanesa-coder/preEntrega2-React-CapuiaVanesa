const products = [
    {
        id: "1",
        category: "anillos",
        img: "/img/anillo-bvlgari.jpg",
        name: "Anillo Bvlgari",
        description: "Anillo Bvlgari de acero quirurgico",
        precio: 3700,
        stock: 10,
    },
    {
        id: "2",
        category: "anillos",
        img: "/img/anillo-corazon.jpg",
        name: "Anillo Corazón",
        description: "Anillo Corazón de acero quirurgico",
        precio: 3500,
        stock: 15,
    },
    {
        id: "3",
        category: "anillos",
        img: "../public/img/anillo-cruz-equilibrio.jpg",
        name: "Anillo cruz del equilibrio",
        description: "Anillo de acero quirurgico",
        precio: 3500,
        stock: 8,
    },
    {
        id: "4",
        category: "anillos",
        img: "../public/img/anillo-nudo-de-bruja.jpg",
        name: "Anillo Nudo de bruja",
        description: "Anillo de acero quirurgico",
        precio: 3200,
        stock: 7,
    },
    {
        id: "5",
        category: "anillos",
        img: "../public/img/anillo-serpent.jpg",
        name: "Anillo Serpent",
        description: "Anillo de acero quirurgico",
        precio: 3200,
        stock: 9,
    },
    {
        id: "6",
        category: "aros",
        img: "../public/img/aros-argolla-irregular.jpg",
        name: "Aros Argolla Irregular",
        description: "Aros de acero quirurgico",
        precio: 2500,
        stock: 11,
    },
    {
        id: "7",
        category: "aros",
        img: "../public/img/Aros-corazon.jpg",
        name: "Aros Corazón",
        description: "Aros de acero quirurgico",
        precio: 2600,
        stock: 10
    },
    {
        id: "8",
        category: "aros",
        img: "../public/img/aros-estrella.jpg",
        name: "Aros Estrellas",
        description: "Aros de acero quirurgico",
        precio: 2800,
        stock: 14,
    },
    {
        id: "9",
        category: "aros",
        img: "../public/img/aros-geometrico.jpg",
        name: "Aros Geometricos",
        description: "Aros de acero quirurgico",
        precio: 3100,
        stock: 7,
    },
    {
        id: "10",
        category: "aros",
        img: "../public/img/aros-perla (2).jpg",
        name: "Aros Perlas",
        description: "Aros de acero quirurgico",
        precio: 2300,
        stock: 17,
    },
    {
        id: "11",
        category: "cadenas",
        img: "../public/img/cadena-alas.jpg",
        name: "Cadena Alas",
        description: "Cadena con dije de acero quirurgico",
        precio: 4600,
        stock: 5,
    },
    {
        id: "12",
        category: "cadenas",
        img: "../public/img/cadena-corazon2.jpg",
        name: "Cadena Corazón",
        description: "Cadena con dije de acero quirurgico",
        precio: 4900,
        stock: 12,
    },
    {
        id: "13",
        category: "cadenas",
        img: "../public/img/cadena-colibri.jpg",
        name: "Cadena Colibrí",
        description: "Cadena con dije de acero quirurgico",
        precio: 5500,
        stock: 3,
    },
    {
        id: "14",
        category: "cadenas",
        img: "../public/img/cadena-luna.jpg",
        name: "Cadena Luna",
        description: "Cadena con dije de acero quirurgico",
        precio: 5600,
        stock: 4,
    },
    {
        id: "15",
        category: "cadenas",
        img: "../public/img/cadena-manito-de-fatima.jpg",
        name: "Cadena Manito de Fátima",
        description: "Cadena con dije de acero quirurgico",
        precio: 5900,
        stock: 14,
    },
    {
        id: "16",
        category: "pulseras",
        img: "../public/img/pulsera-manito-de-fatima.jpg",
        name: "Pulsera Manito de Fátima",
        description: "Pulsera con dije de acero quirurgico",
        precio: 4900,
        stock: 16,
    },
    {
        id: "17",
        category: "pulseras",
        img: "../public/img/pulsera-arbol-de-la-vida.jpg",
        name: "Pulsera Árbol de la vida",
        description: "Pulsera con dije de acero quirurgico",
        precio: 4900,
        stock: 9,
    },
    {
        id: "18",
        category: "pulseras",
        img: "../public/img/pulsera-dijes.jpg",
        name: "Pulsera Dijes",
        description: "Pulsera con dijes de acero quirurgico",
        precio: 4500,
        stock: 6,
    },
    {
        id: "19",
        category: "pulseras",
        img: "../public/img/pulsera-figaro.png",
        name: "Pulsera Fígaro",
        description: "Pulsera de acero quirurgico",
        precio: 3800,
        stock: 11,
    },
    {
        id: "20",
        category: "pulseras",
        img: "../public/img/pulsera-infinito.jpg",
        name: "Pulsera Infinito",
        description: "Pulsera con dije de acero quirurgico",
        precio: 5100,
        stock: 5,
    },
]


export const getProducts = () => { 
    return new Promise((resolve, reject) =>{
        if(products.length > 0) {
            setTimeout ( () => { 
                 resolve( products )   
             }, 1000)
        } else {
            reject("No hay productos")
        }
    })
 };

 export const getProductsById = (id) =>{
    return new Promise((resolve, reject)=>{
        if(products.length > 0){
            const product = products.find(p => p.id === id)

        setTimeout(()=>{
            if(!product){
                reject ( `No hay productos con el id: ${id}` )
            }resolve (product)
        }, 1000);
        } else {
            reject ( "No hay productos" );
        }
    })
 };