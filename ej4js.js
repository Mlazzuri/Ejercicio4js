const listacompras= ["banana", "galletas", "carne", "arroz", "yogurt"]

console.log(listacompras)

listacompras.push("Aceite de Girasol")

console.log(listacompras)

listacompras.pop()


console.log(listacompras)

const peliculasFavoritas = [
    {titulo: "interestelar", director: "jaime", fecha: new Date (2015)},
    {titulo: "Eleseñor de los anillos", director: "Peter jackson", fecha: new Date (2005)},
    {titulo: "Predestination", director: "jhon qo",fecha: new Date (2008)},

]

const posteriores = peliculasFavoritas.filter(peliculasFavoritas => peliculasFavoritas.fecha > new Date (2010))

console.log(posteriores)

const directores = peliculasFavoritas.map(peliculasFavoritas => peliculasFavoritas.director)

console.log(directores)

const titulos = peliculasFavoritas.map(peliculasFavoritas => peliculasFavoritas.titulo)

console.log(titulos)

const director_titulo = directores.concat(titulos)
console.log(director_titulo)