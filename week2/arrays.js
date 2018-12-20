let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals[3] = "turtle";

console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, 'meerkat')
console.log('The new value of the array will be 5 elements with the \nelement: \'meerkat\' on index 1.')

console.log(favoriteAnimals);

console.log(`The array has a length of: ${favoriteAnimals.length}`);

favoriteAnimals.splice(3,1);

console.log(favoriteAnimals);

console.log(favoriteAnimals.indexOf('meerkat'));

console.log(`The item you are looking for is at index: ${favoriteAnimals.indexOf('meerkat')}`);