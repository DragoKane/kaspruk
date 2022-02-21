// let btn = document.querySelector('.start')
// let number = document.querySelector('.number')


// const clock = () =>{
// let tick = 0
//     setInterval(() => {
//         tick++
//         number.textContent = tick
//     }, 1000);
//     btn.removeEventListener('click', clock)
// }

// btn.addEventListener('click', clock)


// let btn = document.querySelector('.start')
// let number = document.querySelector('.number')

// const clock = () =>{
//     let tick = 20
//         setInterval(() => {
//             if (tick>0) {
//                 tick--
//             number.textContent = tick
//             }
//         }, 500);
//         btn.removeEventListener('click', clock)
//     }
    
//     btn.addEventListener('click', clock)
    

// const popbtn = document.querySelector('.popbtn')
// const popit = document.querySelector('.popit')

// popbtn.addEventListener('click', ()=>{
// setTimeout(() => {
//     popit.classList.add(`show_popit`)
//     setTimeout(() => {
//         popit.classList.remove(`show_popit`)
//     }, 5000);
// }, 1500);
// })


// const btn = document.querySelector('.btn_start')
// const date = document.querySelector('.date')

// btn.addEventListener('click', () =>{
//     setInterval(() => {
//      let today = new Date()
//     let date1 = today.getDate()
//     let month = today.getMonth()+1
//     let year = today.getFullYear()
//     let hour = today.getHours()
//     let min = today.getMinutes()
//     let sec = today.getSeconds()
//     let nomer = `${date1}|${month}|${year}  ${hour}:${min}:${sec}`
//     date.textContent = nomer   
//     }, 0);
    
// })


const imgbtn = document.querySelector('.imgbtn')
const img1 = document.querySelector('.aternos1')
const img2 = document.querySelector('.aternos2')
const img3 = document.querySelector('.aternos3')


imgbtn.addEventListener('click', slider)

// function slider() {
//     let num = 1
//     setInterval(() => {
//         if (num==undefined || num==4) {
//             num = 1
//         } else{
//             img1.src = `${num}.jpg`
//             num++
//         }
//     }, 1000);
// }


function slider() {
    setInterval(() => {
        const img1 = document.querySelector('.aternos1')
const img2 = document.querySelector('.aternos2')
const img3 = document.querySelector('.aternos3')
        let num = img1
        img1.src= img2
        img2.src= img3
        img3.src= num
    }, 1000);
}






