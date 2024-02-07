const gifImage = document.querySelector('.gif-image'); // For the first gif
const button1 = document.getElementById('button1');
const h1 = document.querySelector('h1'); // Select the <h1> element
const restartButton = document.getElementById('restart-button'); // Select the "Restart" button
const gifImage2 = document.querySelector('.gif-image2'); // For the second gif
const imageWrapper = document.querySelector('.images-wrapper');


// Function to reset the webpage to its pre-transition state
function resetWebpage() {
    // Hide the "Restart Animation" button
    restartButton.style.display = 'none';
    // Reset the webpage to its pre-transition state
    gifImage2.src = "https://media0.giphy.com/media/hlptNTzRTKaUp3bbfd/giphy.webp?cid=790b7611yu0tivd0lqlth7d08ri4ebuntpak3jx1cvuk6pjc&ep=v1_gifs_search&rid=giphy.webp&ct=g";
    button1.style.display = 'block';
    h1.style.display = 'block';
}

// Event listener for the "Restart Animation" button click
restartButton.addEventListener('click', () => {
    // Reload the webpage, which will reinitialize everything
    location.reload();
});

// Event listener for the "Transition" button click
button1.addEventListener('click', () => {
    // Change the GIF source to the new URL
    gifImage.src = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXA5NDNrZndlb2thMGVsOHRlN3ZidHEzcHd3N2U4c3o4cXZ6bXVpbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/19CU3F5v6fq4LawRGu/giphy.gif';
    // Increase the size of the GIF
    gifImage.style.width = '700px';
    gifImage.style.height = '700px';
    // Hide the "Transition" button and <h1> element
    button1.style.display = 'none';
    h1.style.display = 'none';
    imageWrapper.style.display = 'none';

    // Hide the "Restart Animation" button initially
    restartButton.style.display = 'none';
    // Set a timeout to show the "Restart Animation" button after 2 seconds
    setTimeout(() => {
        restartButton.style.display = 'block';
    }, 2000); // 2000 milliseconds (2 seconds)
});

gifImage2.addEventListener('load', () => {
    // Show the "Restart Animation" button after the GIF has loaded (post-transition)
    restartButton.style.display = 'block';
});

