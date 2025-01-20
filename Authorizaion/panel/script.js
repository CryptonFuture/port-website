// // JavaScript to handle navigation and show/hide content
// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll(".nav-link");
//     const contentSections = document.querySelectorAll(".content-section");

//     // Function to hide all sections
//     function hideAllSections() {
//         contentSections.forEach((section) => {
//             section.classList.remove("active");
//         });
//     }

//     // Function to show the selected section
//     function showSection(target) {
//         const section = document.getElementById(target);
//         if (section) {
//             section.classList.add("active");
//         }
//     }

//     // Add click event listeners to navigation links
//     navLinks.forEach((link) => {
//         link.addEventListener("click", function (e) {
//             e.preventDefault(); // Prevent default anchor behavior
//             const target = this.getAttribute("data-target"); // Get the target section
//             hideAllSections(); // Hide all sections
//             showSection(target); // Show the selected section
//         });
//     });

//     // Show the home section by default
//     showSection("home");
// });