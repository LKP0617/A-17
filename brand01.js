// 選取所有具有 'heart' class 的元素
const hearts = document.querySelectorAll('.heart');

// 遍歷每個 heart 元素，並添加點擊事件監聽器
hearts.forEach(function (heart) {
    heart.addEventListener('click', function () {
        // 切換 'active' class
        heart.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // 選取輪播圖片、箭頭和指示點
    const banners = document.querySelectorAll('.ad-banner');
    const leftArrow = document.querySelector('.ad-banner-leftarrow');
    const rightArrow = document.querySelector('.ad-banner-rightarrow');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0; // 當前顯示的圖片索引

    // 初始化顯示第一張圖片和指示點
    function showBanner(index) {
        banners.forEach((banner, i) => {
            banner.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('dot-active', i === index);
        });
    }

    // 顯示指定索引的圖片
    function updateBanner(index) {
        currentIndex = (index + banners.length) % banners.length; // 確保索引在範圍內循環
        showBanner(currentIndex);
    }

    // 左箭頭點擊事件
    leftArrow.addEventListener('click', () => {
        updateBanner(currentIndex - 1);
    });

    // 右箭頭點擊事件
    rightArrow.addEventListener('click', () => {
        updateBanner(currentIndex + 1);
    });

    // 輪播指示點點擊事件
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            updateBanner(i);
        });
    });

    // 初始化顯示第一張圖片
    showBanner(currentIndex);
});

document.addEventListener('DOMContentLoaded', function () {
    const banners = document.querySelectorAll('.ad-banner');
    let currentIndex = 0; // 當前顯示的圖片索引

    // 檢測是否為手機版，並加載對應的圖片
    function loadImages() {
        const isMobile = window.innerWidth <= 768;
        banners.forEach((banner, index) => {
            if (isMobile) {
                banner.src = `/A-17/assets/images/negaflower/negaflower_ad0${index + 1}_m.png`;
            } else {
                banner.src = `/A-17/assets/images/negaflower/negaflower_ad0${index + 1}.png`;
            }
        });
    }

    // 初始化圖片
    loadImages();

    // 當視窗大小改變時，動態切換圖片
    window.addEventListener('resize', loadImages);

    // 初始化顯示第一張圖片和指示點
    function showBanner(index) {
        banners.forEach((banner, i) => {
            banner.classList.toggle('active', i === index);
        });
    }

    // 顯示第一張圖片
    showBanner(currentIndex);
});