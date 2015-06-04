function isPrimeNumber(n){
	if (n == 1){
		return false;
	}
	var m = 2;
	while(m < n){
		if(n % m == 0){
			console.log(n);
			return false;
		}
		m = m+ 1;
	}
	return true;
}