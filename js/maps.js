
//////////////////////////////level #1/////////////////////////////
var firstMapArray = new Array(19);


// Loop to create 2D array using 1D array
for (var i = 0; i < firstMapArray.length; i++) {
  firstMapArray[i] = new Array(60);
}
//randomly populate the 2d array 
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


// Loop to initilize 2D array elements.
for (var i = 0; i < 19; i++) {
  for (var j = 0; j < 60; j++) {
    //first row is walled
    firstMapArray[0][j] = 2
    //first col is walled
    firstMapArray[i][0] = 2;
    //initialize all by dirt
    firstMapArray[i][j] = 1;
    //last row is walled
    firstMapArray[18][j] = 2;
    //last col is walled
    firstMapArray[i][59] = 2;
  }
}
///blocks in innner map
for (var j = 0; j < 55; j++) {
  firstMapArray[7][j] = 2;
}

for (var j = 5; j < 60; j++) {
  firstMapArray[13][j] = 2;
}
///////////diamond positions
firstMapArray[3][30] = 4;
firstMapArray[4][55] = 4;

for (var j = 13; j < 16; j++) {
  firstMapArray[4][j] = 4;
}
for (var j = 13; j < 16; j++) {
  firstMapArray[3][j] = 4;
}
////--------------
for (var j = 10; j < 12; j++) {
  firstMapArray[9][j] = 4;
}
for (var j = 10; j < 12; j++) {
  firstMapArray[10][j] = 4;
}
for (var j = 40; j < 42; j++) {
  firstMapArray[8][j] = 4;
}
for (var j = 55; j < 57; j++) {
  firstMapArray[9][j] = 4;
}
firstMapArray[11][43] = 4;

//////------------

firstMapArray[16][58] = 4;
firstMapArray[14][1] = 4;
for (var j = 1; j < 3; j++) {
  firstMapArray[15][j] = 4;
}
for (var j = 29; j < 31; j++) {
  firstMapArray[15][j] = 4;
}
for (var j = 55; j < 57; j++) {
  firstMapArray[14][j] = 4;
}

//////////////////////////rocks////////////
for (var j = 33; j < 36; j++) {
  firstMapArray[4][j] = 3;
}
for (var j = 33; j < 36; j++) {
  firstMapArray[5][j] = 3;
}
for (var i = 2; i < 5; i++) {
  firstMapArray[i][1] = 3;
}
firstMapArray[3][32] = 3;
firstMapArray[2][55] = 3;

///-----------

for (var i = 17; i < 19; i++) {
  firstMapArray[8][i] = 3;
}
for (var i = 2; i < 4; i++) {
  firstMapArray[11][i] = 3;
}
for (var i = 9; i < 11; i++) {
  firstMapArray[i][31] = 3;
}
for (var i = 53; i < 55; i++) {
  firstMapArray[11][i] = 3;
}
for (var i = 40; i < 43; i++) {
  firstMapArray[11][i] = 3;
}
for (var i = 40; i < 43; i++) {
  firstMapArray[12][i] = 3;
}

//////---------
for (var i = 2; i < 4; i++) {
  firstMapArray[14][i] = 3;
}
for (var i = 25; i < 27; i++) {
  firstMapArray[14][i] = 3;
}

firstMapArray[15][3] = 3;

for (var j = 29; j < 31; j++) {
  firstMapArray[16][j] = 3;
}
for (var j = 55; j < 57; j++) {
  firstMapArray[15][j] = 3;
}
firstMapArray[15][58] = 3;
/////////////////////////////--------
//hero position
firstMapArray[2][2] = 5;
//door position
firstMapArray[16][56] = 6;



//for displaying the 2d array
/*for (var i = 0; i <19; i++) { 

var br = document.createElement("br");       
document.getElementById("parent").appendChild(br); 

  for (var j = 0; j < 60; j++) { 
    
    var elem = document.createElement("span");

    elem.className = mapArray [i][j]
    elem.innerText = mapArray [i][j]

 elem.style.border = "0.5px solid red"
 /* if (elem.classList == 2){
    elem.src = "block.jpg"
  }
  if(elem.classList == 1){
    elem.src = "sand.jpg"
  }
  if(elem.classList == 4){
    elem.src = "Diamond.png"
    elem.style.height = "7%"
  }
    document.getElementById("parent").appendChild(elem);     
} 
}*/
///////////////////////////////////level#2////////////////////////////////////


var secondMapArray = new Array(20);

