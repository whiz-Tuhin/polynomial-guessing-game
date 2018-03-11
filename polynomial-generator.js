var polynomial = ' ';

module.exports = {

  addTerm: function(coeff, power){
    if(power == 0){
      return (String(coeff)) + ' ';
    }
    return '+' +  ' ' + (String(coeff) + ' ' + 'x^' + String(power)) + ' ';
  },

  getCoefficients: function(p_1, p_N){
    let N = p_1 + 1,
        y = p_N,
        coeff,
        coeffs = [];
    
    // applying mod and subtract technique
    while((y % N) !== 0){
      coeff = y % N;
      coeffs.push(Number(coeff));
      y = (y - coeff) / N;
    }
    return coeffs;
  },

  generatePolynomial: function(p_1, p_N){
    
    let coeffs = this.getCoefficients(p_1, p_N);
    
    polynomial = ' ';
    for(var index in coeffs){
      polynomial += this.addTerm(coeffs[index], index);
    }

    return polynomial;
  },
}