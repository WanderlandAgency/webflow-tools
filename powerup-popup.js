document.addEventListener('DOMContentLoaded', function () {
    const popup = document.querySelector('[wd-popup-element="popup"]');
    const closeButton = document.querySelectorAll('[wd-popup-element="trigger-close"]');
    const showTime = parseInt(popup.getAttribute('wd-popup-show-time')) * 1000 || 10000; // Default to 10 seconds
    const animationType = popup.getAttribute('wd-popup-animation') || 'slide-left';
    const animationDuration = parseInt(popup.getAttribute('wd-popup-duration')) || 200;
    const cookieExpiry = parseInt(popup.getAttribute('wd-popup-expirydate')) || 1; // Default to 1 day

    const animations = {
        'fade': {
            initial: { 'opacity': '0', 'visibility': 'hidden' },
            show: { 'opacity': '1', 'visibility': 'visible' },
            hide: { 'opacity': '0', 'visibility': 'hidden' }
        },
        'slide-left': {
            initial: { 'transform': 'translateX(-100%)', 'opacity': '0', 'visibility': 'hidden' },
            show: { 'transform': 'translateX(0)', 'opacity': '1', 'visibility': 'visible' },
            hide: { 'transform': 'translateX(-100%)', 'opacity': '0', 'visibility': 'hidden' }
        },
        'slide-right': {
            initial: { 'transform': 'translateX(100%)', 'opacity': '0', 'visibility': 'hidden' },
            show: { 'transform': 'translateX(0)', 'opacity': '1', 'visibility': 'visible' },
            hide: { 'transform': 'translateX(100%)', 'opacity': '0', 'visibility': 'hidden' }
        },
        'slide-up': {
            initial: { 'transform': 'translateY(100%)', 'opacity': '0', 'visibility': 'hidden' },
            show: { 'transform': 'translateY(0)', 'opacity': '1', 'visibility': 'visible' },
            hide: { 'transform': 'translateY(100%)', 'opacity': '0', 'visibility': 'hidden' }
        },
        'slide-down': {
            initial: { 'transform': 'translateY(-100%)', 'opacity': '0', 'visibility': 'hidden' },
            show: { 'transform': 'translateY(0)', 'opacity': '1', 'visibility': 'visible' },
            hide: { 'transform': 'translateY(-100%)', 'opacity': '0', 'visibility': 'hidden' }
        }
    };

    // Set initial style for popup
    function setInitialStyle() {
        popup.style.display = 'block'; // Block needs to be set before transform for transition to take effect
        Object.assign(popup.style, animations[animationType].initial);
        setTimeout(() => {
            popup.style.transition = `all ${animationDuration}ms`;
            showPopup();
        }, 10); // Delay to ensure transition applies
    }

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function showPopup() {
        if (getCookie('myPopupCookie') !== 'shown') {
            Object.assign(popup.style, animations[animationType].show);
            setCookie('myPopupCookie', 'shown', cookieExpiry);
        }
    }

    function hidePopup() {
        Object.assign(popup.style, animations[animationType].hide);
        setTimeout(() => {
            popup.style.display = 'none';
        }, animationDuration);
    }

    closeButton.forEach(btn => {
        btn.addEventListener('click', hidePopup);
    });

    setTimeout(setInitialStyle, showTime);
});
