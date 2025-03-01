document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");

    function toggleSidebar() {
        sidebar.classList.toggle("show");
    }
    document.querySelector("button").addEventListener("click", toggleSidebar);
});