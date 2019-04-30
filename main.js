let startButton = document.querySelector('#start-button');

startButton.addEventListener('click', startLesson);

function startLesson() {
    let landing = document.querySelector('#landing');
    let lessonContainer = document.querySelector('#lessons');
    landing.style.display = 'none';
    lessonContainer.style.display = 'block';
}

function showSection(sectionClass, navClass, activeClass, index = 0) {
    let sections = document.querySelectorAll(sectionClass);
    let navLinks = document.querySelectorAll(navClass);
    sections.forEach(section => {
        section.style.display = 'none'
    })
    navLinks.forEach(link => {
        link.className = link.className.replace(activeClass, " ");
    })
    sections[index].style.display = 'block';
    navLinks[index].className += activeClass;
}

showSection('.lesson-level', '.main-link', ' active');
showSection('.beginner-lesson', '.beginner-nav-link', ' beginner-active-link');
showSection('.intermediate-lesson', '.intermediate-nav-link', ' intermediate-active-link')
showSection('.advanced-lesson', '.advanced-nav-link', ' advanced-active-link')
showSection('.about-section', '.about-nav-link', ' about-active-link')
function currentSection(sectionClass, navClass, activeClass, index) {
    showSection(sectionClass = sectionClass, navClass = navClass, activeClass = activeClass, index = index)
}