// Loop to create 2D array using 1D array
for (var i = 0; i < secondMapArray.length; i++) {

  secondMapArray[i] = new Array(30);
}
for (var i = 0; i < 20; i++) {
  for (var j = 0; j < 30; j++) {
    //first row is walled
    secondMapArray[0][j] = 2
    //first col is walled
    secondMapArray[i][0] = 2;
    //initialize all by dirt
    secondMapArray[i][j] = 1;
    //last row is walled
    secondMapArray[19][j] = 2;
    //last col is walled
    secondMapArray[i][29] = 2;
  }
}
///blocks in innner map
for (var j = 0; j < 16; j++) {
  secondMapArray[j][9] = 2;
}

for (var j = 4; j < 19; j++) {
  secondMapArray[j][19] = 2;
}
//hero position
secondMapArray[2][2] = 5;
//door position
secondMapArray[16][25] = 6;
/////////////////////////////rocks positions//////////////////
/*
secondMapArray[1][2] = 3;
secondMapArray[2][1] = 3;
//col
for(var i = 2 ; i< 5;i++){
  secondMapArray[i][4] = 3;
}
secondMapArray[4][2] = 3;

for(var i = 1 ; i< 3;i++){
  secondMapArray[8][i] = 3;
}
for(var i = 4 ; i< 6;i++){
  secondMapArray[12][i] = 3;
}
secondMapArray[17][3] = 3;

for(var i = 14 ; i< 16;i++){
  secondMapArray[i][16] = 3;
}
for(var i = 17 ; i< 19;i++){
  secondMapArray[5][i] = 3;
}
for(var i = 17 ; i< 19;i++){
  secondMapArray[6][i] = 3;
}
for(var i = 9 ; i< 11;i++){
  secondMapArray[i][16] = 3;
}
secondMapArray[16][19] = 3;

*/



//y_positonsArrayRocks = [1, 3, 4, 4, 5, 5, 7, 7, 8, 8, 9, 10, 10, 10, 12, 13,17, 18, 18, 18,18,20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 23, 25, 25, 26, 27, 28, 28, 28, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 6, 6, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 17, 17, 18, 18, 18, 19, 20, 20, 21, 22, 22, 22, 22, 22, 23, 23, 24, 24, 26, 26, 27, 27, 27,27,27,27]
//x_positonsArrayRocks = [12, 14, 5, 18, 8, 9, 1, 2, 1, 2, 18, 3, 8, 9, 2, 14, 7, 7, 12, 13, 18, 8, 9, 15, 16, 17, 18, 15, 16, 17, 18, 11, 8, 9, 17, 3, 1, 17, 18, 2, 9, 1, 5, 9, 13, 18, 2, 3, 4, 13, 9, 10, 15, 16, 5, 6, 5, 6, 17, 1, 2, 1, 2, 3, 1, 3, 13, 7, 8, 13, 7, 8, 15, 11, 12, 16, 6, 5, 6, 5, 6, 17, 1, 7, 14, 14, 3, 14, 15, 16, 17, 3, 4, 8, 9, 3, 14, 1, 2, 4,14,15,16]



/////////////////////diamond positions

x_positonsArrayDiamond = [1, 3, 4, 4, 5, 5, 7, 7, 8, 8, 9, 10, 10, 10, 12, 13, 17, 18, 18, 18, 18, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 23, 25, 25, 26, 27, 28, 28, 28]
y_positonsArrayDiamond = [12, 14, 5, 18, 8, 9, 1, 2, 1, 2, 18, 3, 8, 9, 2, 14, 7, 7, 12, 13, 18, 8, 9, 15, 16, 17, 18, 15, 16, 17, 18, 11, 8, 9, 17, 3, 1, 17, 18]

for (var i = 0; i < x_positonsArrayDiamond.length; i++) {
  secondMapArray[y_positonsArrayDiamond[i]][x_positonsArrayDiamond[i]] = 4;
}


//secondMapArray[8][20] = 3;
//secondMapArray[9][20] = 3;

/*y_posDiamond = []
x_posDiamond = []
for(var i = 0;i<rockImages.length;i++){
y_posDiamond.push(rockImages[i].getAttribute("idi"))
x_posDiamond.push(rockImages[i].getAttribute("idj"))
}*/
x_posRock = [2, 9, 1, 5, 9, 13, 18, 2, 3, 4, 13, 9, 10, 15, 16, 5, 6, 5, 6, 17, 1, 2, 1, 2, 3, 1, 3, 13, 7, 8, 13, 7, 8, 15, 11, 12, 16, 6, 5, 6, 5, 6, 17, 1, 7, 14, 14, 3, 14, 15, 16, 17, 3, 4, 8, 9, 3, 14, 1, 2, 4, 14, 15, 16]

y_posRock = [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 6, 6, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 17, 17, 18, 18, 18, 19, 20, 20, 21, 22, 22, 22, 22, 22, 23, 23, 24, 24, 26, 26, 27, 27, 27, 27, 27, 27]

for (var i = 0; i < x_posRock.length; i++) {
  secondMapArray[x_posRock[i]][y_posRock[i]] = 3
}



