const { syncTest } = require('../tasks/sync');

describe('Pruebas de Sync Test', () => {

    test('debe de ejecutar el proceso 2 veces', () => {
        syncTest();
        const times = syncTest();
        console.log('Se llamo ', times);

        expect(times).toBe(2);
    });

});
