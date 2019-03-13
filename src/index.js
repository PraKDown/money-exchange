// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let result = {};
    let H, Q, D, N, P;
    if (currency > 10000) result.error = "You are rich, my friend! We don't have so much coins for exchange";
    console.log(result);
    if (currency>0 && currency <=10000) {
        H = Math.floor(currency / 50);
        if (H > 0) result["H"] = H;
        Q = Math.floor((currency - H * 50) / 25);
        if (Q > 0) result["Q"] = Q;
        D = Math.floor((currency - H * 50 - Q * 25) / 10);
        if (D > 0) result["D"] = D;
        N = Math.floor((currency - H * 50 - Q * 25 - D * 10) / 5);
        if (N > 0) result["N"] = N;
        P = currency - H * 50 - Q * 25 - D * 10 - N * 5; 
        if (P > 0) result["P"] = P;
    }
    return result;
}
