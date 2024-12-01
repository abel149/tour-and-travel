 



/*const move = function(){
   
menu.addEventListener('click',() =>{
       
  new1.innerHTML =

  `
  <ul class="navbar-nav text-center new1">
  <li class="new"><a class="navbar-brand " href="#">
  <img class="logo" src="t.jpg" style="width:80px;" alt="">
  </a><span class="name"> JOY Ethiopia </span>

</li>
  <li class=" s new">
  <a class="nav-link active" aria-current="page" href="">Home</a>
</li>
<li class="s new">
  <a class="nav-link" href="Blog.html">Blog</a>
</li>

<li class="s new">
  <a class="nav-link" href="Services.html">Services</a>
</li>


<li class="s new">
  <a class="nav-link" href="feedback.html">Feedback</a>     
 <li class="s new">
  <a class="nav-link" href="Contact.html">Contact Us</a>
</li>
<li class="s new">
  <a class="nav-link" href="About.html">About</a>
</li>
 
      
<div class="menub manuc">
<!--<input type="checkbox" id="openSidebarMenu">-->
<label for="openSidebarMenu" class="sidebarIconToggle ">
  <div class="spinner top"></div>
  <div class="spinner middle"></div>
  <div class="spinner bottom"></div>
</label>
</div>
</ul>

`;
const back = function(){ 
  const menuc = document.querySelector('.manuc');
  menuc.addEventListener('click',() =>{
   
  
  document.querySelector('.nav-item').classList.toggle('nav-item');
  document.querySelector('.nav-item').classList.toggle('nav-item');
move();

});

}
back();
});
}


move();*/

function mobile(){
  if(document.getElementById('f1','f2','f3','f4','f5','f6').style.display == 'flex'){
    document.getElementById('f1').style.display = 'none';
    document.getElementById('f2').style.display = 'none';
    document.getElementById('f3').style.display = 'none';
    document.getElementById('f4').style.display = 'none';
    document.getElementById('f5').style.display = 'none';
    document.getElementById('f6').style.display = 'none'; 
      
  }
  else{
    document.getElementById('f1').style.display = 'flex';
    document.getElementById('f2').style.display = 'flex';
    document.getElementById('f3').style.display = 'flex';
    document.getElementById('f4').style.display = 'flex';
    document.getElementById('f5').style.display = 'flex';
    document.getElementById('f6').style.display = 'flex';
  }
}
document.getElementById('menub').addEventListener('click',mobile);
function reset(){
  if(window.innerWidth >=900){
    document.getElementById('n').style.flexDirection = 'row';
    document.getElementById('menub').style.display = 'none';
    document.getElementById('f1').style.display = 'flex';
    document.getElementById('f2').style.display = 'flex';
    document.getElementById('f3').style.display = 'flex';
    document.getElementById('f4').style.display = 'flex';
    document.getElementById('f5').style.display = 'flex';
    document.getElementById('f6').style.display = 'flex';
  }else if(window.innerWidth < 900){
   
    document.getElementById('n').style.flexDirection = 'column';
     document.getElementById('menub').style.display = 'block';
     document.getElementById('f1').style.display = 'none';
     document.getElementById('f2').style.display = 'none';
     document.getElementById('f3').style.display = 'none';
     document.getElementById('f4').style.display = 'none';
     document.getElementById('f5').style.display = 'none';
     document.getElementById('f6').style.display = 'none';
  }
}
window.addEventListener('resize',reset);
