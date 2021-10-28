// DOM SELECTORS
const copyrightYearEl = document.getElementById("copyright-year");

// FUNCTIONS
const displayCurrentyear = () => {
  const getCurrentYear = new Date().getFullYear();
  copyrightYearEl.innerText = getCurrentYear;
};

// RUN ON PAGE LOAD
displayCurrentyear();
