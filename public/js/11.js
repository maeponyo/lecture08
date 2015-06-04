function distance(a,b){
	var aX = a.x;
	var aY =a.y;
	var bX = b.x;
	var bY = b.y;
	var X = aX - bX
	var Y = aY - bY
	var ans = Math.sqrt(X * X + Y * Y)
	console.log(ans);
	return ans;
}