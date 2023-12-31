// // Logout button
// document.getElementById('logout-button').addEventListener('click', function() {
//     alert('Logging out...');
// }); 
// // Resume button
//  document.getElementById('resume-button').addEventListener('click', function() {
//     alert('Redirecting to My Resume...');
// });
// //Saved button
// document.getElementById('saved-button').addEventListener('click', function() {
//     alert('Redirecting to saved vacancies...');
// });
// //Responses
// document.getElementById('response-button').addEventListener('click', function() {
//     alert('Redirecting to My responses...');
// });
function saveLink() {
    var link = document.getElementById('link').value;
    console.log('Link saved', link);
}

function saveChanges() {
    console.log('Changes saved!');
}

function downloadCV() {
    console.log('Downloading CV...');
    window.location.href = 'assets/Project Report.pdf';
}

function goToResponsesSection() {
    const responsesSection = document.getElementById('response-section');
    responsesSection.scrollIntoView({ behavior: 'smooth' });
}
function goToSavedvacancies() {
    const responsesSection = document.getElementById('Vacancies-section');
    responsesSection.scrollIntoView({ behavior: 'smooth' });
}
document.getElementById('responses-button').addEventListener('click', goToResponsesSection);
document.getElementById('vacancies-button').addEventListener('click', goToSavedvacancies);



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
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var appendNumber = 4;
  var prependNumber = 1;
  document
    .querySelector(".prepend-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      ]);
    });
  document
    .querySelector(".prepend-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
      );
    });
  document
    .querySelector(".append-slide")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
      );
    });
  document
    .querySelector(".append-2-slides")
    .addEventListener("click", function (e) {
      e.preventDefault();
      swiper.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      ]);
    });