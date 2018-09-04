document.addEventListener("DOMContentLoaded", function() {
    setAnimation("realtime");
    setAnimation("publish");
    setAnimation("menu");
});

function setAnimation(element) {
    Scroll.scale(element, 1, 0.45).start();
    Scroll.opacity(element, 1, 0.45).start();
}

