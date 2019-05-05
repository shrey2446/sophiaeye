function randomFromList(arr){
  var num = Math.random()*arr.length
  num = Math.floor(num)
  return arr[num]
}
var firstName = ["Trudi", "Idalia", "Jamie", "Rem", "Ned", "Bart", "Darleen", "Mina", "Susan", "Hellen", "Arlen", "Alida", "Haley", "Moriah", "Chanell", "Antonette", "Rafael", "Casandra", "Lanette", "Stephine", "Danita", "Robin", "Russell", "Anderson", "Loria", "Marie", "Divina", "Kiersten", "Mica", "June", "Lindy", "Joni", "Melisa", "Ronda", "Eli", "Shonta", "Joy", "Michiko", "Titus", "Luanna", "Beatrice", "Stanley", "Mellisa", "Randal"]
var person = document.getElementById('person')
person.style.color = "black"
person.textContent = randomFromList(firstName)

var lastName = ["Li", "Berners", "Wang", "Anderson", "Gates", "Zeni", "Minhaj", "Jung", "van Dyke", "Cross", "Den", "Green", "Hammond", "Ittens", "Jackson", "King", "Long", "Hope", "Mendoza", "Nelson", "Olsen", "Peters", "River", "Kang", "Frana", "Gustavson", "Scherr", "Lu", "Jain", "Dolan"]
var personLast = document.getElementById('personLast')
personLast.style.color = "black"
personLast.textContent = randomFromList(lastName)

var age = ["21", "22", "23", "24", "25", "26", "27", "37", "38", "33", "34", "42", "19", "17", "44", "30", "70", "65", "83", "57"]
var personAge = document.getElementById('personAge')
personAge.style.color = "black"
personAge.textContent = randomFromList(age)
