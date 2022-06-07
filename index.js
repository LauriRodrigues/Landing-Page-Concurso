

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

function showNavOnScroll() {
  if (scrollY>0) {
    document.querySelector('#navigation').classList.add('scroll') 
  } else 
  document.querySelector('#navigation').classList.remove('scroll') 
}

showNavOnScroll()


function openMenu () {
  document.body.classList.add('menu-expanded')
}

function closeMenu () {
  document.body.classList.remove('menu-expanded')
}