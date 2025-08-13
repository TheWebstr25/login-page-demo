//Changing form from sign in to sign up
if (document.getElementById("grid").style.display = "grid"){

document.getElementById("alte-btn").addEventListener("click", function (a){

  a.preventDefault();

  document.getElementById("sign-in").style.display = "none" ;

  document.getElementById("sign-up").style.display = "flex" ;

  const changeGrid = document.getElementById("grid");

  changeGrid.classList.remove("grid");

  changeGrid.classList.add("alte-grid");

  const borderRadius = document.getElementById("cover").style;

  borderRadius.borderBottomLeftRadius = "50px"
  borderRadius.borderTopLeftRadius = "50px"
  borderRadius.borderTopRightRadius = "0"
  borderRadius.borderBottomRightRadius = "0"
});
};

//Changing form from sign up to sign in
document.getElementById("alte-btn-2").addEventListener("click", function (b){

  b.preventDefault();

  document.getElementById("sign-in").style.display = "flex" ;

  document.getElementById("sign-up").style.display = "none" ;

  const changeGrid = document.getElementById("grid");

  changeGrid.classList.remove("alte-grid");

  changeGrid.classList.add("grid");

  const borderRadius = document.getElementById("cover").style;

  borderRadius.borderBottomLeftRadius = "0"
  borderRadius.borderTopLeftRadius = "0"
  borderRadius.borderTopRightRadius = "50px"
  borderRadius.borderBottomRightRadius = "50px"
});

const cover = document.getElementById("cover");
const signIn = document.getElementById("sign-in");
const signUp = document.getElementById("sign-up");
const grid = document.getElementById("grid");

document.getElementById("alte-btn").addEventListener("click", function (e) {
  e.preventDefault();

  cover.classList.remove("shuffle-left");
  cover.classList.add("shuffle-right");

  // Change form display
  signIn.style.display = "none";
  signUp.style.display = "flex";

  // Swap order halfway through
  setTimeout(() => {
    grid.classList.remove("grid");
    grid.classList.add("alte-grid");
  }, 400); // half of animation time
});

document.getElementById("alte-btn-2").addEventListener("click", function (e) {
  e.preventDefault();

  cover.classList.remove("shuffle-right");
  cover.classList.add("shuffle-left");

  // Change form display
  signUp.style.display = "none";
  signIn.style.display = "flex";

  // Swap order halfway through
  setTimeout(() => {
    grid.classList.remove("alte-grid");
    grid.classList.add("grid");
  }, 400);
});
