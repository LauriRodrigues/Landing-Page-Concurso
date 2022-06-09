

let answers = document.querySelectorAll(".boxQuestions");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}


function showNavOnScroll() {
  if (scrollY>0) {
    document.querySelector('#navigation').classList.add('scroll') 
  } else 
  document.querySelector('#navigation').classList.remove('scroll') 
}

function showBackToTopButtonOnScroll() {
  if (scrollY>550) {
    backToTopButton.classList.add('show') // para add a class scroll na tag nav
  } else 
      backToTopButton.classList.remove('show') // para remover a class scroll na tag nav
}

function openMenu () {
  document.body.classList.add('menu-expanded')
}

function closeMenu () {
  document.body.classList.remove('menu-expanded')
}

