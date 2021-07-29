 /* Usa el $ cuando hace referencia a elementos html */
/* Si son variables dentro del script de js, no usa $ */
const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)

function handlePlay(){
    $video.play() /* Funciona como un switch */
    $play.hidden = true
    $pause.hidden = false
    console.log('Play')
}
function handlePause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('Pause')
}

$backward.addEventListener('click',handleBackward)
$forward.addEventListener('click',handleForward)

function handleBackward(){
    $video.currentTime -= 10
    console.log("para atrás 10s")
}
function handleForward(){
    $video.currentTime += 10
    console.log("para adelante 10s")
}

const $progress = document.querySelector('#progress')

$video.addEventListener('loadedmetadata',handleLoaded)
$video.addEventListener('timeupdate',handletimeupdate)

function handleLoaded(){
    $progress.max = $video.duration
    console.log('ha cargado mi video', $progress.max)
}
function handletimeupdate(){
    $progress.value = $video.currentTime
    // console.log('tiempo actual',$video.currentTime)
}
$progress.addEventListener('input',handleInput)

function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}