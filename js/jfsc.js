window.onload = function(){
	var arr = document.getElementsByClassName("con")[0].getElementsByTagName("li");
	var arr1 = [];
	arr1[0]=arr[0];
	arr1[1]=arr[1];
	arr1[2]=arr[2];
	arr1[3]=arr[5];
	arr1[4]=arr[8];
	arr1[5]=arr[7];
	arr1[6]=arr[6];
	arr1[7]=arr[3];
	var timer = null;
	var a=0;
	var is_in = false;
	arr[4].onclick = function(){
		if(is_in){return;}
		is_in = true;
		var num = Math.ceil(Math.random()*20)+20;
		var b=0;
		timer = setInterval(function(){
		a++;
		b++;
		if(a==8){a=0}
		if(b==num){clearInterval(timer);is_in = false;return;}
		for(var i=0;i<arr1.length;i++)
		{
			arr1[i].className = "";}
		arr1[a].className = "current";
		},100);
	}
setInterval(function(){
$("#msg>p:first").animate({"marginTop":"-0.3rem"},1000,function(){
    $(this).css({marginTop:0})
	$("#msg").append($("#msg>p:first"));
	}
)
},3000)
}