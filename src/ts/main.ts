import "./../css/style.css";

const hamburger = document.getElementById("hamburger") as HTMLDivElement;
const navMenu = document.getElementById("nav-menu") as HTMLUListElement;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navLinks").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
const projectContainer = document.getElementById("projectsCardContainer");
const projects = document.getElementsByClassName("projectCards");

Object.values(projects).forEach((project) => {
  project.addEventListener("click", () => {
    const myModal = document.createElement("div");
    const modalContent = document.createElement("div");
    const close = document.createElement("span");

    myModal.classList.add("modal");
    modalContent.classList.add("modal-content");
    close.classList.add("close");
    close.innerHTML = "&times;";

    close.addEventListener("click", () => {
      myModal.style.display = "none"
    })

    myModal.appendChild(modalContent);
    myModal.appendChild(close);
    projectContainer?.appendChild(myModal);
    
  });
});

/* const projOne = document.getElementById("projectOne") as HTMLDivElement;

projOne.addEventListener("click", () => {});
//Skapa ett "card" för projekten?
 */