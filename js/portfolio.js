
// Removes "active" from project logos and adds "active" to selected logo
function activeLink() {
    projects.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
    // Gets attribute to handle project detail class
    var projectItem = this.getAttribute("data-attribute");
    activeProject(projectItem);
    setupTabs();
}

// Removes "active" from all projects' details and adds "active" to selected project"
function activeProject(projectId) {
    // Find all elements with class "project-detail"
    var projectDetails = document.querySelectorAll('.project-detail');
    // Remove the class "active" from all project details
    projectDetails.forEach(function (detail) {
        detail.classList.remove('active');
    });
    // Add the class "active" to the corresponding project's detail
    var activeProjectDetail = document.querySelector('.project-detail.' + projectId);
    if (activeProjectDetail) {
        activeProjectDetail.classList.add('active');
    }

}

// Add an event listener for handling clicks
function setupTabs() {
    var project = document.querySelector('.project.active');
    var projectID = project.getAttribute('data-attribute');
    // Find all tabs within Project Detail that is active
    var openProject = document.querySelector('.project-detail.' + projectID);
    var openProjectTabs = openProject.querySelectorAll('.project-tabs ul.head a');
    openProjectTabs.forEach((item) =>
        item.addEventListener('click', activateTab));
}

function activateTab() {
    var project = document.querySelector('.project.active');
    var projectID = project.getAttribute('data-attribute');
    // Find all tabs within Project Detail that is active
    var openProject = document.querySelector('.project-detail.' + projectID);
    var openProjectTabs = openProject.querySelectorAll('.project-tabs ul.head a');
    console.log(`This is tab inner text: ${this.innerText}`);
    // Select tab detail within the open project
    var tabDetails = openProject.querySelectorAll('.tab-detail');
    // Remove active from all tabs within project
    openProjectTabs.forEach((item) =>
        item.classList.remove("active"));
    // Remove active from all tab details within project
    tabDetails.forEach((item) =>
        item.classList.remove("active"));
    // Add class "active" to clicked tab
    this.classList.add("active");
    // Get data attribute of selected tab
    console.log(`This is data-attribute of selected tab: ${this.getAttribute('data-value')}`);
    var targetValue = this.getAttribute('data-value')
    // Get attribute value from tabs
    var targetDetails = openProject.querySelectorAll('[data-detail]');
    // Find match between corresponding tab link and tab detail
    targetDetails.forEach((item) => {
        if ((item.getAttribute('data-detail') == targetValue)) {
            console.log("FOUND MATCH");
            item.classList.add("active");
        }
    });

}

// Finds all project logo icons
const projects = document.querySelectorAll('.project');

// Initialises an event listener for Project Logo Icons
projects.forEach((item) =>
    item.addEventListener('click', activeLink));




setupTabs();





