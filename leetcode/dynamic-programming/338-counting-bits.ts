const cache = new Map<number,number>()


//O(n*log n)
function countBits(n: number): number[] {
    const result : number[] = [];

    for(let i = 0 ; i <= n ; i ++){
        if(!cache.has(i))
          cache.set(i, toBinarySum(i));

        result.push(cache.get(i)!);
    }

    return result
};


//O(N) using bitwise
function countBitsOptimized(n: number): number[] {
    const result : number[] = new Array(n + 1).fill(0);

    for(let i = 0 ; i <= n ; i ++){
        result[i] = result[i >> 1] + (i & 1);  
    }

    return result
};



function toBinarySum(n : number){
    let sum = 0;


    while(n >= 1){
        sum += n %2;
        n = Math.floor(n / 2);
    }

    return sum;
}



console.log(countBitsOptimized(25));


//5

// 5 / 2 -> 2 Resto 1
// 2/2 -> 1 Resto 0
// 1/2 -> 1


// 3/2 = 1  3 % 2 = 1
// 1/2 
