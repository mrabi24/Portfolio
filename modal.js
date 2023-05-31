// Get references to modal elements
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.getElementsByClassName("close")[0];
const projectLinks = document.getElementsByClassName("project-link");

// Open the modal and set the image source and description
function openModal(imageSrc, title) {
  modal.style.display = "block";
  modalImage.src = imageSrc;
  const description = event.currentTarget.dataset.description;
  modalDescription.textContent = description;
  document.getElementById("modal-title").textContent = title;
}

// Switch between displaying image and description
function toggleModalContent() {
  const image = document.getElementById("modal-image");
  const description = document.getElementById("modal-description");

  if (image.style.display === "none") {
    image.style.display = "block";
    description.style.display = "none";
  } else {
    image.style.display = "none";
    description.style.display = "block";
  }
}

// Close the modal when the close button is clicked
closeModal.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when clicking outside the modal content
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Attach event listeners to project links
for (let i = 0; i < projectLinks.length; i++) {
  projectLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    const imageSrc = this.querySelector("img").src;
    const description = this.querySelector("p").textContent;
    openModal(imageSrc, description);
  });
}
