let calculation = 0;
function fibnocci(n){
    if(n < 2){
        return n
    }
    else{
         return fibnocci(n-1) + fibnocci(n-2);
        }
}
// Optimize it by memoizing the values or caching them using DP

function fibnocciMemoized(){
    let cache = {};
    return function fib(n){
        calculation++;
        if(n in cache){
            return cache[n];
        }
        else{
            if(n < 2){
                return n
            }
            else{
                cache[n] =  fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}

const fasterFib = fibnocciMemoized();


console.log(fasterFib(10));
console.log( "Calculation : " + calculation);
