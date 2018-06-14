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
		li.className = 'mui-table-view-cell mui-media mui-col-xs-2 '+i;
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
			$('#add2').remove();
			$("#mui-slider-group").append('<div id="list3" class="mui-slider-item" style="display:nene;"></div>');
			var num=number-24;
			gridlyIndex(3,num);
			$('.mui-slider-indicator').append('<div class="mui-indicator" id="dot" style="width:2px;height:2px;position:absolute;left:55%"></div>');
			
	}else{
		gridlyIndex(1,12);
		var num=number-12;
		gridlyIndex(2,num);
		$('#list2 .mui-table-view').append('<div class="mui-table-view-cell mui-media mui-col-xs-2" id="add2">'
		+'<a id="icon-plus" href="#">'
		+'<span class="mui-icon mui-icon-plus"></span>' 
		+'<div class="mui-media-body" style=" font-size:0.7em ;">'
		+'添加</div></a></div>');
		
	}	
	
}
/*获取新闻列表*/
var number=29;

$('#list2 .mui-table-view').append('<div class="mui-table-view-cell mui-media mui-col-xs-2" id="add2">'
		+'<a id="icon-plus" href="#">'
		+'<span class="mui-icon mui-icon-plus"></span>' 
		+'<div class="mui-media-body" style=" font-size:0.7em ;">'
		+'添加</div></a></div>');
(function($) {
	/*新闻列表*/
	var listNews = document.getElementById("listNews");
	listNews.appendChild(createFragment(10));   	
	/*九宫格*/
	
	gridlyNumber(number);
	/*网址*/
	var listWebsite = document.getElementById("listWebsite");
	listWebsite.appendChild(createFragmentGrid(6));	
	
	
	
	
})(mui);

	var lenth=$("#list2 .mui-media").length;
//$("#list2 .mui-media").on('taphold',function(){
	//$("#list2 .mui-media:lt("+lenth+")").on('click',function(){
	$("#list2 .mui-media").on('click',function(){
	    setItems(2);
	    $('body').css({
	    	overflow:'hidden'
	    })
	    //window.location.href="gridly.html";
	    $(".mask").show();
	    newGrid();
	    
	})
	var lenth1=$("#list3 .mui-media").length-1;
//$("#list3 .mui-media").on('taphold',function(){
	//$("#list3 .mui-media:lt("+lenth1+")").on('click',function(){
	$("#list3 .mui-media").on('click',function(){
	    setItems(3);
	    $('body').css({
	    	overflow:'hidden'
	    })
	    //window.location.href="gridly.html";
	    $(".mask").show();
	    newGrid();  
	    
	})
	
function setItems(index){
	var length=$('#list'+index).find('.mui-media img').length;
	console.info(length);
	//localStorage.removeItem('length');
	localStorage.setItem('length',length);
	//localStorage.removeItem('index');
	localStorage.setItem('index',index);	 
    for(var i=0; i<length; i++){
    	user = {};			    	
        user.imgUrl =$('#list'+index).find('.mui-media img').attr('src') ;
        user.age  = $('#list'+index).find('.mui-media .mui-media-body').eq(i).text();
        user.home = 'China';
        localStorage.setItem(i,JSON.stringify(user));
	}  
    
}

 
function newGrid(){
	var gridly = document.getElementById("gridly");	
	gridly.innerHTML='';
	gridly.appendChild(createFragment1(localStorage.getItem('length')));
	grdlySet();			 
	getItems();	 
	backFromGridly();	
}
 function getItems(){    	
    	console.info(localStorage.getItem('length'));    	 
    	for(var i=0; i<localStorage.getItem('length'); i++){		    		 
				var data = JSON.parse(localStorage.getItem(i));
				console.log("name:"+data.imgUrl+'\r age:'+data.age+"\r home:"+data.home);
				$('.gridly').find('.mui-media img').attr('src',data.imgUrl);
				$('.gridly').find('.mui-media .mui-media-body').eq(i).text(data.age);
			
			}
    	
    }
