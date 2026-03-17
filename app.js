const topo = document.querySelector(".topo");
const elementosReveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    topo.classList.add("scrolled");
  } else {
    topo.classList.remove("scrolled");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

elementosReveal.forEach((elemento) => {
  observer.observe(elemento);
});