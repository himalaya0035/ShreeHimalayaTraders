var loader = document.querySelector(".loader") // the loader object stores the reference of the div element with class loade
console.log(loader); // for debugging purposes
window.addEventListener("load",vanish); // when the windows loads vanish function is executed
 function vanish() {  // this fn adds the class disappear to the div element 
     loader.classList.add("disappear"); // the disapppear class make the preloader disappear
 }
/* thankyou jquery for existing */
 $(document).on('click','ul li',function(){
     $(this).addClass('iactive').siblings().removeClass('iactive')
 })
 /* above code is used for toggling the active links */
 var count =0;
 function changeImg() {
     if (count==0){
         document.getElementById("changeimg").src="images/face1 (2).jpg";
        count=1;
     }
     else if(count==1){
        document.getElementById("changeimg").src="images/face1 (3).jpg";
        count=2;
     }
     else {
        document.getElementById("changeimg").src="images/face1 (1).jpg";
        count=0; 
     }
 }