const {parentPort} = require('worker_threads');

function heavyComputation(){
    let result = 0;

    // 10 ** 9

    for(let i = 0; i < 10000000000; i++){
        result += i;
    }

    return result;
}

const calculationOutput = heavyComputation();
parentPort.postMessage(calculationOutput)