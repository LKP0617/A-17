// 選取所有具有 'heart' class 的元素
const hearts = document.querySelectorAll('.heart');

// 遍歷每個 heart 元素，並添加點擊事件監聽器
hearts.forEach(function (heart) {
    heart.addEventListener('click', function () {
        // 切換 'active' class
        heart.classList.toggle('active');
    });
});

