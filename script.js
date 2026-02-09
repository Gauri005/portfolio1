const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", function(){
  sidebar.classList.toggle("active");
});
function openModal(imageSrc){
  document.getElementById("certModal").style.display = "block";
  document.getElementById("modalImage").src = imageSrc;
}

function closeModal(){
  document.getElementById("certModal").style.display = "none";
}
const profileImg = document.getElementById("profileImg");
const imageModal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

profileImg.onclick = function(){
  imageModal.style.display = "flex";
  modalImg.src = this.src;
}

closeBtn.onclick = function(){
  imageModal.style.display = "none";
}

imageModal.onclick = function(e){
  if(e.target === imageModal){
    imageModal.style.display = "none";
  }
}
const links = document.querySelectorAll(".sidebar nav a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if(link.getAttribute("href") === currentPage){
    link.classList.add("active");
  }
});
