function darktheam() {
  const html = document.documentElement;
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function toggletap(tap) {
    
const all = document.getElementById("all");
const indiestories = document.getElementById("indiestories");
const software = document.getElementById("Software");
const Interviews = document.getElementById("Interviews");
const maindiv = document.getElementById("maindiv");

  if (tap == "Software") {
    
    software.style.display = "block";
    Interviews.style.display = "none";
    indiestories.style.display = "none";
  }
  else if(tap == "indiestories"){
    software.style.display = "none";
    Interviews.style.display = "block";
    indiestories.style.display = "none";
  }
  else if(tap === "Interviews"){
    software.style.display = "none";
    Interviews.style.display = "none";
    indiestories.style.display = "block";
  }
  else if(tap == "maindiv"){
    software.style.display = "block";
    Interviews.style.display = "block";
    indiestories.style.display = "block";
  }
}
