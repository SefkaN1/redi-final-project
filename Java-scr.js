// Logout button
document.getElementById('logout-button').addEventListener('click', function() {
    alert('Logging out...');
}); 
// Resume button
 document.getElementById('resume-button').addEventListener('click', function() {
    alert('Redirecting to My Resume...');
});
//Saved button
document.getElementById('saved-button').addEventListener('click', function() {
    alert('Redirecting to saved vacancies...');
});
//Responses
document.getElementById('response-button').addEventListener('click', function() {
    alert('Redirecting to My responses...');
});
function saveLink() {
    var link = document.getElementById('link').value;
    console.log('Link saved:', link);
}

function saveChanges() {
    console.log('Changes saved!');
}

function downloadCV() {
    console.log('Downloading CV...');
    window.location.href = 'CV';
}




const formsCarousel = document.querySelector('.forms-carousel');
let currentGroupIndex = 0;

function nextGroup() {
    currentGroupIndex += 1;
    updateFormsCarousel();
}

function prevGroup() {
    currentGroupIndex -= 1;
    updateFormsCarousel();
}

function updateFormsCarousel() {
    const minGroupIndex = 0;
    const maxGroupIndex = Math.max(0, formsCarousel.children.length - 1);

    currentGroupIndex = Math.min(maxGroupIndex, Math.max(minGroupIndex, currentGroupIndex));

    const translateXValue = -currentGroupIndex * 100 + '%';

    formsCarousel.style.transform = `translateX(${translateXValue})`;
}