var thirdMapArray = new Array(20);


// Loop to create 2D array using 1D array
for (var i = 0; i < thirdMapArray.length; i++) {
  thirdMapArray[i] = new Array(30);
}
for (var i = 0; i < 20; i++) {
  for (var j = 0; j < 30; j++) {

    //first row is walled
    thirdMapArray[0][j] = 2
    //first col is walled
    thirdMapArray[i][0] = 2;
    //initialize all by dirt
    thirdMapArray[i][j] = 1;
    //last row is walled
    thirdMapArray[19][j] = 2;
    //last col is walled
    thirdMapArray[i][29] = 2;
  }
}

yPosSand = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 13, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28]
xPosSand = [2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17, 1, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 1, 2, 6, 7, 8, 12, 14, 15, 16, 17, 18, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 6, 7, 8, 12, 13, 14, 15, 16, 17, 3, 4, 5, 6, 7, 8, 12, 13, 14, 15, 16, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 3, 11, 12, 12, 1, 2, 4, 5, 6, 7, 11, 12, 4, 7, 11, 13, 14, 15, 16, 17, 18, 2, 4, 5, 6, 7, 12, 13, 14, 15, 16, 17, 18, 4, 5, 6, 7, 8, 17, 18, 5, 6, 7, 8, 10, 11, 14, 15, 18, 4, 5, 6, 7, 8, 10, 11, 12, 13, 16, 17, 18, 7, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 2, 3, 4, 5, 6, 7, 8, 12, 13, 14, 15, 16, 17, 18, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 2, 3, 4, 10, 11, 12, 13, 14, 18, 1, 2, 3, 12, 13, 14, 18, 1, 2, 3, 12, 13, 14, 18, 1, 2, 3, 12, 13, 14, 15, 16, 17, 18]   //
/*  for ( var i = 0; i < yPosSand.length; i++ ){
   thirdMapArray[yPosSand[i]] [xPosSand[i]] = 1;
 }*/


x_posDiamond = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 11, 11, 11, 12, 12, 12, 13, 13, 13, 15, 15, 15, 18, 19, 19, 21, 21, 21, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28]
y_posDiamond = [1, 17, 17, 4, 5, 13, 5, 11, 1, 1, 14, 15, 16, 14, 15, 16, 14, 15, 16, 3, 6, 12, 9, 3, 9, 3, 4, 5, 5, 6, 7, 8, 9, 15, 16, 17, 5, 6, 7, 8, 9, 15, 17, 5, 6, 7, 8, 9, 15, 16, 17, 5, 6, 7, 8, 9]
//
for (var i = 0; i < y_posDiamond.length; i++) {

  thirdMapArray[y_posDiamond[i]][x_posDiamond[i]] = 4;

}
var x_posRock = [];
var y_posRock = [];
//  positions of rocks
y_posRock = [6, 7, 8, 18, 6, 7, 8, 18, 13, 14, 15, 16, 18, 3, 10, 11, 4, 10, 18, 2, 10, 11, 17, 18, 2, 10, 11, 12, 18, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 3, 8, 9, 2, 5, 8, 9, 3, 8, 9, 11, 9, 12, 13, 16, 17, 2, 14, 15, 2, 9, 10, 11, 4, 4, 4]
x_posRock = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 11, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 18, 18, 18, 18, 19, 19, 19, 21, 22, 22, 22, 26, 27, 28]

//populate mapArray with rocks
for (var i = 0; i < x_posRock.length; i++) {

  thirdMapArray[y_posRock[i]][x_posRock[i]] = 3;
}


///
xPosBlock = [1, 2, 3, 4, 6, 6, 6, 6, 6, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 15, 15, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 26, 26, 27, 27, 28, 28]
yPosBlock = [9, 9, 9, 9, 1, 2, 3, 4, 5, 9, 9, 9, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 17, 18, 13, 17, 18, 1, 2, 4, 5, 6, 7, 8, 9, 10, 13, 17, 18, 10, 13, 17, 18, 10, 13, 14, 15, 16, 17, 18, 1, 10, 1, 10, 1, 2, 3, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 1, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 10, 11, 10, 11, 10, 11]
//
for (var i = 0; i < yPosBlock.length; i++) {

  thirdMapArray[yPosBlock[i]][xPosBlock[i]] = 2;

}

//hero position
thirdMapArray[2][2] = 5;

//door position
thirdMapArray[16][26] = 6;




//for displaying the 2d array

// for (var i = 0; i <20; i++) { 

//   var br = document.createElement("br");       
// document.getElementById("parent").appendChild(br); 

//     for (var j = 0; j < 30; j++) { 

//       var elem = document.createElement("span");

//       elem.className = secondMapArray [i][j]
//       elem.innerText = secondMapArray [i][j]

