const { soma, subtrai, multiplica, divide, ehPar, raiz, media } = require('./calculadora')

//O grupo é o describe.
describe('soma', () => {
    test('soma dois numeros positivos', () => {
        expect(soma(2,3)).toBe(5)
    })

    //Soma com números negativos
})

describe('raiz', () => {
    test('calcula a raiz do número nao exato com precisao', () => {
        expect(raiz(2)).toBeCloseTo(1.414)
    })

    test('lanca erro para numero negativo', () => {
        expect(() => raiz(-4)).toThrow('Nao e possivel calcular raiz de numero negativo')
    })
})
