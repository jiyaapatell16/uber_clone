const pickupInput = document.querySelector('.hero-pickup input');
const dropoffInput = document.querySelector('.hero-drop input');
const priceButton = document.querySelector('.primary-btn');
const scheduleButton = document.querySelector('.second-btn');

function validateRide() {
  const pickup = pickupInput?.value.trim();
  const dropoff = dropoffInput?.value.trim();
  if (!pickup || !dropoff) {
    alert('Please enter both pickup and dropoff locations.');
    return false;
  }
  return true;
}

priceButton?.addEventListener('click', () => {
  if (validateRide()) alert(`Finding prices from ${pickupInput.value} to ${dropoffInput.value}...`);
});

scheduleButton?.addEventListener('click', () => {
  if (validateRide()) alert('Your ride is ready to be scheduled.');
});

[pickupInput, dropoffInput].forEach((input) => {
  input?.addEventListener('input', () => input.classList.remove('input-error'));
});
