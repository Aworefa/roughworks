let tobi ={
    age : 12,
    name :  'blvk',
    gender :  'male',
    familyPosition :  3,

}
tobi.birthday = function(date){
    return date+=1
}
tobi.birthday(tobi.age)

console.log(tobi)
