let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];




//(STEP 1) ---> Splitting the story string to create an array of separate words (splitting parameter = space)

const storyWords = story.split(' ');

  //console.log(storyWords);
  //console.log(storyWords.length);


//(STEP 2) ---> Creating a new array without the unnecessaryWords

const betterWords = storyWords.filter(word => {
  if(!unnecessaryWords.includes(word)) {
    return true;
  } else {
    return false;
  }
});

  //console.log(betterWords);


//(STEP 3) ---> Count of EACH of the overusedWords included in the betterWords array

  //1st- Setting the variables 
  let countReally = 0;
  let countVery = 0;
  let countBasically = 0;

  //2nd- Comparing each word of the betterWords array with the overusedWords and +1 on the     correspondent overused word (NEEDS IMPROVEMENT, OBJECT??, SEE STEP 6)
  const countOverusedWords = betterWords.forEach(word => {

    if(word === overusedWords[0]) {
      countReally++;
    } else if (word === overusedWords[1]) {
      countVery++;
    } else if (word === overusedWords[2]) {
      countBasically++;
    }
  });
  
  //console.log(`Really: ${countReally}, Very: ${countVery}, Basically: ${countBasically}`);


//(STEP 4) ---> Counting the sentences in the story (finding . or ! signs)

let sentenceCounter = 0;

const countSentences = betterWords.forEach(word => {
  if(word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentenceCounter++;
  }
});

  //console.log(`The story paragraph contains ${sentenceCounter} sentences.`);
  //console.log(`This text contains ${storyWords.length} words, ${sentenceCounter} sentences and it repeats the word 'really' ${countReally} times, the word 'very' ${countVery} times and the word 'basically' ${countBasically} time.`);


//(STEP 5) ---> Joining again the betterWords array (parameter = space)

const joiningFinalText = betterWords.join(' ');

  //console.log(joiningBetterWords);


//(STEP 6) ---> Creating an array deleting EVERY OTHER word of EACH of the overusedWords

  //1st- Creating an object to keep track of the count of Each of the overusedWords
  let overusedWordsCount = {};

  //2nd- Setting a variable which creates a (object)property for each of the overusedWords and sets the count equal to 0
  overusedWords.forEach(overusedWord => {
    overusedWordsCount[overusedWord] = 0;
  });

  //3rd- Filtering the betterWords array to get the final desired words (deleting every other from each of the overusedWords)
  const arrayWithRemovedWords = betterWords.filter(word => {
    if(!overusedWords.includes(word)) {
      return true;
    } else {
      overusedWordsCount[word]++;
      if(overusedWordsCount[word] % 2 != 0) {
        return true;
      } else {
        return false;
      }
    }
  });
  
  //console.log(arrayWithRemovedWords);
  //console.log(overusedWordsCount);


//(STEP 7) ---> Converting the previous array to a string

const arrayWithRemoveWordsToString = arrayWithRemovedWords.join(' ');

  //console.log(arrayWithRemoveWordsToString);


//(STEP 8) ---> Finding the word that appears the greatest number of times and keeping track of the count

const findMostFrequent = betterWords => {
  let loopCount = {};
  let totalCount = 0;
  let mostRepeatedWord;

  for (let word of betterWords) {
    word = word.toLowerCase().replace('"', '');
    loopCount[word] = (loopCount[word] || 0) + 1;
    if(loopCount[word] > totalCount) {
      totalCount = loopCount[word];
      mostRepeatedWord = word;
    }
  }
  return `The most repeated word in the array is '${mostRepeatedWord}' and it appears ${totalCount} times.`
};

  //console.log(findMostFrequent(arrayWithRemovedWords));


//(STEP 9) ---> Replacing the overusedWords for something else (user's choice)

  //1st- Using .map() on the betterWords array to iterate through each word of the array and apply the action desired when the condition is met
  const replaceOverusedWords = betterWords.map(word => {

  //3rd- Condition to meet and values to return
      if(overusedWords.includes(word)) {
        return 'replacement-word';
      } else {
        return word;
      }
  });

  //console.log(replaceOverusedWords);
