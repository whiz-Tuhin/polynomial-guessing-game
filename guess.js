var readLineSync = require('readline-sync'),
    generator = require('./lib/polynomial-generator.js'),
    p_1,
    N,
    p_N,
    polynomial;


while(1) {
	p_1 = readLineSync.question('What is the value of P(1) ?\n');
	p_1 = Number(p_1);
	N = p_1 + 1;
	p_N = readLineSync.question('What is the valeu of P(' + N.toString() + ') ?\n');
	p_N = Number(p_N);

	if(p_N < p_1){
    console.log('P(P(1) + 1) > P(1) as the Polynomial consists of Non-negetive integral coefficients\nTry Again');
    process.exit(0);
	}

	polynomial = generator.generatePolynomial(p_1, p_N);
	console.log('Your polynomial is: \n\n\t', polynomial);

	let choice = readLineSync.question('\nContinue (y/n) ?\n');
	
	if(choice == 'n'){
		process.exit(0);
	}

}



