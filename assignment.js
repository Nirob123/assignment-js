/**feetToMile convert */
function feetToMile(feet) {
    var mile= feet / 5280;
    return mile;
  }
var result=feetToMile(5280);
console.log(result);
  
// woodCalculator
function woodCalculator(chair, table, bed){
    var chair = chair * 1;
    var table = table * 2;
    var bed   = bed * 3;

    var totalWood = chair + table +bed;
    return totalWood;
}
var totalWoodNeeded = woodCalculator(12, 7, 12);

console.log(totalWoodNeeded);

// brickCalculator....Here num=tala
function brickCalculator(num){
    for(var i=0; i<=num; i++){
            if(num>20){
                brick=i*10000
            } 
            
            if (num<21){
                brick=i*12000
            }
            
            if(num<11 ){
                brick=i*15000   
                }
   
    }
    return brick;
}
var brick=brickCalculator(4);
console.log(brick);

// tinyFriend

function tinyFriend(friends) {
    var tiny = friends[0];

    for (var i = 0; i < friends.length; i++) {
        var length = friends[i].length;  
        
        if(length < tiny.length) {
            tiny = friends[i];
        }
    }
    return tiny;
}
var whoIsTiny = tinyFriend(['Nirob', 'Nahid', 'Rohim', 'jon', 'Korim']);
console.log("Your tiny friend is:", whoIsTiny);