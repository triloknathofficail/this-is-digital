function show(){
  gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
el: document.querySelector(".main-container"),
smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main-container", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
},
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},

pinType: document.querySelector(".main-container").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

show();


document.querySelector("#btns").addEventListener("mousemove",function(){
  document.querySelector(".servicesContent").style.opacity = "1";
  
})
document.querySelector(".servicesContent").addEventListener("mouseleave",function(){
  document.querySelector(".servicesContent").style.opacity = "0";
})

  // menu
var tt = 0;
document.querySelector(".menutt").addEventListener("click",function(){
  if(tt === 0){
    document.querySelector(".menu").style.transform ="translateY(0%)"
    document.querySelector(".menu").style.position ="fixed";
    tt = 1;

  }
  else{
    document.querySelector(".menu").style.transform ="translateY(-120%)"
    // document.querySelector(".menu").style.position ="relative";
    tt = 0;
  }
})




  gsap.from(".photo1",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:60

  })
  gsap.from(".photo2",{
    delay:0.4,
    opacity:0,
    duration:1,
    x:60

  })
  gsap.from(".photo3",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:-60

  })
  gsap.from(".page1-contant",{
    delay:0.4,
    opacity:0,
    duration:1,
    

  })



  gsap.from(".page2-contant",{
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main-container",
      start: "top 80%",
      // scrub:true 
  
    },
    opacity:0,
    y:200,
    duration:1
  })
  // -----------------page3-----------------------
  gsap.from(".pic1",{
    scrollTrigger:{
      trigger:".page3",
      scroller:".main-container",
      start:"top 80%",
      end:"top 0%",
      
      // markers:true
      // scrub:2,
    },
    opacity:0,
    x:-200,
    duration:1
  
  })
  gsap.from(".pic2",{
    scrollTrigger:{
      trigger:".page3",
      scroller:".main-container",
      start:"top 100%",
      end:"top 0%",
      // markers:true
      // scrub:2,
    },
    opacity:0,
    y:200,
    duration:1
  
  })
  gsap.from(".pic3",{
    scrollTrigger:{
      trigger:".page3",
      scroller:".main-container",
      start:"top 60%",
      end:"top 0%",
      // markers:true
      // scrub:2,
    },
    opacity:0,
    y:200,
    duration:1
  
  })
  
  gsap.from(".pic4",{
    scrollTrigger:{
      trigger:".page3",
      scroller:".main-container",
      start:"top 100%",
      end:"top 0%",
      // markers:true
      // scrub:2,
    },
    opacity:0,
    y:200,
    duration:1
  })
  gsap.from(".page3-right",{
    scrollTrigger:{
      trigger:".page3",
      scroller:".main-container",
      start:"top 100%",
      end:"top 0%",
      // markers:true
      // scrub:2,
    },
    opacity:0,
    y:200,
    duration:1
  })
  


  // -------page4--------------------------------

  gsap.from(".page4-upper",{
    scrollTrigger:{
      trigger:".page4",
      scroller:".main-container",
      start:"top 60%",
      end:"top 0%",
      // markers:true
      // scrub:2,
    },
    opacity:0,
    y:-200,
    duration:1
  })

  gsap.from(".page4-lower",{
    scrollTrigger:{
      trigger:".page4",
      scroller:".main-container",
      start:"top 60%",
      end:"top 0%",
      // markers:true
      // scrub:2,
    },
    opacity:0,
    y:200,
    duration:1
  })
// -----------------page5-------
gsap.from(".page5-box-left",{
  scrollTrigger:{
    trigger:".page5",
    scroller:".main-container",
    start:"top 60%",
    end:"top 0%",
    // markers:true
    // scrub:2,
  },
  opacity:0,
  x:-200,
  duration:1
})
gsap.from(".page5-box-right",{
  scrollTrigger:{
    trigger:".page5",
    scroller:".main-container",
    start:"top 60%",
    end:"top 0%",
    // markers:true
    // scrub:2,
  },
  opacity:0,
  x:200,
  duration:1
})
gsap.from(".learn1",{
  scrollTrigger:{
    trigger:".page5",
    scroller:".main-container",
    start:"top 80%",
    end:"top 0%",
    // markers:true
    // scrub:2,
  },
  opacity:0,
  y:200,
  duration:1
})
// ------------page6-------
gsap.from(".page6-swiper",{
  scrollTrigger:{
    trigger:".page6",
    scroller:".main-container",
    start:"top 60%",
    end:"top 0%",
    // markers:true
    // scrub:2,
  },
  opacity:0,
  y:200,
  duration:1
})
gsap.from(".contant-upper",{
  scrollTrigger:{
    trigger:".page6",
    scroller:".main-container",
    start:"top 10%",
    end:"top 0%",
    // markers:true
    // scrub:2,
  },
  opacity:0,
  y:200,
  duration:1
})

// ----------page8-----

var page8=gsap.timeline({
  scrollTrigger: {
    trigger: ".page8",
    scroller: ".main-container",
    start: "top 60%",
    // scrub:true 

  },
})


page8.from(".contant1",{
  y:100,
  opacity:0,
  duration:0.3,
})
page8.from(".contant2",{
  y:50,
  opacity:0,
  duration:0.4,
})
page8.from(".contant3",{
  y:50,
  opacity:0,
  duration:0.5,
})
page8.from(".contant4",{
  y:50,
  opacity:0,
  duration:0.5,
})
page8.from(".contant5",{
  y:50,
  opacity:0,
  duration:0.5,
})
page8.from(".bottom-contant",{
  
  opacity:0,
  duration:0.5,
})


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination", 
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// var nav=gsap.timeline({
//   scrollTrigger: {
//     trigger: ".page2",
//     scroller: "body",
//     start: "top 2%",
//     // scrub:truee

//   },
// })

// nav.to("nav",{
//     y:-100,
//     opacity:0,
//     duration:0.5,
// })

// ---------------service menu---------------

