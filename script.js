var main1=document.querySelector("#main");
var cursor=document.querySelector("#cursor");

function loadingAnimation(){
  var tl=gsap.timeline()
  tl.from("#loading-page1 h3",{
    y:200,
    opacity:0,
    stagger:0.1,
    duration:1,
  })
  tl.to("#loading-page1",{
    opacity: 0,
    duration: 2,
    stagger:0.1
  })
  tl.to("#loading-page1",{
    display11:false,
  }) 
  }
  loadingAnimation()
  function loadingAnimation2(){
    var tl=gsap.timeline()
    tl.from("#top-content h4",{
      x:200,
      opacity:0,
      stagger:0.1,
      duration:1.1,
    })
    tl.to("#top-content",{
      opacity: 0,
      duration: 1.8,
      stagger:0.1
    })
    tl.to("#top-content",{
      display:false,
    }) 
    }
    loadingAnimation2()
    function loadingAnimation3() {
      var tl=gsap.timeline()
      tl.to("#white",{
        opacity:1,
        height:"100%",
        duration:2,
       delay:1.2,
       ease:Expo.easeInOut,
      })
    }
    loadingAnimation3()
    

    function revealAnimation(){
    document.querySelectorAllspanch(".reveal").forEach(function(elem){
      var spanparent=document.createElement("span");
      var spanchild=document.createElement("span");
      spanparent.classList.add("parent");
      spanchild.classList.add("child");
      spanchild.textContent = elem.textContent;
      spanparent.appendChild(spanchild);
      elem.innerHTML = "";
      elem.appendChild(spanparent);
    })
  }
  revealAnimation()


  






  
