import $ from 'jquery'
import './app3.css'
const $square = $('#app3 .square')

$square.on('click', ()=>{
    $square.toggleClass('active')//toggleClass如果没有就加上，如果有就删掉
})