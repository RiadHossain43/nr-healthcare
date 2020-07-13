
const timeline = gsap.timeline({ defaults: { duration: .7 , delay:1} })
const SYNC = .1
timeline
   .from('#Path_6',{ x:662,y:187.4,rotation:360,ease:'ease-out'}) //translate(128.5 476.044)
   .from('#Path_5',{ x:0,y:40.381,rotation:360,ease:'ease-out'},SYNC) //translate(265.32 337.484)
   .from('#Path_3',{ x:600,y:332.71,rotation:360},SYNC) //translate(265.32 612.994)
   .from('#Rectangle_6',{y:112,x:312},SYNC) //translate(339.95 299.427)
   .from('#Path_14',{x:290.298,y:553.368,opacity:0},SYNC) //translate(390.298 553.368)
   .from('#Rectangle_7',{x:140.298,y:300.263,opacity:0},SYNC) //translate(405.25 362.263)
   .from('#Path_13',{x:911.875 ,y:647.263,opacity:0},1) //translate(911.875 643.947)
   .from('#Path_15',{x:932 ,y:700,opacity:0},1.1) //translate(932 692)
   