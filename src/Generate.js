import {startSyllables, middleSyllables, endSyllables} from "./Constants";

export function GenerateName() {
    let name = "";
    name += startSyllables[getRandom(startSyllables.length - 1)]
    for (let i=0; i<getRandom(5); i++) {
        name += middleSyllables[getRandom(middleSyllables.length - 1)];
    }
    name += endSyllables[getRandom(endSyllables.length - 1)];
    return name;
}

function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
