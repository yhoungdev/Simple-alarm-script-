try {
  
/*start script*/

$(function(){
   console.log('working ');
  var mins;
  timer=()=>{
    time=new Date();
    hrs=time.getHours();
    mins=time.getMinutes();
    sec=time.getSeconds();
    
    all=`${hrs}:${mins}:${sec}`;
     
     $('.display').text(all);
  };
  
  setInterval(timer, 1000);
  // now get elements
  $('form').submit((ev)=>{
     ev.preventDefult();
  });
    
    //now check for local storsge 
    if (JSON.parse(localStorage.getItem('sound'))) {
        var lock=JSON.parse(localStorage.getItem('sound'));
        $('.output').text(JSON.parse(localStorage.getItem('sound')));
        
        
    }
 
      
    
    $('.btn-info').click(function(){ 
      //add click event 
   
    setHrs=$('#hours').val();
     setMin=$('#minutes').val();
    
       let timeObj=[];
         timeObj[0]=setHrs;
         timeObj[1]=setMin;
         console.log(timeObj);
         //split them
         
          var [first,second]=timeObj;
         
         convert=Number(first);
         change=Number(second);
         localStorage.setItem('sound',JSON.stringify(timeObj));
         console.log(localStorage)
 
      console.log(lock[1]);
        
      
    });
    
    (function(){
       if(parseInt(lock[1])==new Date().getHours && parseInt(lock[1])==new Date().getMinutes){
         aud=document.querySelector('.audio');
         aud.play();
         $('.btns').slidUp();
       }else {
         $('.btns').hide();
         $('.audio').pause();
       }
    })();

  //end here
});
  
} catch (e) {
  console.log(e.message);
}