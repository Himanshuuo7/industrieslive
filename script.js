var tl = gsap.timeline();

tl.from("#nav",{
    y:-300,
    opacity:0,
    duration:1,
})
tl.from("#hero h1",{
    y:100,
    opacity:0,
    duration:0.5
},'a')
tl.from("#hero p",{
    y:100,
    opacity:0,
    duration:0.5
})
tl.from("#hero .btn",{
    y:100,
    opacity:0,
    duration:0.5
})
tl.from("video",{
    y:100,
    opacity:0,
    duration:0.5
},'a')