//ex 1: max and min
const array = [1, 2, 3, 3, 7, 7, 8]
let max = array[0]
let min = array[0]
for (let i=0; i < array.length; i++){
    if (max < array[i]){
        max = array[i]
    } else if (min > array[i]){
        min = array[i]
    }
}

console.log("max: ", max)
console.log("min: ", min)

//ex 2: count dups
let no_dups = new Set()
for (let i=0; i < array.length; i++){
    no_dups.add(array[i])
}

console.log("Array with no dups ", no_dups)
console.log("Num dups", array.length - no_dups.size)

//ex 3: return dups
let dups = new Set()
let new_no_dups = new Set()
for (let i=0; i < array.length; i++){
    if (no_dups.has(array[i])){
        dups.add(array[i])
    }
}

console.log(dups)

const checkMiddleSeat = function(seat){
    //middle: B and E
    const s = seat.slice(-1)
    if(s === 'B' || s === 'C') console.log('Middle Seat')
    else console.log('Not middle seat')
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

const str = "200£"
console.log(str.replace('£','$'))
const str2 = "All passengers come to boarding door 23"
console.log(str2.replaceAll('door','gate'))

//Ex vogals
const str3 = "vogal"
const str4 = "str"
console.log(str4.includes('o','e','i','a','u'))

//Ex start with vogal
const str5 = "Abel"
console.log(str5.toLowerCase().startsWith('a','e','i','o','u'))

const name = "Jessica Lemos"
const [first, last] = name.split(' ')
console.log("user first name: ", first)
console.log("user last name: ", last)

const joinName = [first, last].join("%")
console.log(joinName)

const name2 = "jonas smith"
const [first2, last2] = name2.split(' ')
const joinName2 = [first2[0].toUpperCase() + first2.slice(1), last2[0].toUpperCase() + last2.slice(1)].join(' ')
console.log

//another away
const joinName22 = [first2.replace(first2[0],first2[0].toUpperCase()),
last2.replace(last2[0],last2[0].toUpperCase())].join(' ')
console.log(joinName22)


const gameEvents = new Map()
gameEvents.set(17, '⚽️ GOAL')
gameEvents.set(36, '🔁 Substitution')
gameEvents.set(47, '⚽️ GOAL')
gameEvents.set(61, '🔁 Substitution')
gameEvents.set(64, '🔸 Yellow card')
gameEvents.set(69, '🔴 Red card')
gameEvents.set(70, '🔁 Substitution')
gameEvents.set(72, '🔁 Substitution')
gameEvents.set(76, '⚽️ GOAL')
gameEvents.set(80, '⚽️ GOAL')
gameEvents.set(92, '🔸 Yellow card')

const give_events = function(game){
    const events_no_dups = new Set()
    for(const i of game.values()){
        events_no_dups.add(i)
    }
    return events_no_dups
}
console.log(give_events(gameEvents))
console.log(new Set(gameEvents.values()))

gameEvents.delete(64)
console.log(gameEvents)

console.log(`An event happened, on average, every ${90/gameEvents.size}`)


//FISRT version
/*for (const i of gameEvents){
    if (i[0] < 45){
        console.log(`[FIRST HALF] ${i[0]}: ${i[1]}`)
    } else {
        console.log(`[SECOND HALF] ${i[0]}: ${i[1]}`)
    }
}*/

//SECOND version
/*for (const [key, value] of gameEvents){
    if (key < 45){
        console.log(`[FIRST HALF] ${key}: ${value}`)
    } else {
        console.log(`[SECOND HALF] ${key}: ${value}`)
    }
}*/

for (const [key, value] of gameEvents){
    const half = key <=45 ? 'FIRST' : 'SECOND'
    console.log(`[${half} HALF] ${key}: ${value}`)
}

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
            [
                'Neuer',
                'Pavard',
                'Martinez',
                'Alaba',
                'Davies',
                'Kimmich',
                'Goretzka',
                'Coman',
                'Muller',
                'Gnarby',
                'Lewandowski',
            ],
            [
                'Burki',
                'Schulz',
                'Hummels',
                'Akanji',
                'Hakimi',
                'Weigl',
                'Witsel',
                'Hazard',
                'Brandt',
                'Sancho',
                'Gotze',
            ],
        ],  
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//Fisrt version
console.log(game.scored.entries())
/*let goal = 1;
for (const i of game.scored){
    console.log(`Goal ${goal}: ${i}`)
    goal += 1
}
*/
for (const [goal, name] of game.scored.entries()){
    console.log(`Goal ${goal + 1}: ${name}`)
}

let sum = 0
for (const odd of Object.values(game.odds)){
    sum += odd
}
console.log(sum/ Object.values(game.odds).length)

for (const [team, odd] of Object.entries(game.odds)){
    let log_team = team === 'x' ? 'draw' : `victory ${game[team]}` 
    console.log(`Odd of ${log_team}: ${odd}`)
}

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
  
for(const flight of flights.split('+')){
    const [type, from, to, time] = flight.replaceAll('_',' ').split(';')
    console.log(`${type} ${from.slice(0,3).toUpperCase()} ${to.slice(0,3).toUpperCase()} (${time.replace(':','h')})`)
}

let arr = ['a','b','c','d','e']
//create a new arry
console.log(arr.slice(2))
console.log(arr.slice(2,4))
console.log(arr.slice(-2))
console.log(arr.slice())

//change the original array
console.log(arr.splice(-1))
console.log(arr.splice(1,2))

let arr2 = ['j','i','h','g','f']

arr2.reverse()
const conc = arr.concat(arr2)

console.log(conc)


















































