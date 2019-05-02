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
        picture: 'pictures/vowels/aduwa.png',
        sound: 'a.mp3'
    },
    {
        nepali: 'आ',
        english: 'aa',
        picture: 'pictures/vowels/aalu.svg',
        sound: 'aa.mp3'
    },
    {
        nepali: 'इ',
        english: 'i',
        picture: 'pictures/vowels/ita.png',
        sound: 'i.mp3'
    },
    {
        nepali: 'ई',
        english: 'ee',
        picture: 'pictures/vowels/eenar.png',
        sound: 'i.mp3'
    },
    {
        nepali: 'उ',
        english: 'u',
        picture: 'pictures/vowels/unt.png',
        sound: 'u.mp3'
    },
    {
        nepali: 'ऊ',
        english: 'oo',
        picture: 'pictures/vowels/oon.png',
        sound: 'oo.mp3'
    },
    {
        nepali: 'ए',
        english: 'eh',
        picture: 'pictures/vowels/inar.png',
        sound: 'eh.mp3'
    },
    {
        nepali: 'ऐ',
        english: 'aih',
        picture: 'pictures/vowels/aihna.svg',
        sound: 'aih.mp3'
    },
    {
        nepali: 'ओ',
        english: 'o',
        picture: 'pictures/vowels/inar.png',
        sound: 'o.mp3'
    },
    {
        nepali: 'औ',
        english: 'au',
        picture: 'pictures/vowels/aujar.png',
        sound: 'au.mp3'
    },
    {
        nepali: 'अं',
        english: 'ahm',
        picture: 'pictures/vowels/anka.png',
        sound: 'ahm.mp3'
    },
    {
        nepali: 'अ:',
        english: 'aha',
        picture: 'pictures/vowels/inar.png',
        sound: 'aha.mp3'
    },
]
function showItem(items, lessonClass) {
    let nepali = document.querySelector(lessonClass + '.nepali');
    let english = document.querySelector(lessonClass + '.english');
    let sound = document.querySelector(lessonClass + '.sound');
    let picture = document.querySelector(lessonClass + '.picture');

    nepali.textContent = items[itemIndex].nepali;
    english.textContent = items[itemIndex].english;
    picture.src = items[itemIndex].picture;
    sound.textContent = items[itemIndex].sound;
}
showItem(vowels, '.vowel-lesson ');

let prevVowelButton = document.querySelector('.prev');
let nextVowelButton = document.querySelector('.next');

nextVowelButton.addEventListener('click', () => {
    let length = vowels.length;
    itemIndex++;
    if (itemIndex === length) {
        itemIndex = 0
    }
    showItem(vowels, '.vowel-lesson ');
})
prevVowelButton.addEventListener('click', () => {
    let length = vowels.length;
    itemIndex--;
    if (itemIndex < 0) {
        itemIndex = length - 1;
    }
    showItem(vowels, '.vowel-lesson ');
})