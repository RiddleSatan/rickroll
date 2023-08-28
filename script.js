 var istatus = document.querySelector("h4");
 var addfriend = document.querySelector("#add");
 var flag=0;

 addfriend.addEventListener("click",function(){
    if(flag==0){
    istatus.innerHTML ="Friends";
    istatus.style.color ="green";
    addfriend.innerHTML="Remove";
    addfriend.style.backgroundColor=  "#7c7878";
     flag=1;
   }
    else{
        istatus.innerHTML ="Stranger";
        istatus.style.color ="red";
        addfriend.innerHTML="Add Friend";
    addfriend.style.backgroundColor=  "rgb(28, 156, 124)";
    flag =0;
    }
 })