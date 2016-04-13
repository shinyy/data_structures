var aaa=["a","b",2,3,5,"c","a","rrr","rrr","a",3,"a","b",2,3,5,"c","a","rrr","rrr","a",3]

//线性查找
function linearsearch(a,x){
	for(var i=0;i<a.length;i++){
		if(a[i]==x){
			console.log(i)
		}
	}
};


//数组去重
function delreapt(arry){
	console.log(arry);
	var len=arry.length;
	for(var i=0;i<len;i++){
		for(var j=i+1;j<len;j++){
			if(arry[i]==arry[j]){
				arry.splice(j,1);
			};
		};
	};
	console.log(arry);
};
	
//字符串长度
function getbytes(str){
	var len=str.length,
		bytes=len;
	for(var i=0;i<len;i++){
		if(str.charCodeAt>255){
			bytes++;
		}
	}
	console.log(bytes);
}

