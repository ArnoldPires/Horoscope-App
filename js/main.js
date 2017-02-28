function signs() {
var start = 1901, birthyear = document.zodiac.year.value, date=document.zodiac.date.value, month=document.zodiac.month.selectedIndex;

with (document.zodiac.sign){

if (month == 1 && date >=20 || month == 2 && date <=18) {value = "Aquarius";}
if (month == 1 && date > 31) {value = "Invalid Date";}
if (month == 2 && date >=19 || month == 3 && date <=20) {value = "Pisces";}
if (month == 2 && date > 29) {value = "Invalid Date";}
if (month == 3 && date >=21 || month == 4 && date <=19) {value = "Aries";}
if (month == 3 && date > 31) {value = "Invalid Date";}
if (month == 4 && date >=20 || month == 5 && date <=20) {value = "Taurus";}
if (month == 4 && date > 30) {value = "Invalid Date";}
if (month == 5 && date >=21 || month == 6 && date <=21) {value = "Gemini";}
if (month == 5 && date > 31) {value = "Invalid Date";}
if (month == 6 && date >=22 || month == 7 && date <=22) {value = "Cancer";}
if (month == 6 && date > 30) {value = "Invalid Date";}
if (month == 7 && date >=23 || month == 8 && date <=22) {value = "Leo";}
if (month == 7 && date > 31) {value = "Invalid Date";}
if (month == 8 && date >=23 || month == 9 && date <=22) {value = "Virgo";}
if (month == 8 && date > 31) {value = "Invalid Date";}
if (month == 9 && date >=23 || month == 10 && date <=22) {value = "Libra";}
if (month == 9 && date > 30) {value = "Invalid Date";}
if (month == 10 && date >=23 || month == 11 && date <=21) {value = "Scorpio";}
if (month == 10 && date > 31) {value = "Invalid Date";}
if (month == 11 && date >=22 || month == 12 && date <=21) {value = "Sagittarius";}
if (month == 11 && date > 30) {value = "Invalid Date";}
if (month == 12 && date >=22 || month == 1 && date <=19) {value = "Capricorn";}
if (month == 12 && date > 31) {value = "Invalid Date";}
}
x = (start - birthyear) % 12
with (document.zodiac.csign){
if (x == 1 || x == -11) {value = "Rat";}
if (x == 0) {value = "Ox";}
if (x == 11 || x == -1) {value = "Tiger";}
if (x == 10 || x == -2) {value = "Rabbit";}
if (x == 9 || x == -3)  {value = "Dragon";}
if (x == 8 || x == -4)  {value ="Snake";}
if (x == 7 || x == -5)  {value = "Horse";}
if (x == 6 || x == -6)  {value = "Sheep";}
if (x == 5 || x == -7)  {value = "Monkey";}
if (x == 4 || x == -8)  {value = "Rooster";}
if (x == 3 || x == -9)  {value = "Dog";}
if (x == 2 || x == -10)  {value = "Boar";}

}
}





// var numsArray = [];
// var total = 0;
//
// function beautiful(multiple1,multiple2,upwardBound){
//   	for(var n=0;n<=upwardBound;n++){
// 		if (n % multiple1 === 0 || n % multiple2 === 0){
// 			numsArray.push(n);
//   	}
// 	}
//   sum(numsArray);
// }
//
// 	function sum(multiArr){
// 		multiArr.forEach(function(a){
//       total += a;
//     });
//    console.log(total);
//   }
//
// beautiful(3,5,1000);
