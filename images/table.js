const sidebar = document.getElementById("dashborad-sidebar");
const main = document.querySelector(".bar-link-col");
const collapses = document.querySelectorAll(".collapse");
document.getElementById("search-app-open").addEventListener("click", function () {
  collapses.forEach((clp) => {
    clp.classList.remove("show");
  });
  main.classList.toggle("collapsed");
  sidebar.classList.toggle("collapsed");
});
const SidebarcollapseBtn = document.querySelectorAll(".nav-main-link");

SidebarcollapseBtn.forEach((clp) => {
  clp.addEventListener("click", function () {
    if (main.classList.contains("collapsed") && sidebar.classList.contains("collapsed")) {
      main.classList.toggle("collapsed");
      sidebar.classList.toggle("collapsed");
    }
  });
});

$(document).ready(function() {
    $('#myTable,myTable1').DataTable({
      pageLength: 6,
      lengthMenu: [4, 5, 6],
      responsive: true,
      ordering: false
    });
  });