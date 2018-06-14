// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var brick;
    brick = '<div class="mui-table-view-cell mui-media"><a href="#"><div class="delete">&times;</div><img src="img/website.png" ><div class="mui-media-body">百度'+7+'</div></a></div>	';
   $('.mui-table-view-cell').click(function() {
			  $this = $(this);	  
			  console.info($('.mui-table-view-cell').index($(this)));
			 	console.info(parseInt($(this).css("left")));
			 	console.info(parseInt($(this).css("top")));
			    
			  return $('.gridly').gridly('layout');
		});

    $(document).on("click", ".delete", function(event) {
      var $this;
      event.preventDefault();
      event.stopPropagation();
      $this = $(this);
      $this.parents('.mui-media').remove();      
      return $('.gridly').gridly('layout');
    });
    $(document).on("click", ".add", function(event) {
      event.preventDefault();
      event.stopPropagation();
      $('.gridly').append(brick);
      $('.gridly .mui-media-body').css({
      	fontSize:'30px',
		    lineHeight: '30px',
		    display: 'block',
		    width: '100%',
		    height:' 30px',
		    marginTop: '8px',
		    textoOverflow: 'ellipsis',
		    color: '#333'      	
      })
      return $('.gridly').gridly();
    });    
    return $('.gridly').gridly();
  });
	
}).call(this);