// 3D scroll

let zSpacing = -1000,
    lastPos = zPacing /5,
    $frames = document.getElementsByClassName('frame'),
    frame = Array.from($frames),
    zVal =[]


window.onscroll = function(){

    let top = document.documentElement.scrollTop,
        delta = lastPos - top

    lastPos = top

    

    frames.forEach( function(n,i){
        zVals.push((i * zSpacing) + zSpacing)
        zVals[i] += delta * -5 // швидкість пролистування
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`
        frame.setAttribute('style', `transform: ${transform}`)
    })
}