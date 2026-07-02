const { multiply, isEven, getGreeting, divide } = require('../tasks/math');

describe('multiply', () => {

    test('debe multiplicar dos números positivos', () => {
        expect(multiply(3, 4)).toBe(12);
    });

    test('debe multiplicar por cero', () => {
        expect(multiply(5, 0)).toBe(0);
    });

    test('debe multiplicar números negativos', () => {
        expect(multiply(-2, 3)).toBe(-6);
    });

    test('debe lanzar error si los argumentos no son números', () => {
        expect(() => multiply('a', 3)).toThrow('Los argumentos deben ser números');
    });

});

describe('isEven', () => {

    test('debe retornar true para número par', () => {
        expect(isEven(4)).toBe(true);
    });

    test('debe retornar false para número impar', () => {
        expect(isEven(7)).toBe(false);
    });

    test('debe retornar true para el cero', () => {
        expect(isEven(0)).toBe(true);
    });

    test('debe lanzar error si el argumento no es número', () => {
        expect(() => isEven('texto')).toThrow('El argumento debe ser un número');
    });

});

describe('getGreeting', () => {

    test('debe retornar saludo con el nombre', () => {
        expect(getGreeting('Mundo')).toBe('Hola, Mundo!');
    });

    test('debe lanzar error si no se pasa nombre', () => {
        expect(() => getGreeting('')).toThrow('Se requiere un nombre válido');
    });

    test('debe lanzar error si el nombre no es string', () => {
        expect(() => getGreeting(123)).toThrow('Se requiere un nombre válido');
    });

});

describe('divide', () => {

    test('debe dividir dos números', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('debe lanzar error al dividir entre cero', () => {
        expect(() => divide(10, 0)).toThrow('No se puede dividir entre cero');
    });

});
