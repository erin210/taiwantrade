$(document).ready(function(){
    
    const searchTop = document.getElementById("searchTop");

    $('#searchClose').addEventListener("click", () => {
        // 加入淡出效果的 class
        searchTop.classList.add("fade-out");

        searchTop.style.display = "none";
        
        // // 等待淡出動畫結束後隱藏按鈕（0.5秒是對應的動畫時間）
        // setTimeout(() => {
        // }, 500);
    });


});
