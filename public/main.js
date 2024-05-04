let navCount = 0;
document.querySelector('#navSwitch').addEventListener('click', function(){
  if(navCount == 0){
    document.querySelector('.left-nav').style.width = "200px";
    document.querySelector('#navSwitch').innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'
    let menu = document.querySelectorAll('.nav-menu-name').length;
    for(let i=0; i<menu; i++){
      document.querySelectorAll('.nav-menu-name')[i].style.display='inline-block';
    }
    document.querySelector('main').style.width = "calc(100% - 200px)";
    navCount = 1;
  } else{
    document.querySelector('.left-nav').style.width = "70px";
    document.querySelector('#navSwitch').innerHTML = '<i class="fa-solid fa-arrow-right"></i>'
    let menu = document.querySelectorAll('.nav-menu-name').length;
    for(let i=0; i<menu; i++){
      document.querySelectorAll('.nav-menu-name')[i].style.display='none';
    }
    document.querySelector('main').style.width = "calc(100% - 70px)";
    navCount = 0;
  }
})