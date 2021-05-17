//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";

//register Plugins
gsap.registerPlugin(GSDevTools,CustomWiggle,CustomEase,MotionPathPlugin);

//**** SELECT ELEMENTS without jQuery ****\\

// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  let mainTL = gsap.timeline({id:"main"});
  
  //let shipTL = gsap.timeline();

  function init(){
    //***********  fadeInTL init ****************

    //*********** zoomTL init ****************
    
    //*********** spaceshipTL init ****************
    
    //*********** smokeTL init ****************
    
    //*********** flightTL init ****************
    //gsap.set("#Rocketship",{xPercent:-50, yPercent:-50, transformOrigin:"center top"});
    //*********** moonLandingTL init ****************

  }
  
  //Nested Timelines
  //***********  fadeInTL  ****************
  
  //*********** zoomTL ****************

  //*********** smokeTL ****************

  //*********** liftOffTL ****************
  
  //*********** LandingTL ****************
        
  //*********** moonLandingTL ****************


  //1. set initial properties
  init();

  //2. show content - prevents FOUC
      gsap.set('#svg-container',{visibility:"visible"});

  //3. BUILD Main timeline
  
  mainTL                 


;//timeline END



});
