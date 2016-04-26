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
//console.log(factorial(5));

//分隔符
var sentence="my+name+is+shinyy";
var word=sentence.split("+");
for(var i=0;i<word.length;i++){
	//console.log("word"+i+":"+word[i]);
}
//console.log(word)

//数组的浅复制(复制的新数组依然指向原数组，所以原数组改变时也会改变新数组)
var num=[];
for(var i=0;i<100;i++){
	num[i]=i+1;
}
var newArr=num;
num[0]=400;
//console.log(newArr[0])

//数组的深复制（深度克隆：不指向原数组  所以原数组改变也不影响新数组）
function copyArr(arr1,arr2){
	for(var i=0;i<arr1.length;i++){
		arr2[i]=arr1[i];
	}
};
var shuzu1=[1,5,45787,15757,0];
var shuzu2=[];
copyArr(shuzu1,shuzu2);
shuzu1[0]=222;
//console.log(shuzu2[0]);


//sort排序
var arr3=[100,200,2,1,3,400,4];
arr3.sort();//sort是字典排序  并不符合要求 此时arr3=[1, 100, 2, 200, 3, 4, 400]
function compare(num1,num2){
	return num1-num2;
}
arr3.sort(compare)
//console.log(arr3);//此时符合预期


//foreach迭代 (对数组每个元素使用一个函数)
function aquare(num){
	console.log(num,num+1);
}
var arr4=[1,2,3,4,5,6,7]
//arr4.forEach(aquare)


//字符串反转
var word="hello,world!"
var wordArry=word.split("");
var newWord=[];
for(var j=wordArry.length-1,i=0;j>=0;j--,i++){
		newWord[i]=wordArry[j]
};
var newW="";
for(var i=0;i<newWord.length;i++){
	newW+=newWord[i];
}
//console.log(newW);

//二维数组的最大值
var lArry=[[2,22],[3,5,99],[999,22666,55],[9992,226661,515]];
for(var i=0;i<lArry.length;i++){
	var largNum=0;
	for(var j=0;j<lArry[i].length;j++){
		if(lArry[i][j]>largNum){
			largNum=lArry[i][j]
		}
	}
}
console.log(largNum)
