let dragItem = null
const boardZone = document.querySelector('.board_zone')
const createBoardBtn = document.querySelector('.createBoard')
const createCardBtn = document.querySelector('.create_card')
const cardZone = document.querySelector('.card_zone')
let boardArr

!localStorage.boardArr ? boardArr = [] : boardArr = JSON.parse(localStorage.getItem('boardArr'))

// const addLocal = () =>{
//     localStorage.setItem('boardArr', JSON.stringify(boardArr))
// }

// function boardAdd(){
//     this.name = 'new desk'
// } 

createBoardBtn.addEventListener('click', () =>{
    boardZone.innerHTML += createBoard()
    // boardArr.push(new boardAdd())
    // fillBoard()
    dragNDrop()
    // addLocal()
})

createCardBtn.addEventListener('click', () =>{
    cardZone.innerHTML += createCard()

})

const createCard = () => {
    return `
    <div class="card" draggable="true">
            <h2 class="card-title">name3</h2>
            <p class="card-text">text</p>
        </div>  `
}

// const fillBoard = () =>{
// boardZone.innerHTML = ''
// if(boardArr.length > 0){
//     boardArr.forEach(item => {
//         boardArr.innerHTML += createBoard(item)
//     });
// }
// }



const createBoard = () => {
    return `
    <section class="board">
    <h2 class="board_title"> Название доски</h2>
    <button class="create_card">Create card</button>
    <div class="card_zone">
    </div>
    </section> `
}


const dragNDrop = () =>{
    const card = document.querySelectorAll('.card')
    const board = document.querySelectorAll('.card_zone')
    
    for (let index = 0; index < card.length; index++) {
        const item = card[index];

        item.addEventListener('dragstart', () =>{
            dragItem = item
            setTimeout(() => {
             item.style.display = 'none'   
            }, 0);
        })

        item.addEventListener('dragend',() =>{
                setTimeout(() => {
                    item.style.display = 'block'
                    dragItem = null
                }, 0);
        })

        for (let j = 0; j < board.length; j++) {
            const element = board [j];

            element.addEventListener('dragover', e => e.preventDefault())

            element.addEventListener('dragenter', function (e) {
                e.preventDefault()
                this.style.backgroundColor = 'rgba(0,0,0, .3)'
            })
            element.addEventListener('drop', function (e) {
                this.style.backgroundColor = 'rgba(255,255,255,0)'
                this.append(dragItem)
            })
        }
    }
}

dragNDrop()









