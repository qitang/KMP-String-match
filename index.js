function preProcess(str) {
	var common = Array.apply(null, Array(str.length + 1)).map(Number.prototype.valueOf,0);
	var pre = 0;
	for(var i = 2 ; i<=str.length ; i++ ) {
		
		while(pre > 0 && str[pre] !== str[i-1]) {
			pre = common[pre]
		}
		if(str[pre] === str[i-1]) common[i] =  ++pre;
	}
	return common;
}