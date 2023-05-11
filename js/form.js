$("#example_id").ionRangeSlider({
    min: 0,
    max: 1000,
    from: 0,
    to: 350,
    postfix: 'm',
    type: 'double'
});

const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = "./profile.html";
  });
  function validate() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checked = false;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checked = true;
      }
    });

    if (!checked) {
      alert('Please select at least one option');
      return false;
    }
    return true;
  }