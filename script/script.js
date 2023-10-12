const cont_2 = document.getElementById('cont_2');
const slider = document.getElementById('slider');
const s_wid = slider.offsetWidth;
let win_wid = window.innerWidth;
let s_move_max = (s_wid - (win_wid/2)) * -1;
let s_pos = 0;
let li_pos = 0;
let pct = 0;

//** 본문 전체 휠
cont_2.addEventListener('wheel',function(e){
    // e.preventDefault;
    
    move_slider(e.deltaY);
    //on_indicator();
    // console.log(e.deltaY)
});

function move_slider(amount){
    s_pos -= amount;
    if(s_pos < s_move_max){
        s_pos = s_move_max;
        return;
    }else if(s_pos > 0){
        s_pos = 0;
        return;
    }
    // slider.style.transform = `translateX(${s_pos}px)`;
    slider.style.marginLeft = s_pos + 'px'
    //li_upDown(amount);
    console.log(s_pos)
}


//gnb를 클릭했을 때 클릭한 a의 텍스트 받아오기
//함수명, 변수명 다시 정의
/*
const liElements = document.querySelectorAll('#li_menu li');

for (let i = 0; i < liElements.length; i++) {
  liElements[i].addEventListener('click', function() {
    const clickedText = this.querySelector('a').textContent; //
    console.log(clickedText);
    // const sectionId = clickedText.toUpperCase();

    // const section = document.getElementById(clickedText);
    // if (section) {
    //   section.scrollIntoView({ behavior: 'smooth' });
    // }
    const s1 = document.getElementById(clickedText)
    const gnbX = s1.offsetLeft;
    slider.style.transform = `translateX(${-gnbX}px)`;
    document.getElementById("gnb").style.right = "-6000px";
  });
}
*/

$('#li_menu li').click(function() {
  let i = $(this).index()
  
  $('#slider').animate({
    'margin-left' : -(win_wid * i) + 'px'
  })
  $('#gnb').css({'right' : '-6000px'})
})

// 이벤트리스터 다시 정의
// const t = document.querySelector('.moon')
// document.addEventListener('click', function() {
//   //window.alert()
//   //move_slider(s_wid)
//   const s1 = document.getElementById('SKILLS')
//   const gnbX = s1.offsetLeft;
//   console.log(s1.offsetLeft)
//   slider.style.transform = `translateX(${-gnbX}px)`;
// })

//** gnb open(햄버거버튼)
document.getElementById("gnb-open").addEventListener("click", function() {
  // button1을 클릭하면 nav의 left를 1600px로 이동
  document.getElementById("gnb").style.right = "0";
});
//** gnb close(x 버튼)
document.getElementById("gnb-close").addEventListener("click", function() {
  // button2를 클릭하면 nav의 left를 0으로 이동
  document.getElementById("gnb").style.right = "-6000px";
});


//** 배 이동
const outerDiv = document.querySelector('.ship_container');
let scrollPosition = 0;

document.addEventListener('wheel', (event) => {
  const delta = event.deltaY;

  // 한 번의 마우스 휠 이벤트로 이동할 거리를 설정합니다.
  const step = 27;

  // 현재 위치에서 휠 이벤트로 인한 이동량을 계산합니다.
  const newScrollPosition = scrollPosition + (delta > 0 ? step : -step);

  // 최소와 최대 이동 거리를 정의합니다.
  const minScrollPosition = 0;
  const maxScrollPosition = window.innerWidth - outerDiv.clientWidth-200; // 최대 거리를 95vw로 설정

  // 최소와 최대 이동 거리를 벗어나지 않도록 조정합니다.
  scrollPosition = Math.max(minScrollPosition, Math.min(newScrollPosition, maxScrollPosition));

  // 스크롤을 왼쪽으로 이동하거나 오른쪽으로 이동하려면 transform을 사용합니다.
  outerDiv.style.transform = `translateX(${scrollPosition}px)`;
 //event.preventDefault(); // 기본 스크롤 이벤트를 중단합니다.
});

// 외부 div를 화면 가장자리에서 숨기도록 초기 위치를 설정합니다.
outerDiv.style.transform = `translateX(${scrollPosition}px)`;


//** Work 영역
const buttons = document.querySelectorAll('.btn-box button');

// 각 버튼에 대한 클릭 이벤트 리스너를 추가합니다.
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // 모든 버튼에서 "active" 클래스를 제거합니다.
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // 클릭된 버튼에 "active" 클래스를 추가합니다.
    button.classList.add('active');
  });
});

const container = document.querySelector('.btn-box');

container.addEventListener('wheel', (event) => {
  // 마우스 휠 이벤트를 감지하고 div 내부의 스크롤만 처리
  if (event.target === container) {
    // event.preventDefault();
    event.stopPropagation()
    const deltaY = event.deltaY;
    container.scrollTop += deltaY;
  }
});

