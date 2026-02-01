async function asyncMapWithLimit(limit = 2, asyncFn, list = []) {
    let currentIndex = 0;

    async function next() {
        if (currentIndex >= list.length) return;

        const index = currentIndex;
        currentIndex++;

        console.log("Executando :", currentIndex)
        await asyncFn(list[index]);
        return next();
    }

    const workers = Array.from({ length: limit }, () => next());
    await Promise.all(workers);
}


async function asyncMock(index = 0){
    await delay(1000)
    return 'Finished'
}

async function delay(delayMs = 1000){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            return resolve('end')
        }, delayMs)
    })
}

const items = [1,3,4,5,6,7,8];

asyncMapWithLimit(3,asyncMock,items);