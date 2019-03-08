// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 8) + 1);
var counter=0
var voterarr=[]
// Select the upvote and downvote buttons
var uv=d3.select(".upvote")
var dv=d3.select(".downvote")
var vr=d3.select(".Netvote")
// Select the counter h1 element
var ctr = d3.select(".counter")
// Use D3 `.on` to attach a click handler for the upvote
uv.on("click",function(){
console.log("up cliked")
  counter+=1
  d3.select(".counter").text(counter)
  eventarr=[]
  eventarr.push('Up')
  eventarr.push(counter)
  voterarr.push(eventarr)
  console.log(voterarr)
})
dv.on("click",function(){
  console.log("down cliked")
  counter-=1
  d3.select(".counter").text(counter)
  eventarr=[]
  eventarr.push('Down')
  eventarr.push(counter)
  voterarr.push(eventarr)
  console.log(voterarr)
})
vr.on("click",function(){
voterarr.forEach(element=>console.log(element))
})
// Use d3 `.on` to attach a click handler for the downvote
