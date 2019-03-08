line="I yam what I yam and always will be what I yam"
linearr=line.split(" ")
counter=0
wordcount={}
linearr.forEach(function(word){
    if(word in wordcount){
        wordcount[word]+=1
        
    }
    else {
        wordcount[word]=1
            }
    


})
console.log(wordcount)