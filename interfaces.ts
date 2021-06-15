// funções com muitos parametros devem ser sempre evitados
// é melhor encapsula-las em um objeto e passar o objeto
let drawPoint = (point) => { }

drawPoint({
    x: 1,
    y: 2
})

// inline annotations
let newPoint = (point: { x: number, y: number}) => { }

// interfaces
interface Point {
    x: number,
    y: number
}

let drawWithInterface = (point: Point) => { }
