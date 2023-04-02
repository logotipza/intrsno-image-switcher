document.addEventListener('DOMContentLoaded', function () {
    const backImages = document.querySelectorAll('.image-switcher-block .back');

    backImages.forEach((backImage) => {
        const frontImage = backImage.parentElement.querySelector('.front');
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Закрыть';
        closeButton.className = 'close-btn';
        closeButton.style.display = 'none';

        function startAnimation() {
            setTimeout(() => {
                backImage.style.display = 'block';
                closeButton.style.display = 'block';
            }, 2000);
        }

        closeButton.addEventListener('click', () => {
            backImage.style.display = 'none';
            closeButton.style.display = 'none';
            setTimeout(startAnimation, 5000);
        });

        backImage.parentElement.appendChild(closeButton);
        startAnimation();
        frontImage.addEventListener('click', () => {
            backImage.style.display = 'block';
            closeButton.style.display = 'block';
        });
    });
});

