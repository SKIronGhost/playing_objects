// ¿Cómo harías print/log de la edad de John?
// ¿Cómo harías print/log del nombre del primer objeto?
// ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
// ¿Cómo harías para imprimir el nombre de los mayores de edad?

var users = [
            {name: "Michael", age:37}, 
            {name: "John", age:30}, 
            {name: "David", age:27}];


console.log("John is",users[1].age,"years old")
console.log("The name of the first user is",users[0].name)

for(i=0;i<users.length;i++){
  console.log(users[i].name,"-",users[i].age)
}

for(i=0;i<users.length;i++){
  if(users[i].age>=30){
    console.log(users[i].name)
  }
  
}
