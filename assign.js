const btn = document.getElementById('clickable');
const image = document.getElementById('image');
let isImageVisible = false;

btn.addEventListener('click', function onClick(event) {
    if (isImageVisible) {
        image.style.display = 'none'; // Hide the image
    } else {
        // Show the image after a 2-second delay (you can adjust the delay time)
        setTimeout(function () {
            image.style.display = 'block';
        }, 5000); // 2000 milliseconds (2 seconds) delay
    }
    isImageVisible = !isImageVisible; // Toggle image visibility
});
