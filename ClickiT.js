(function($){

  var colors=["red","green","Aqua","Aqua","RoyalBlue"];
   
  var index=0;
  
  $.fn.ClickiT=function()
  { 
 
    return this.each(function()
	{
	  var $that=$(this);
	  
      $(this).click(function(e){
   
         changeColor();
      })
  
      function changeColor(){
  
       index=index%colors.length;
	   
       $that.css("background-color",colors[index]);
       
	   index++;
     }
   })
 } 
})(jQuery)