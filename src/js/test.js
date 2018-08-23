let arrNames = ['Вася', 'Петя', 'Оля', 'Надя'];

const stringName = arrNames.join(' и ');
console.log(stringName);

const stringPens = `ручки, карандаши, тетрадки`;
const arrayPens = stringPens.split(', ');
console.log(arrayPens);

const removeName = arrNames.splice(-2,2);
console.log(removeName);
console.log(arrNames);

const arrName = {
  name: 'Вася',
  surname: 'Петров'
}

arrName.forEach(function(element){
  console.log(element);
});

const newName = 'petya';
arrNames.push(newName);
console.log(arrNames)
