
const items = document.querySelectorAll(".m_3_p");
const itemsPerPage = 5;
let currentPage = 0;
function showItems(page) {
  items.forEach((item, index) => {
    item.style.display = (index >= page * itemsPerPage && index < (page + 1) * itemsPerPage)
      ? 'block'
      : 'none';
  });
}
function nextPage() {
  if ((currentPage + 1) * itemsPerPage < items.length) {
    currentPage++;
    showItems(currentPage);
  }
}
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showItems(currentPage);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  showItems(currentPage);
  document.querySelector("button[onclick='prevPage()']").addEventListener("click", prevPage);
  document.querySelector("button[onclick='nextPage()']").addEventListener("click", nextPage);
});
const imagoo = [
    "p_1.png", "p_2.png", "p_3.png", "p_4.png", "p_5.png",
    "p_6.png", "p_7.png", "p_8.png", "p_9.png", "p_10.png"
];

let currentImage = 0;

function showImage(index) {
    const imgElement = document.getElementById("gallery-image");
    imgElement.src = imagoo[index];
}

function next_images() {
    currentImage = (currentImage + 1) % imagoo.length; 
    showImage(currentImage);
}

function prev_images() {
  currentImage = (currentImage - 1 + imagoo.length) % imagoo.length; 
  showImage(currentImage); // Ensure the image is updated
}

const content = [
  [
    "briche & co for years and it’s become a comforting routine. Their pastries are a delight to the senses, with flaky crusts and rich fillings.",
    "The aroma of freshly baked goods wafts through the air, drawing you in like a moth to a flame."
  ],
  [
    "Chocolate croissants are a must-try, with their gooey chocolate center and buttery layers.",
    "The almond croissants are equally tempting, with a sweet almond paste filling that melts in your mouth."
  ],
  [
    "Their tarts are a work of art, with vibrant fruits and creamy fillings that are almost too pretty to eat.",
    "The fruit tarts are a burst of color and flavor, while the chocolate tarts are rich and indulgent."
  ]
];

const sections = document.querySelectorAll(".p_swap_1");

sections.forEach((section, index) => {
  const paragraph = section.querySelector("p");
  const dots = section.querySelectorAll(".dot");
  let current = 0;

  function updateContent() {
    paragraph.textContent = content[index][current];
    dots.forEach(dot => dot.classList.remove("active"));
    dots[current].classList.add("active");
    current = (current + 1) % content[index].length;
  }

  updateContent(); // Show first paragraph
  setInterval(updateContent, 4000); // Rotate every 4 seconds
});


  const buttonss = document.querySelectorAll(".i_1");

  buttonss.forEach(button => {
    button.addEventListener("click", () => {
      const targetSelector = button.getAttribute("data-target");
      const targetElement = document.querySelector(targetSelector);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const menuToggle = document.getElementById("menuToggle");
  const menuBox = document.getElementById("menuBox");
  
  menuToggle.addEventListener("click", () => {
    menuBox.classList.toggle("show");
  });
  
  