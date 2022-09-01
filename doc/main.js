const box = document.getElementById('boxForDemo');
const restartBtn = document.getElementById('restartBtn');
const animationSelect = document.getElementById('animationName');
const animationNameCode = document.getElementById('animationNameCode');
const copyClassNameBtn = document.getElementById('copyClassNameBtn');
let activeAnimation = box.className;
animationNameCode.innerHTML = activeAnimation;
animationSelect.addEventListener('change', function (e) {
    activeAnimation = e.target.value;
    box.className = activeAnimation;
    animationNameCode.innerHTML = activeAnimation;
});

restartBtn.addEventListener('click', function (e) {
    box.classList.remove(activeAnimation);
    box.offsetHeight;
    box.classList.add(activeAnimation);
});

copyClassNameBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(activeAnimation);
});