document.addEventListener("DOMContentLoaded", function() {

  // Fade in body
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 500);

  const ageGateModal = document.querySelector('[wd-agegate-element="modal"]');
  const ageGateError = document.querySelector('[wd-agegate-element="error"]');
  
  // Fetch custom attributes for expiry date and age
  const expiryDays = parseInt(ageGateModal.getAttribute('wd-agegate-expirydate')) || 30;
  const legalAge = parseInt(ageGateModal.getAttribute('wd-agegate-age')) || 21;

  const enterButton = document.querySelector('[wd-agegate-element="button"]');
  const monthSelect = document.querySelector('[wd-agegate-element="month"]');
  const daySelect = document.querySelector('[wd-agegate-element="day"]');
  const yearSelect = document.querySelector('[wd-agegate-element="year"]');
  const rememberMeCheckbox = document.querySelector('[wd-agegate-remember="true"]');
  
  // Explicitly set the modal to be visible initially
  ageGateModal.style.display = 'block';

  const ageVerified = document.cookie.includes('ageVerified=true');
  if (ageVerified) {
    ageGateModal.style.display = 'none';
    return;
  } else {
    // Set body opacity to 0 initially
    document.body.style.opacity = '0';
  }

  enterButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action

    const month = monthSelect.value;
    const day = daySelect.value;
    const year = yearSelect.value;

    if (!month || !day || !year) {
      ageGateError.style.display = 'block';
      ageGateError.innerText = 'Please fill in all fields.';
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    if (age >= legalAge) {
      // Fade out effect
      let opacity = 1;
      const fadeOutInterval = setInterval(() => {
        if (opacity <= 0) {
          clearInterval(fadeOutInterval);
          ageGateModal.style.display = 'none';
        }
        ageGateModal.style.opacity = opacity;
        opacity -= 0.1;  // Decrease opacity by 0.1 every 25ms to achieve 250ms fade out
      }, 25);

      ageGateError.style.display = 'none';
      
      if (rememberMeCheckbox && rememberMeCheckbox.checked) {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + expiryDays);
        document.cookie = `ageVerified=true; expires=${expiryDate.toUTCString()}; path=/`;
      }
    } else {
      ageGateError.style.display = 'block';
    }
  });
});
