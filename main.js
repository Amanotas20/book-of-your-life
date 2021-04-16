//Array declarations
const adjectiveArray = ['The true', 'The greatest', 'The horrible', 'The joyful',
                      'The famous', 'The exciting', 'The miserable', 'The glorious',
                      'The beautiful', 'The sad', 'The bloody', 'The boring'];
const actionArray = ['battle', 'leyend', 'vendetta', 'existence', 'death', 'life', 'quest'];
const characterArray = ['of a Bipolar', 'of an Assasin', 'of a Dreamer', 'of a Warrior',
                        'of an Adventurer', 'of a Sex Symbol', 'of an Addict', 'of an Alcoholic'];

const randomIndexGenerator = (array) => {
    const arrayLength = array.length;
    const randomIndex = Math.floor(Math.random()*arrayLength);

    return array[randomIndex];
};

function randomBookNameGenerator(){
    const adjective = randomIndexGenerator(adjectiveArray);
    const action = randomIndexGenerator(actionArray);
    const character = randomIndexGenerator(characterArray);
    // let name = document.getElementById('a').value;

    // if (name){
    //     return window.alert(`${name}: ${adjective} ${action} ${character}.`)
    // }
    return window.alert(`${adjective} ${action} ${character}.`)
}

