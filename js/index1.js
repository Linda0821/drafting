var createFragment = function(count) {
	var fragment = document.createDocumentFragment();
	var li;
	for (var i = 0; i < count; i++) {
		li = document.createElement('li');
		li.className = 'mui-table-view-cell mui-media';
		li.innerHTML = '<a href="javascript:;">'
		+'<img class="mui-media-object mui-pull-right"  src="img/shuijiao.jpg">' 
		+'<div class="mui-media-body">主标题'
		+'<p class="mui-ellipsis">列表二级标题列表二级标题列表二级标题</p></div></a>';
		fragment.appendChild(li);
	}
	return fragment;
};
var createFragmentGrid = function(count) {
	var fragment = document.createDocumentFragment();
	var li;
	for (var i = 0; i < count; i++) {
		li = document.createElement('li');
		li.className = 'mui-table-view-cell mui-media mui-col-xs-2';
		li.innerHTML = '<a href="#">'
		+'<img src="img/baidu.png" style="width:80%; height: 80%;">' 
		+'<div class="mui-media-body"style=" font-size:0.7em ;padding: 0;margin: 0;">'
		+'百度'+i+'</div></a>';
		fragment.appendChild(li);
	}
	return fragment;
};

function gridlyIndex(index,count){
	    var ul= document.createElement('ul');			
		ul.className = 'mui-table-view mui-grid-view mui-grid-12';
		ul.appendChild(createFragmentGrid(count));
		if(index==3){
			var li = document.createElement('li');
			li.className = 'mui-table-view-cell mui-media mui-col-xs-2';
			li.innerHTML = '<a id="icon-plus" href="#">'
			+'<span class="mui-icon mui-icon-plus"></span>' 
			+'<div class="mui-media-body"style=" font-size:0.7em ;">'
			+'添加'+'</div></a>';
			ul.appendChild(li);
			
		}
		var list = document.getElementById("list"+index);
		list.appendChild(ul);	
    }
function gridlyNumber(number){
	if(number>=24){
			gridlyIndex(1,12);	
			gridlyIndex(2,12);
			$("#mui-slider-group").append('<div id="list3" class="mui-slider-item" style="display:nene;"></div>');
			var num=number-24;
			gridlyIndex(3,num);
			$('.mui-slider-indicator').append('<div class="mui-indicator"style="width:2px;height:2px;position:absolute;left:55%"></div>');
			
	}else{
		gridlyIndex(1,12);
		var num=number-12;
		gridlyIndex(2,num);
		$('#list2 .mui-table-view').append('<div class="mui-table-view-cell mui-media mui-col-xs-2" id="add2">'
		+'<a id="icon-plus" href="#">'
		+'<span class="mui-icon mui-icon-plus"></span>' 
		+'<div class="mui-media-body"style=" font-size:0.7em ;">'
		+'添加'+'</div></a></div>')
		
	}	
	
}
/*获取新闻列表*/
(function($) {
	/*新闻列表*/
	var list = document.getElementById("list");
	list.appendChild(createFragment(10));   	
	/*九宫格*/
	gridlyNumber(22);
	/*网址*/
	var list4 = document.getElementById("list4");
	list4.appendChild(createFragmentGrid(6));	
	
	
	
	
})(mui);
//$("#list2 .mui-media").on('taphold',function(){
	var lenth=$("#list2 .mui-media").length-1;
	$("#list2 .mui-media:lt("+lenth+")").on('click',function(){									   		    
	    setItems(2);
	    window.location.href="gridly.html";
	    
	})
	var lenth1=$("#list3 .mui-media").length-1;
	$("#list3 .mui-media:lt("+lenth1+")").on('click',function(){									    		    
	    setItems(3);
	    window.location.href="gridly.html";
	        
	})
	
function setItems(index){
	var length=$('#list'+index).find('.mui-media img').length;
	console.info(length);
	localStorage.removeItem('length');
	localStorage.setItem('length',length);
	localStorage.removeItem('index');
	localStorage.setItem('index',index);	 
    for(var i=0; i<length; i++){
    	user = {};			    	
        user.imgUrl =$('#list'+index).find('.mui-media img').attr('src') ;
        user.age  = $('#list'+index).find('.mui-media .mui-media-body').eq(i).text();
        user.home = 'China';
        localStorage.setItem(i,JSON.stringify(user));
	}  
    
}

 
  				