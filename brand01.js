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

    // 初始化加載圖片（根據設備類型）
    function loadImages() {
        const isMobile = window.innerWidth <= 768;

        banners.forEach((banner, index) => {
            const imgSrc = isMobile
                ? new URL(`./assets/images/negaflower/negaflower_ad0${index + 1}_m.png`, import.meta.url).href
                : new URL(`./assets/images/negaflower/negaflower_ad0${index + 1}.png`, import.meta.url).href;

            // 設置圖片 src
            banner.src = imgSrc;

            // 圖片加載錯誤處理
            banner.onerror = () => {
                console.error(`圖片加載失敗: ${imgSrc}`);
                banner.style.display = 'none'; // 隱藏加載失敗的圖片
            };

            // 圖片加載成功時顯示
            banner.onload = () => {
                banner.style.display = 'block';
            };
        });
    }

    // 顯示指定索引的圖片和指示點
    function showBanner(index) {
        banners.forEach((banner, i) => {
            banner.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('dot-active', i === index);
        });
    }

    // 更新當前圖片
    function updateBanner(index) {
        currentIndex = (index + banners.length) % banners.length; // 確保索引循環
        showBanner(currentIndex);
    }

    // 左箭頭點擊事件
    if (leftArrow) {
        leftArrow.addEventListener('click', () => {
            updateBanner(currentIndex - 1);
        });
    }

    // 右箭頭點擊事件
    if (rightArrow) {
        rightArrow.addEventListener('click', () => {
            updateBanner(currentIndex + 1);
        });
    }

    // 輪播指示點點擊事件
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            updateBanner(i);
        });
    });

    // 當視窗大小改變時，動態切換圖片
    window.addEventListener('resize', loadImages);

    // 初始化圖片和顯示第一張圖片
    loadImages();
    showBanner(currentIndex);
});
