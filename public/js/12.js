function isLeapYear(n){
	if(n % 4 == 0){
		if(n % 100 == 0){
			if(n % 400 == 0){
				return true;
			}
			return false;
		}
		return true;
	}
	return false;
}