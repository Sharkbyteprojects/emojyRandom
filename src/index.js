import mojy from "./getEmoji";
import random from "./randomify";

const loaded_mojys=mojy();
export default function randomEmojy(){
    const lenof=loaded_mojys.length;
    return loaded_mojys[random(0,lenof)];
}