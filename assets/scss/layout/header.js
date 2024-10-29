//控制網頁元素 : .menuBTN(選單/三條線) .navBAR .closeBTN


//宣告
let _menuBTN = document.querySelector('.forJs');
let _navBAR = document.querySelector('.navBAR');
let _closeBTN = document.querySelector('.closeBTN');

//監聽事件

_menuBTN.addEventListener('click',function(){
    _navBAR.classList.add('navBAR-RUN-IN');
    _navBAR.classList.remove('navBAR-RUN-OUT');
});

_closeBTN.addEventListener('click',function(){
    _navBAR.classList.add('navBAR-RUN-OUT');
    _navBAR.classList.remove('navBAR-RUN-IN');
});