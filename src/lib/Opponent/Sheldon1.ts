const renameCorners = (boardSheldon) =>{
    return boardSheldon.map(c => {
    if (c.coin = "Corner") return "Gold"
    else return c
    })
}
const buildHorizontalArr = (boardSheldon) =>{
let horizontalArr = [];
let pusherArr = []

for (let i = 0; i < 10; i++) {
  pusherArr = [];
  for (let j = i * 10; j < i * 10 + 10; j++) {
    pusherArr.push(boardSheldon[j]);
  }
  horizontalArr.push(pusherArr);
}
return horizontalArr

}
const findSequences =(horizontalArr) => {
    let sequenceArr = []

for (let i=0 ; i<10; i++){
    let tempArr = []
for (let j=0 ; j<10; j++)
if  (horizontalArr[i][j].coin == "Gold") {
    let card = {name: horizontalArr[i][j].name,
                vertical:i,
                horizontal: j}
    tempArr.push(horizontalArr[j])
}
else if (tempArr.length > 0){
     sequenceArr.push(tempArr)
     tempArr = []
}
}
}

export const runSheldon = async(getBoard, getHandSheldon) => {
await new Promise(resolve => setTimeout(resolve, 1000))
let boardSheldon = [...getBoard]
boardSheldon = renameCorners(boardSheldon) 
let horizontalArr = buildHorizontalArr(boardSheldon)





return getBoard.findIndex(c => (c.name == card.name))}

