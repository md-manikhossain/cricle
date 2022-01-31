//swiper js
const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

// nav

const  menuBar = document.querySelector("nav .container ul");
const  menuBtn = document.querySelector("nav .container .menu-btn");
const  closeBtn = document.querySelector("nav .container .close");

menuBtn.addEventListener("click", () =>{
  menuBar.classList.add("show-menu");
  menuBtn.style.display = "none"
  closeBtn.classList.add("show-close-btn");

})
closeBtn.addEventListener("click", () =>{
  menuBar.classList.remove("show-menu");
  closeBtn.classList.remove("show-close-btn");
  menuBtn.style.display = "block"

})



const  navItems = document.querySelectorAll("nav .container ul li");


const removeActive = () =>{
  navItems.forEach(item =>{
    const link = item.querySelector("a");
    link.classList.remove("active")
  })
  
}

navItems.forEach(item =>{
  const link = item.querySelector("a");
  link.addEventListener("click", () =>{
    removeActive();
    link.classList.add("active");
  })
})




const skillItem = document.querySelectorAll(".skills .container .skill")

skillItem.forEach(skill =>{
  skill.querySelector(".head .fa-chevron-down").addEventListener("click", () =>{
    skill.querySelector(".items").classList.toggle("show-down")
  })
    
})


const showMore = document.querySelector(".about .container .about-meta .more");
const showContent = document.querySelector(".about .about-meta .hide-content")
showMore.addEventListener("click", e =>{
  e.preventDefault();
  showContent.classList.toggle("show-content")
  if(showContent.classList.contains("show-content")){
    showMore.textContent = "Show Less";
  }else{
    showMore.textContent = "Show More"
  }
})