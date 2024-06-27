document.addEventListener('DOMContentLoaded', () => {
    const projectInput = document.getElementById('project-input');
    const addProjectButton = document.getElementById('add-project-button');
    const projectList = document.getElementById('project-list');
    const projectDetails = document.getElementById('project-details');
    const backButton = document.getElementById('back-button');
    const projectNameHeading = document.getElementById('project-name');
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    let currentProjectId = null;

    const saveProjects = () => {
        localStorage.setItem('projects', JSON.stringify(projects));
    };

    const renderProjects = () => {
        projectList.innerHTML = '';
        projects.forEach(project => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = project.name;
            link.href = '#';
            link.addEventListener('click', () => {
                currentProjectId = project.id;
                showProjectDetails();
            });
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                projects = projects.filter(p => p.id !== project.id);
                saveProjects();
                renderProjects();
            });
            li.appendChild(link);
            li.appendChild(deleteButton);
            projectList.appendChild(li);
        });
    };

    const renderTasks = () => {
        taskList.innerHTML = '';
        const project = projects.find(p => p.id === currentProjectId);
        project.tasks.forEach(task => {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = task;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                project.tasks = project.tasks.filter(t => t !== task);
                saveProjects();
                renderTasks();
            });
            li.appendChild(span);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    };

    const showProjectDetails = () => {
        const project = projects.find(p => p.id === currentProjectId);
        projectNameHeading.textContent = project.name;
        projectDetails.style.display = 'block';
        renderTasks();
    };

    addProjectButton.addEventListener('click', () => {
        const projectName = projectInput.value.trim();
        if (projectName) {
            projects.push({ id: Date.now().toString(), name: projectName, tasks: [] });
            saveProjects();
            renderProjects();
            projectInput.value = '';
        }
    });

    addTaskButton.addEventListener('click', () => {
        const taskName = taskInput.value.trim();
        if (taskName) {
            const project = projects.find(p => p.id === currentProjectId);
            project.tasks.push(taskName);
            saveProjects();
            renderTasks();
            taskInput.value = '';
        }
    });

    backButton.addEventListener('click', () => {
        projectDetails.style.display = 'none';
    });

    renderProjects();
});
