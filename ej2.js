/*
Tener una función para agregar libros a una lista.

Mostrar todos los libros disponibles.

Buscar un libro por su título.

Calcular el precio total de todos los libros.

Permitir que el cliente aplique un descuento en base a una condición.

Incluir un objeto Libro y una clase Biblioteca.
*/

class Libro {
    constructor(titulo, autor, precio) {
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }

    agregarLibros(libro) {
        this.libros.push(libro);
        const mensaje = `Se añadió el libro: ${libro.titulo} correctamente`;
        console.log(mensaje);
        alert(mensaje);
    }

    mostrarLibros() {
        if (this.libros.length == 0) {
            console.log("No hay libros para mostrar");
            alert("No hay libros para mostrar");
        } else {
            let mensaje = "Libros disponibles:\n";
            this.libros.forEach((libro, index) => {
                mensaje += `${index + 1}. Título: ${libro.titulo}, Autor: ${libro.autor
                    }, Precio: ${libro.precio}€\n`;
                console.log(
                    `${index + 1}. Título: ${libro.titulo}, Autor: ${libro.autor
                    }, Precio: ${libro.precio}€`
                );
            });
            alert(mensaje);
        }
    }

    buscarLibro(titulo) {
        let libroEncontrado = this.libros.find(
            (libro) => libro.titulo.toLowerCase() === titulo.toLowerCase()
        );
        if (libroEncontrado) {
            console.log(`Libro encontrado . Titulo : ${libroEncontrado.titulo}`);
            alert(`Libro encontrado . Titulo : ${libroEncontrado.titulo}`);
        } else {
            console.log("No se ha encontrado el libro con ese titulo");
            alert("No se ha encontrado el libro con ese titulo");
        }
    }
    calcularPrecioTotal() {
        let total = this.libros.reduce((acc, v) => acc + v.precio, 0);
        console.log("El precio total de todos los libros es: " + total + "€");
        alert("El precio total de todos los libros es: " + total + "€");
        return total;
    }
    descuentoCondicion(montoLimite, porcentajeDescuento) {
        const total = this.calcularPrecioTotal();
        if (total > montoLimite) {
            const descuento = (total * porcentajeDescuento) / 100;
            
            const totalConDescuento = total - descuento;
            console.log(
                `Se aplicó un descuento del ${porcentajeDescuento}%. El total después del descuento es: $${totalConDescuento}`
            );
        } else {
            console.log(
                `El total es menor que el monto límite de $${montoLimite}. No se aplica descuento.`
            );
        }
    }
}

function app() {
    let opcion;
    const biblioteca = new Biblioteca();

    function mostrarMenu() {
        return (
            "\n----- Menú de Biblioteca -----\n" +
            "1. Agregar libro\n" +
            "2. Mostrar libros\n" +
            "3. Buscar libro\n" +
            "4. Calcular precio total\n" +
            "5. Aplicar descuento\n" +
            "6. Salir"
        );
    }
    do {
        mostrarMenu();
        opcion = prompt(mostrarMenu());

        switch (opcion) {
            case "1":
                const titulo = prompt("Ingrese el título del libro:");
                const autor = prompt("Ingrese el autor del libro:");
                const precio = parseFloat(prompt("Ingrese el precio del libro:"));
                biblioteca.agregarLibros(new Libro(titulo, autor, precio));
                break;

            case "2":
                biblioteca.mostrarLibros();
                break;

            case "3":
                const tituloABuscar = prompt("Ingrese el título del libro a buscar:");
                biblioteca.buscarLibro(tituloABuscar);
                break;

            case "4":
                biblioteca.calcularPrecioTotal();
                break;

            case "5":
                const montoLimite = parseFloat(
                    prompt("Ingrese el monto límite para aplicar descuento:")
                );
                const porcentajeDescuento = parseFloat(
                    prompt("Ingrese el porcentaje de descuento:")
                );
                biblioteca.descuentoCondicion(montoLimite, porcentajeDescuento);
                break;

            case "6":
                console.log("Saliendo del menú...");
                break;

            default:
                console.log("Opción no válida. Intente de nuevo.");
                break;
        }
    } while (opcion !== "6");
}

app();
