cl = console.log;

const toggleSidebar = [...document.querySelectorAll(".toggleSidebar")];
cl(toggleSidebar);
const backdrop = document.getElementById("backdrop");

const sidebar = document.getElementById("sidebar");

const onNavToggle = () => {
  sidebar.classList.toggle("active");
  backdrop.classList.toggle("active");
};

toggleSidebar.forEach((ele) => {
  ele.addEventListener("click", onNavToggle);
});
