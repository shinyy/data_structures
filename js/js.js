var aaa=["a","b",2,3,5,"c","a","rrr","rrr","a",3,"a","b",2,3,5,"c","a","rrr","rrr","a",3];


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

//二分查找(从中间到两边的查找，适用于升序排列好的数组(作用何在？？))
var bbb=[1,2,3,4,5,6,7,8,9];
function binarySearch(a,x){
	var low=0,
		high=a.length-1;
		while(low<=high){
			var mid=Math.floor((low+high)/2);
			if(x==a[mid]){
				mid=mid;
			};
			if(x<a[mid]){
				high=mid-1;
			}else{
				low=mid+1;
			};
		};
		console.log(mid);
}

//冒泡排序
var ccc=[4,2,5,3,7,8,300,24,99,57,19]
function bubblesort(a){
	var temp;
	for(var i=0;i<a.length;i++){
		for(var j=a.length-1;j>i;j--){
			if(a[j]<a[j-1]){
				temp=a[j];
				a[j]=a[j-1];
				a[j-1]=temp;
			}
		}
	}
	console.log(a)
}

//递归
function factorial(number){
	if(number==1){
		return number;
	}else{
		return number*factorial(number-1)
	};
};
console.log(factorial(5));

