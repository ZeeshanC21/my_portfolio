
var tl = gsap.timeline();

var h1 = document.querySelector("h1");
var h1Text = h1.textContent;
var splittedText = h1Text.split(" ");
var clutter = "";

splittedText.forEach(function (event, idx) {
  switch (idx) {
    case 0:
      let newClutter = "";
      let halfLength = event.length / 2;
      event.split("").forEach(function (char, charIdx) {
        if (charIdx < halfLength) {
          newClutter += `<span class="a">${char}</span>`;
        } else {
          newClutter += `<span class="b">${char}</span>`;
        }
      });
      clutter += `<span class="first">${newClutter}</span> `;
      break;
    case 1:
      clutter += `<span class="second">${event}</span> <br>`;
      break;
    case 2:
      clutter += `<span class="third">${event}</span> `;
      break;
    case 3:
      let newClutter1 = "";
      let halfLength1 = event.length / 2;
      event.split("").forEach(function (char, charIdx) {
        if (charIdx < halfLength1) {
          newClutter1 += `<span class="c">${char}</span>`;
        } else {
          newClutter1 += `<span class="d">${char}</span>`;
        }
      });
      clutter += `<span class="fourth">${newClutter1}</span>`;
      break;
    default:
      break;
  }
});

h1.innerHTML = clutter;

gsap.from(".container .entry .first .a",{
    delay:1,
    y:10,
    x:-10,
    duration:0.6,
    stagger:0.4,
    opacity:0
});

gsap.from(".container .entry .first .b",{
    delay:1.4,
    x:10,
    y:-10,
    duration:0.6,
    stagger:-0.4,
    opacity:0
});

tl.from(".container .entry .second",{
    delay:1.4,
    y:10,
    x:-10,
    duration:1.2,
    opacity:0
})

tl.from(".container .entry .third",{
    y:-10,
    x:10,
    duration:1.2,
    opacity:0
})

gsap.from(".container .entry .fourth .c",{
    delay:1.4,
    x:10,
    y:-10,
    duration:0.6,
    stagger:0.4,
    opacity:0
});

gsap.from(".container .entry .fourth .d",{
    delay:0.5,
    x:10,
    y:-10,
    duration:0.6,
    stagger:-0.4,
    opacity:0,
});

tl.to(".entry h1",{
    fontSize:"6px",
    duration:0.6,
    delay:1.5,
    opacity:0
})

tl.from(".box",{
    opacity:0,
    duration:2,
    stagger:0.5
});

tl.from(".about-section",{
    opacity:0,
    duration:1
});

tl.from(".aboutme-cards-education",{
    opacity:0,
    duration:1
})

tl.from(".aboutme-cards-sports",{
    opacity:0,
    duration:1
})

tl.from(".album",{
    opacity:0,
    duration:1
})

tl.from(".education-content",{
  opacity:0,
  duration:1
})

tl.from(".aboutmy-project",{
  opacity:0,
  duration:1
})

tl.from(".wrapper",{
  opacity:0,
  duration:1
})

tl.from(".footer",{
  opacity:0,
  duration:1
});

const images = document.querySelectorAll(".aboutme-cards-education img");
const typeH3 = document.querySelector(".education-content h3");
const nameH4 = document.querySelector(".education-content h4");
const durationh5 = document.querySelector(".education-content h5");
const educationUl = document.querySelector(".education-content ul");
const contentp = document.querySelector(".education-content p");

function addImageEventListeners() {
  images.forEach((image) => {
    image.addEventListener("mouseover", () => {
      if (image.classList.contains("school")) {
        typeH3.textContent = "School";
        nameH4.textContent = "HANSRAJ MORARJI PUBLIC SCHOOL";
        durationh5.textContent = "2010-2020";
        educationUl.innerHTML = `<br><p>Achievements💯:</p><li>School Cricket Team Captain for 6 years</li><li>House Captain</li><li>Head Boy</li><li>Representative of School in InterSchool Debates</li><li>Representative of School in Militiary Seminars</li><li>Youngest in School to play for Mumbai State Cricket team</li>`;
      }

      if (image.classList.contains("college")) {
        typeH3.textContent = "College";
        nameH4.textContent = "MITHIBAI COLLEGE OF SCIENCE";
        durationh5.textContent = "2020-2022";
        educationUl.innerHTML = `<p>Spent my entire 2 years of college at home due to lockdown😅</p>`;
      }
      if (image.classList.contains("university")) {
        typeH3.textContent = "University";
        nameH4.textContent =
          "MUKESH PATEL SCHOOL OF TECHNOLOGY AND MANAGEMENT,NMIMS";
        durationh5.textContent = `2022-Expected 2026`;
        educationUl.innerHTML = `<br><p style="font-size:26px;">Degree🎓: Bachelors in Technology in Computer Engineering</p><p style="font-size:26px;">Current CGPA:3.70</p><br><p>Achievements💯:</p>
          <li>Executive for handling Workshops Department in NMIMS's TechFest Taqneeq 15.0</li>
          <li>Sub-Head for handling Workshops Department in NMIMS'S TechFest Taqneeq 16.0</li>
          <li>Executive of ISA MPSTME for Digital Creatives Department</li>
          <li>Currently the Captain of the College Cricket Team</li>`;
      }

      gsap.to(image, {
        opacity: 0.3,
        duration: 0.8,
      });

    });

    image.addEventListener("mouseout", () => {
      typeH3.textContent = "";
      nameH4.textContent = "";
      durationh5.textContent = "";
      educationUl.innerHTML = "";
      gsap.to(image, {
        opacity: 1
      });

    });
  });
}


if (window.matchMedia("(min-width: 651px)").matches) {
  addImageEventListeners();
}

window.addEventListener('resize', () => {
  if (window.matchMedia("(min-width: 651px)").matches) {
    addImageEventListeners();
  } else {
    images.forEach((image) => {
      image.removeEventListener("mouseover", addImageEventListeners);
      image.removeEventListener("mouseout", addImageEventListeners);
    });
  }
});

