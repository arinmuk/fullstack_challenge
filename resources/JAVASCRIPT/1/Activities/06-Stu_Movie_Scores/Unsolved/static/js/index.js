// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];
sum=0
for (i=0;i<movieScores.length;i++){
  sum += movieScores[i]
  if (movieScores[i] >7) {
    goodMovieScores.push(movieScores[i]);}
  else if (movieScores[i] >5 && movieScores[i] <=7) {
    okMovieScores.push(movieScores[i]);
 }  
  else {
    badMovieScores.push(movieScores[i])
  }  



}
var average = sum/movieScores.length;
console.log(`good movie count ${goodMovieScores.length}`);
console.log(`ok movie count ${okMovieScores.length}`);
console.log(`bad movie count ${badMovieScores.length}`);
console.log(`average ratings ${average}`);