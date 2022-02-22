function fibonacci (n) {
    var output = [0, 1];
    
    if (n < 2) {
        return [0];
    } else {
        for (var i = 2; i < n; i++) {
            output.push(output[i-2]+output[i-1]);
        }
    }
    
    return output;
}
