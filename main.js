let startButton = document.querySelector('#start-button');

startButton.addEventListener('click', startLesson);

function startLesson() {
    let landing = document.querySelector('#landing');
    let lessonContainer = document.querySelector('#lessons');
    landing.style.display = 'none';
    lessonContainer.style.display = 'block';
}

/* to show different sections in the lessons */

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

/* To show elements (letters, words, sentences) */
let itemIndex = 0;
const vowels = [
    {
        nepali: 'अ',
        english: 'a',
        picture: 'a.png',
        sound: 'a.mp3'
    },
    {
        nepali: 'आ',
        english: 'aa',
        picture: 'aa.png',
        sound: 'aa.mp3'
    },
    {
        nepali: 'इ',
        english: 'i',
        picture: 'i.png',
        sound: 'i.mp3'
    },
]
function showItem(lessonClass) {
    let nepali = document.querySelector(lessonClass + '.nepali');
    let english = document.querySelector(lessonClass + '.english');
    let sound = document.querySelector(lessonClass + '.sound');
    let picture = document.querySelector(lessonClass + '.picture');

    nepali.textContent = vowels[itemIndex].nepali;
    english.textContent = vowels[itemIndex].english;
    picture.textContent = vowels[itemIndex].picture;
    sound.textContent = vowels[itemIndex].sound;
}
showItem('.vowel-lesson ');

let prevVowelButton = document.querySelector('.prev');
let nextVowelButton = document.querySelector('.next');

nextVowelButton.addEventListener('click', () => {
    let length = vowels.length;
    itemIndex++;
    if (itemIndex === length) {
        itemIndex = 0
    }
    showItem('.vowel-lesson ');
})
prevVowelButton.addEventListener('click', () => {
    let length = vowels.length;
    itemIndex--;
    if (itemIndex < 0) {
        itemIndex = length - 1;
    }
    showItem('.vowel-lesson ');
})