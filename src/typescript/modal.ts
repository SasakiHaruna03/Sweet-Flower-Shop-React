const modal = document.querySelector(".modal__view") as HTMLElement | null;
const modalImg = document.querySelector(".modal__img") as HTMLImageElement | null;
const closeBtn = document.querySelector(".modal__close") as HTMLElement | null;
const images = document.querySelectorAll<HTMLImageElement>(".flower__img");

const prevBtn = document.querySelector(".modal__btn.prev") as HTMLElement | null;
const nextBtn = document.querySelector(".modal__btn.next") as HTMLElement | null;

//画像を更新する関数
const totalImages = images.length;
let currentIndex = 0;

function updateModal(index: number) {
    // images.item は存在しないインデックスで null を返すので型的に安全
    const img = images.item(index);
    if (!modalImg || !img) return;
    currentIndex = index;
    modalImg.src = img.src;
    modalImg.alt = img.alt;
}

//画像をクリックしたときに表示する
images.forEach(function (img, index) {
    img.addEventListener("click", () => {
        modal?.classList.add("is-active");
        updateModal(index);
    });
});

//nextボタンを押した時に次の画像を表示する
nextBtn?.addEventListener("click", () => {
    currentIndex++;
    //最後の画像の場合、最初の画像へ移動する
    if (currentIndex > totalImages - 1) {
        currentIndex = 0;
    }
    updateModal(currentIndex);
});

//prevボタンを押した時に前の画像を表示する
prevBtn?.addEventListener("click", () => {
    currentIndex--;
    //最初の画像の場合、最後の画像へ移動する
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    updateModal(currentIndex);
});

//×ボタンで閉じる
closeBtn?.addEventListener("click", () => {
    modal?.classList.remove("is-active");
});

//背景クリックで閉じる
modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal?.classList.remove("is-active");
    }
});

// キーボードが押された時の処理
window.addEventListener("keydown", (e) => {
    // モーダルが表示されていない時は何もしない
    if (!modal?.classList.contains("is-active")) return;

    if (e.key === "ArrowRight") {
        // 右矢印キーが押されたら「次へ」
        nextBtn?.click();
    } else if (e.key === "ArrowLeft") {
        // 左矢印キーが押されたら「前へ」
        prevBtn?.click();
    } else if (e.key === "Escape") {
        // Escキーが押されたら「閉じる」
        closeBtn?.click();
    }
});
