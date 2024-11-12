function fibnocci(n){
    if(n < 2){
        return n
    }
    else{
         return fibnocci(n-1) + fibnocci(n-2);
        }
}
// Optimize it by memoizing the values or caching them using DP

