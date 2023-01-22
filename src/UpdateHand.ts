import { cardPicker } from "./Stack";

export const updateHand = (stack, hand,name, wasRemoval) => {
    let index = hand.findIndex((c) => c.name == name);
    if (index == -1 && !wasRemoval) {
      index = hand.findIndex(
        (c) => c.name == "JSpades" || c.name == "JClubs"
      );
    } else if (index == -1 && wasRemoval) {
      index = hand.findIndex(
        (c) => c.name == "JHearts" || c.name == "JDiamonds"
      );
    }
    let [newStack, card] = cardPicker(stack);
 hand.splice(index, 1, card);
 return [hand, newStack]
  };