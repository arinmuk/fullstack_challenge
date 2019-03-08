var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];
monthlyAvgRainFall = [3.03, 2.48, 3.23, 3.15, 4.13, 3.23]
mileRunTimes = [5.06, 4.54, 5.56, 4.40, 7.10]

function scoremean(movieScore){
    var sum=0;
    for (i=0;i<movieScore.length;i++){
        sum+=movieScore[i]
    }
    return (sum/movieScore.length)
}

function variance(movieScore){
  var mn=scoremean(movieScore)
  var sum=0
  for(i=0;i<movieScore.length;i++){
    var s= (movieScore[i]-mn)**2
    sum+=s

  }
  avg=sum/movieScore.length

  return(avg)



}
function sdev(movieScore){
    var res=variance(movieScore)
    var result = Math.sqrt(res)
    return result
}

console.log("Movie Stats")
console.log("=================")
console.log(`Mean score is : ${scoremean(movieScore)}`)
console.log(`Variance is : ${variance(movieScore)}`)
console.log(`Sdev is : ${sdev(movieScore)}`)


console.log("Rainfall Stats")
console.log("=================")
console.log(`Mean score is : ${scoremean(monthlyAvgRainFall)}`)
console.log(`Variance is : ${variance(monthlyAvgRainFall)}`)
console.log(`Sdev is : ${sdev(monthlyAvgRainFall)}`)


console.log("mileRunTimes Stats")
console.log("=================")
console.log(`Mean score is : ${scoremean(mileRunTimes)}`)
console.log(`Variance is : ${variance(mileRunTimes)}`)
console.log(`Sdev is : ${sdev(mileRunTimes)}`)