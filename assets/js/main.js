$(document).ready(function(){
    
    const searchTop = document.getElementById("searchTop");

    $('#searchClose').addEventListener("click", () => {
        // 加入淡出效果的 class
        searchTop.classList.add("fade-out");

        searchTop.style.display = "none";
    });

});
