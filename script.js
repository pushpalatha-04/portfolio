function openModal(imageSrc) {
    const modal = document.getElementById("certificateModal");
    const modalImg = document.getElementById("modalImage");
    
    // This will tell you in the browser console if the link is being clicked
    console.log("Attempting to open image at: " + imageSrc);
    
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
}

// Close if user clicks background
window.onclick = function(event) {
    const modal = document.getElementById("certificateModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}