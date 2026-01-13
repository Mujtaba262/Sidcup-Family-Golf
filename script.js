var crsr = document.getElementById("cursor");
var crsrBlur = document.getElementById("cursor-blur");
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.pageX + "px";
    crsr.style.top = dets.pageY + "px";
    crsrBlur.style.left = dets.pageX - 250 + "px";
    crsrBlur.style.top = dets.pageY - 250 + "px";
})
gsap.to(
    "#nav",
    {
        backgroundColor: "rgba(0, 0, 0, 1)",
        duration: 1,
        height: 110,
        scrollTrigger: {
            trigger: "#nav",
          scroller: "body",
          markers: true, 
            start: "top -10%",
               end: "top -11%",
              scrub: 1,  
    },
})
gsap.to(
    "#main",
    {
        backgroundColor: "rgba(0, 0, 0, 1)",
        scrollTrigger: {
            trigger: "#main",
            scroller: "body",
            markers: true,
            start: "top -25%",
            end: "top -70%",
            scrub: 2,
        }
    })