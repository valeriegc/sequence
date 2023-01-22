import buildDeck from "./lib/Card/Deck";

export const initializeStack = () => {
     let stack = buildDeck("stack")
     const hand = []
     const handSheldon =[]
     for (let i=0; i<10; i++){
        let [newStack, card] = cardPicker(stack)
        if (i%2==0)hand.push(card)
        else handSheldon.push(card)
        stack = newStack
     }
return [stack,hand,handSheldon]
}

export const cardPicker = (stack) => {
let maxValue = stack.length
let indexToRemove= Math.floor(Math.random()*maxValue)
console.log(stack.length)
let card = stack.splice(indexToRemove, 1)
console.log(stack.length)
return [stack, card[0]]
}

