const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')
const $progress = document.querySelector('#progress')


$play.addEventListener('click',function handlePlay(){
    $video.play()
    $play.hidden=true
    $pause.hidden=false
    
})

$pause.addEventListener('click', function handlepause(){
    $video.pause()
    $play.hidden=false
    $pause.hidden=true
})

$backward.addEventListener('click',function handlebackward(){
    $video.currentTime=$video.currentTime-10
} )

$forward.addEventListener('click',function handleforward(){
    $video.currentTime=$video.currentTime+10
} )

$video.addEventListener('loadedmetadata',function handleLoaded(){
    $progress.max=$video.duration
})

$video.addEventListener('timeupdate',function handleTimrUpdate(){
    $progress.value=$video.currentTime
})

$progress.addEventListener('input',function handleinput(){
    $video.currentTime=$progress.value
})