function backFromGridly(){
	$('.closeBtn').on('click', function(){
		$('body').css({
	    	overflow:'auto'
	    })
		for(var i=0; i<localStorage.length; i++){		    		 
			localStorage.removeItem(i)
		}
		$("#gridly .mui-table-view-cell").each(function(){
				var gridLeft=0;
				var gridTop=0;
				var num=0
			    	console.info($('#gridly .mui-table-view-cell').index($(this))+'  left:'
			    	+parseInt($(this).css("left"))+'   top:'+parseInt($(this).css("top")));
			    	gridLeft=parseInt($(this).css("left"))/65;
			    	gridTop =parseInt($(this).css("top"));
			    	num=$('#gridly .mui-table-view-cell').index($(this));
			    	if(gridTop==0){
			    		gridLeft=gridLeft;	
			    		
			    	}else{
			    	 gridLeft=gridLeft+6;
			    				    		
			    	}		    	
			    	console.info($('#gridly .mui-table-view-cell').index($(this))+'  left:'+gridLeft);		    	
			    	user = {};			    	
			        user.imgUrl =$('.gridly').find('.mui-media img').attr('src') ;
			        user.age  = $('.gridly').find('.mui-media .mui-media-body').eq(num).text();
			        user.home = 'China';
			        localStorage.setItem(gridLeft,JSON.stringify(user));
				
		});
		$(".mask").hide();
		console.info('返回'+localStorage.getItem('length')+'，'+localStorage.getItem('index'));		
		if(localStorage.getItem('length')>0){
			for(var i=0; i<localStorage.getItem('length'); i++){
				var data = JSON.parse(localStorage.getItem(i));			
				console.log("name:"+data.imgUrl+'\r age:'+data.age+"\r home:"+data.home);
				$('#list'+localStorage.getItem('index')).find('.mui-media img').attr('src',data.imgUrl);
				$('#list'+localStorage.getItem('index')).find('.mui-media .mui-media-body').eq(i).text(data.age);
				$('#list'+localStorage.getItem('index')).find('.mui-media').eq(i).attr('class','mui-table-view-cell mui-media mui-col-xs-2 '+i);				
			}			
		}		
	 })
	
}
function grdlySet(){
	$('.content').css({
		 width: '100%',
		 height:'170px',
		 backgroundColor:'white'
	  	
	  })
	$('.gridly').gridly({
		base: 27.5, // px 
		gutter: 5, // px
	    columns: 12
	  });
	  
	deleteWeb();
	
	
}
 var createFragment1 = function(count) {
	var fragment = document.createDocumentFragment();
	var div;
	for (var i = 0; i < count; i++) {
		div = document.createElement('div');
		div.className = 'mui-table-view-cell mui-media '+i;
		div.innerHTML = '<a href="#"><div class="delete">&times;</div>'
		+'<img src="img/baidu.png">' 
		+'<div class="mui-media-body">'
		+'百度'+i+'</div></a>';
		fragment.appendChild(div);
	}
	return fragment;
};	 
function deleteWeb(){
	$(document).on("click", ".delete", function(event) {
	  var $this;
	  event.preventDefault();
	  event.stopPropagation();
	  $this = $(this);
	  $this.parents('.mui-media').remove();	  
	  var str=$this.parents('.mui-media').attr('class');
	  var arr=str.split(" ");	  	 	  	  
	  var index=localStorage.getItem('index');	  		
	  var gridlyNumber=$('#Gallery .mui-media').length-1;
	  console.info(gridlyNumber);	
	 	if(gridlyNumber>24&&index==2&&$('#list3').length){
	 		var url=$("#list3 .mui-media img").eq(0).attr("src");	 		
	 		if($('#list3 .mui-media').length>1){	 			
	 			for(var i=$('#gridly .mui-media').length; i<12;i++){
	 				$('#gridly').append('<div class="mui-table-view-cell mui-media '+i+'">'
		 			+'<a href="#"><div class="delete">&times;</div>'
		 			+'<img src="img/baidu.png">' 
					+'<div class="mui-media-body">'
					+$('#list3 .mui-media .mui-media-body').eq(11-i).html()+'</div></a>'
		 			+'</div>');
	 				$('#list3 .mui-media ').eq(11-i).remove();
	 				
	 			}
	 			for(var i=0; i<localStorage.getItem('length')-1; i++){				
					$('#list3').find('.mui-media').eq(i).attr('class','mui-table-view-cell mui-media mui-col-xs-2 '+i);				
				}
	 			
	 		}
	 			
	 	}else if(gridlyNumber<=24&&index==2&&$("#gridly .mui-media").length<12&&$('#list3').length){
	 		$('#list2 ul').append('<div class="mui-table-view-cell mui-media mui-col-xs-2" >'
 			+$('#list3 .mui-media').last().html()
 			+'</div>')
	 		
	 		$('#list3').remove();
	 		$('#dot').remove();	
	 		
	 		
	 	} else if(gridlyNumber>24&&index==2){
	 		for(var i=0;i<$('#list3 .mui-media').length-1;i++){
	 			$('#list3').find('.mui-media').eq(i).attr('class','mui-table-view-cell mui-media mui-col-xs-2 '+i);
	 		}
	 	}
	 	
	 	console.info('$("#gridly .mui-media").length:'+$("#gridly .mui-media").length);
		console.info('localStorage.getItem("length"):'+localStorage.getItem('length'));
		console.info(arr+'arr[2]:'+arr[2]);
	   	if($('#gridly .mui-media').length>0){
			localStorage.setItem('length',$('#gridly .mui-media').length);				
		}	
				
		if($("#gridly .mui-media").length<12){
			$('#list'+index+' .'+arr[2]).remove();
		}
	  return $('.gridly').gridly('layout');
	});
}
