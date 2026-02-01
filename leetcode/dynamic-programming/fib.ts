function fib(n : number) : number{
    if(n <= 2){
        return 1;
    }

    return fib(n -1) + fib(n-2);
}

const memo = new Map<number,number>();

function fibDynamicProgamming(n : number) : number{
    let result = 1;
    
    if(memo.has(n)){
        return memo.get(n) ?? 0;
    }
    
    if(n <= 2)
        result = 1;
    else
        result = fibDynamicProgamming(n - 2) + fibDynamicProgamming(n-1)

    memo.set(n,result);
    return result

}

function fibBottomUp{
    
}

console.log(fibDynamicProgamming(50));