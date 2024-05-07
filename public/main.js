// side-menu 커졌다 작아졌다
let navCount = 0;
document.querySelector('#navSwitch').addEventListener('click', () => {
  if(navCount == 0){
    document.querySelector('.side-menu').style.width = "200px";
    document.querySelector('#navSwitch').innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'
    let menu = document.querySelectorAll('.nav-menu-name').length;
    for(let i=0; i<menu; i++){
      document.querySelectorAll('.nav-menu-name')[i].style.display='inline-block';
    }
    document.querySelector('main').style.width = "calc(100% - 200px)";
    navCount = 1;
  } else{
    document.querySelector('.side-menu').style.width = "70px";
    document.querySelector('#navSwitch').innerHTML = '<i class="fa-solid fa-arrow-right"></i>'
    let menu = document.querySelectorAll('.nav-menu-name').length;
    for(let i=0; i<menu; i++){
      document.querySelectorAll('.nav-menu-name')[i].style.display='none';
    }
    document.querySelector('main').style.width = "calc(100% - 70px)";
    navCount = 0;
  }
})

// side-menu 메뉴별 클릭하면 active 클래스 부여
let leftNavBtn = document.querySelectorAll('.side-menu ul li');
leftNavBtn.forEach((t, i) => {
  t.addEventListener('click', ()=>{
    leftNavBtn.forEach(t => t.classList.remove('active'));
    t.classList.add('active');
  })
})

// main-top 버튼별 클릭하면 active 클래스 부여
let mainBtn = document.querySelectorAll('.main-top .main-btn button');
mainBtn.forEach((t, i) => {
  t.addEventListener('click', ()=>{
    mainBtn.forEach(t => t.classList.remove('active'));
    t.classList.add('active');
  })
})

// submit 시에 입력 확인
let submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', ()=>{
  let title = document.querySelector('.form-title-input');
  let content = document.querySelector('.form-content');

  console.log(title.value)
  if(title.value == '' || title.value == null){
    document.querySelector('.form-table .title .alert').style.display='block';
    document.querySelector('.form-table .content .alert').style.display='none'
  } else if (content.value == '' || content.value == null){
    document.querySelector('.form-table .content .alert').style.display='block';
    document.querySelector('.form-table .title .alert').style.display='none'
  } else{
    document.querySelector('.write-frm').submit();
  }
})