//    elem.style.border = "0.5px solid red"
//    /* if (elem.classList == 2){
//       elem.src = "block.jpg"
//     }
//     if(elem.classList == 1){
//       elem.src = "sand.jpg"
//     }
//     if(elem.classList == 4){
//       elem.src = "Diamond.png"
//       elem.style.height = "7%"
//     }*/
//       document.getElementById("parent").appendChild(elem);     
//   } 
// }


const Conv = {
  5: 2,
  1: 1,
  0: 0,
  20: 11,
  19: 12,
  13: 5,
  14: 6,
  3: 4,
  4: 2,
  2: 3,
  26: 4,
  32: 0
};



var fourthMapArray = new Array(30).fill(0).map(() => new Array(50).fill(0));
var request = new XMLHttpRequest();
let ind = 0;
var text2 = "0505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050D0101020101040201012002010401200101200104010302012001040101010120020401020201010104010202010101050501010101010104010301010101040220010102010420010101020113200101010201042001022001011320010101200105050101020120010420010101030104020102010101040101012001010401010301010104200101012001042001010101020505010102010101040101010301010401010201200104010102010120040202011A010104010101010101040101030102010505010201010102040102010101010401020201202004202003010120040120200101010401010201200104010120200101050501012001020104020101200101132001010101010401200120010104040404041404040120010102010402010101011A0505200120012001040101010101010401010102010104020101202002040102012020010401010101010204010101020102050501010201010104012001022020040102010120010404040404140404010101020202040201012020010404140404040405050101010101010404140404040404010101010101040101022001010420010201020104010102010101040120200101020505010201010120040101010101010401012001010104012001010101040101010101010401202001012004020101010101050501010101202004010101030102041A0101010103040101010101200401010101010204041404040404040101010201010505010101010102040120011A010104010101010101040102011A01010401020102200104010101020201040103010101010505012002010101040101010101200420010101010204012020010102040101010101010401010120010104020101012001050501010101012004010101010101040101030201020401010101010104020101010101040120010101010401200101020205050201012001010420010102011A0404040404140404020101012020040101020102010401010101012004200101010101050502010120020104010101010101040101010120010401202001010104012002010102040201010102010404041404040405050404140404040402202001010104012001010101040414040404040404140404040404010120010101040101200202010505010120010101040201020101010402020101020104012001010102040120200102010401010101010104200120012001050501010101030104010101012001040101010101200401012020020104020101010101040102010120010401012001010105052001010101020404040404140404200101010120040201010101010401020102020104010101022001040201010101020505010101010101040202010101010401010101020104010101010101040101010101010404040404140404010101012001050501020101200104010101010101040120012001010401030103200104012001010101040101020101010401020101020105050101010101010401200101010204012001010101040101020120010401010201200104010101200101040404140404040505011A010101010401010101010104010101010101040404040414040402010120010113200101200101040101200101020505010101012001040101010101010402011A030101040201010101010401020101010204010101010201040201012020010505010101020101040101020103010401010101010204010120200101040103010101010402010201010204010101010102050502010101010113200101010101040101030101011320010201010204010101010201040101011A0120040103010120010505012020010201040101012001020420010202010104010101012002040101012001010402202001020104200101200E01050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505";
for (var i = 0; i < text2.length; i += 2) {
  let num = `${text2[i]}${text2[i + 1]}`;
  num = parseInt(`0x${num}`);
  if (!Conv.hasOwnProperty(num)) {
    console.log(num);
  }
  fourthMapArray[Math.floor(ind / 50)][ind % 50] = Conv[num];
  ind++;
}


var mymap = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 3, 3, 4, 3, 1, 3, 3, 4, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 0, 3, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 4, 1, 1, 1, 1, 2],
  [2, 1, 1, 5, 0, 1, 0, 0, 1, 0, 0, 0, 4, 1, 1, 1, 1, 1, 2],
  [2, 1, 4, 3, 1, 1, 3, 4, 1, 0, 3, 4, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 3, 3, 4, 4, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 3, 3, 1, 1, 4, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 0, 1, 1, 1, 1, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

var mymap2 = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 13, 1, 2, 3, 3, 4, 3, 1, 3, 3, 4, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 12, 13, 3, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 5, 1, 1, 1, 1, 12, 13, 1, 0, 0, 1, 0, 0, 0, 1, 4, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 0, 12, 0, 1, 0, 0, 1, 0, 0, 0, 4, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 4, 4, 4, 4, 12, 3, 1, 3, 4, 1, 0, 3, 4, 1, 1, 1, 1, 1, 1, 2],
  [2, 11, 11, 11, 11, 11, 11, 2, 4, 4, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 3, 13, 13, 4, 4, 3, 1, 1, 4, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 13, 3, 3, 3, 1, 1, 1, 1, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 3, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];