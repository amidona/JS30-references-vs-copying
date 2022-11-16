// start with strings, numbers and booleans
    let age = 100;
    let age2 = age;
    console.log(age, age2); //you'll get 100 100
    age = 200;
    console.log(age, age2); //you'll get 200 100

    let name = "Wes";
    let name2 = name;
    console.log(name, name2);
    name = "wesley";
    console.log(name, name2);
    //takeaway: if you update the original one further down your code, you won't effect the second one
console.clear(0);

// Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// You might think we can just do something like this:
    const team = players;
    console.log(players, team);

// however what happens when we update that array?
    team[3] = "Lux";
    console.log(players, team);

// now here is the problem! The console logs:
    // players [ "Wes", "Sarah", "Ryan", "Lux" ]
    // team [ "Wes", "Sarah", "Ryan", "Lux" ]

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

//One way
    const team2 = Array.from(players)

// or splice it (if you pass slice nothing, it will take a copy of the whole array)
    const team3 = players.slice();

// or create a new array and concat the old one in
    const team4 = [].concat(players);

// or use the new ES6 Spread
    const team5 = [...players];

// now when we update it, the original one isn't changed

console.clear();

// The same thing goes for objects, let's say we have a person object

// with Objects
    const person = {
        name: 'Wes Bos',
        age: 80
    };

// and think we make a copy:
    //const captain = person;
    //captain.number = 99;
    //console.log(captain, person)
    //this has changed the original object (added number:99 to both)

// how do we take a copy instead?
    const cap2 = Object.assign({}, person, { number: 99 });
    console.log(cap2, person);

// We will hopefully soon see the object ...spread (seems to be working as of 11/2022)
    const cap3 = {...person};
    console.log(cap3, cap2, person)

// Things to note - this is only 1 level deep - both for Arrays and Objects.

const wes = {
    name: "Wes",
    age: 100,
    social: {
        twitter: "@wesbos",
        facebooks: "wesbos.developer"
    }
}
console.clear();
console.log(wes);

const dev = Object.assign({}, wes); 

//this will only work one level deep. I.e., you can change dev.name and it'll only change the dev object. However, if you change dev.social.twitter = "@coolman", that's going to update on both wes and dev. If you really truly need to clone an object that deep, there's a function called cloneDeep by lodash you can use, but think twice before using it and make sure you really need to.

// Poor man's deep clone (NOT RECOMMENDED)
const dev2 = JSON.parse(JSON.stringify(wes));
