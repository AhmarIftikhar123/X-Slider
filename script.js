const back_btn = document.getElementById("back_btn");
const next_btn = document.getElementById("next_btn");
const gallary_imgs = document.querySelector(".gallary_imgs");

gallary_imgs.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  gallary_imgs.scrollLeft += evt.deltaY;
});

next_btn.onclick = () => {
  gallary_imgs.style.scrollBehavior = "smooth";
  gallary_imgs.scrollLeft += 600;
};

back_btn.onclick = () => {
  gallary_imgs.style.scrollBehavior = "smooth";
  gallary_imgs.scrollLeft -= 600;
};
