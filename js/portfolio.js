
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

    document.addEventListener('DOMContentLoaded', function() {
        const tabs = document.querySelectorAll('.project-tabs ul.head a');
    
        tabs.forEach(tab => {
            tab.addEventListener('click', function(event) {
                event.preventDefault();
    
                // Remove "active" class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
    
                // Add "active" class to the clicked tab
                tab.classList.add('active');
    
                // Extract the "data-value" attribute
                const dataValue = tab.getAttribute('data-value');
    
                // Remove "active" class from all tab-detail elements
                const tabDetails = document.querySelectorAll('.tab-detail');
                tabDetails.forEach(detail => detail.classList.remove('active'));
    
                // Find the tab-detail element with corresponding ID and add "active" class
                const targetTabDetail = document.getElementById(dataValue);
                if (targetTabDetail) {
                    targetTabDetail.classList.add('active');
                }
            });
        });
    });