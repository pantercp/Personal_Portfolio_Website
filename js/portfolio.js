
const project = document.querySelectorAll('.project');

function activeProject(projectId) {
    // Find all elements with class "project"
    var projectItems = document.querySelectorAll('.project');
    // Find all elements with class "project-detail"
    var projectDetails = document.querySelectorAll('.project-detail');
    // Remove the class "active" from all project details
    projectDetails.forEach(function (detail) {
        detail.classList.remove('active');
    });
    // Add the class "active" to the corresponding project detail
    var activeProjectDetail = document.querySelector('.project-detail.' + projectId);
    if (activeProjectDetail) {
        activeProjectDetail.classList.add('active');
    }
}

function activeLink() {
    project.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');

    var projectItem = this.getAttribute("data-attribute");
    activeProject(projectItem);
}

project.forEach((item) =>
    item.addEventListener('click', activeLink));

