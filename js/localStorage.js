 function setItems(index){
	var length=$('#list'+index).find('.mui-media img').length;
	console.info(length);
	localStorage.removeItem('length');
	localStorage.setItem('length',length);
    for(var i=0; i<length; i++){
    	user = {};			    	
        user.imgUrl =$('#list'+index).find('.mui-media img').attr('src') ;
        user.age  = $('#list'+index).find('.mui-media .mui-media-body').eq(i).text();
        user.home = 'China';
        localStorage.setItem(i,JSON.stringify(user));
	}  
    
}
 