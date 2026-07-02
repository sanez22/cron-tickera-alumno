let times = 0;

const syncTest = () => {
    times++;
    console.log('Tick cada multiplo de 5: ', times);
    return times;
};

module.exports = {
    syncTest
};
