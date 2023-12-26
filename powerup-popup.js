document.addEventListener('DOMContentLoaded', function () {
    const popup = document.querySelector('[wd-popup-element="popup"]');
    const closeButton = document.querySelectorAll('[wd-popup-element="trigger-close"]');
    const animationType = popup.getAttribute('wd-popup-animation') || 'slide-left'; // Default to slide-left if not set
    const animationDuration = parseInt(popup.getAttribute('wd-popup-duration')) || 200; // Default to 200ms if not set
    const cookieExpiry = parseInt(popup.getAttribute('wd-popup-expirydate')) || 30; // Default to 30 days if not set

    // Define basic animations
    const animations = {
        'fade': { 'opacity': '0', 'visibility': 'hidden' },
        'slide-left': { 'transform': 'translateX(-100%)', 'opacity': '0', 'visibility': 'hidden' },
        'slide-right': { 'transform': 'translateX(100%)', 'opacity': '0', 'visibility': 'hidden' },
        'slide-up': { 'transform': 'translateY(-100%)', 'opacity': '0', 'visibility': 'hidden' },
        'slide-down': { 'transform': 'translateY(100%)', 'opacity': '0', 'visibility': 'hidden' }
    };

    // Function to get the value of a cookie by name
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    // Function to check if the cookie is set
    function checkPopupCookie() {
        return getCookie('myPopupCookie') === 'hidden';
    }

    // Function to apply animation styles
    function applyAnimation(element, animation) {
        Object.assign(element.style, animations[animation]);
        element.style.transition = `all ${animationDuration}ms`;
    }

    // Function to hide popup with selected animation
    function hidePopup() {
        applyAnimation(popup, animationType);
        setTimeout(() => {
            popup.style.display = 'none';
        }, animationDuration);
        setPopupCookie();
    }

    // Function to set cookie
    function setPopupCookie() {
        const date = new Date();
        date.setTime(date.getTime() + (cookieExpiry * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = "myPopupCookie=hidden;" + expires + ";path=/";
    }

    // If the cookie is not set, display the popup
    if (!checkPopupCookie()) {
        popup.style.display = 'block';

        // Close button event listener
        closeButton.forEach(btn => {
            btn.addEventListener('click', function () {
                hidePopup();
            });
        });
    }
});
