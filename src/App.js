import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)

    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })
      console.log("vowelsArray:", vowelsArray)

      // your code here!
//CONSANTS PIG-LATIN:

      //create a function with an input of myPigLatinCodeHere
      //break down words into individual letters inside of an array (split) --that is also inside the main array. -- MAYBE???
      //determine where FIRST vowel exists with includes?
      //use splice to remove and store consonants (in new variable) before vowel
          //input splice would be the first vowel index
      //move consonant(s) to end of word that were before first vowel.
      //add "ay" after consonants using .push or spread operator (...)

      //when indexValue comes back as -1 -- run sometimes y



      let firstVowel = vowelsArray[0]
      let addAy = ["a","y"]
      let addWay = "way"
      let findFirstVowelIndex = currentWord.toLowerCase().split("").findIndex(value => {
        return "aeiou".includes(value)})
      console.log("first vowel:", firstVowel)
      console.log("findFirstVowelIndex:", findFirstVowelIndex);


      // const punctuation = () => {
      //   currentWord.includes(".,?!"){
      //
      // }
      const punctuation = () => {
        let has_punc = false
        currentWord.split("").forEach(letter => {
          if("+_*&^%$#@~/><".includes(letter)){
            has_punc = true
          }
        })
        return has_punc
      }
      if(punctuation() === true){
          alert("Errorway! Atthay isway otnay away ingstray!");
      }else if(findFirstVowelIndex === 0) {
        //vowel first case
          console.log("Vowel concatted word:", currentWord.concat(addWay))
          currentWord = currentWord.concat(addWay);
      } else if(firstVowel === "u" && currentWord.split("")[0] === "q"){
        //qu first case
          let letterArray = currentWord.split("")
          let wordSplice = letterArray.splice(findFirstVowelIndex + 1, currentWord.length, )
          console.log("moved consonants:", wordSplice, letterArray);

          let letterConcat = wordSplice.concat(letterArray).concat(addAy).join("")
          currentWord = letterConcat;
          console.log("concatted word:", letterConcat);
          console.log("qu in pig latin:", );
      } else if(findFirstVowelIndex === -1) {
        //y first case
          console.log();
          let findYIndex = currentWord.split("").findIndex(value => {
            return "y".includes(value)})
          let letterArray = currentWord.split("")
          let wordSplice = letterArray.splice(findYIndex, currentWord.length, )
          console.log("moved consonants:", wordSplice, letterArray);

          let letterConcat = wordSplice.concat(letterArray).concat(addAy).join("")
          currentWord = letterConcat;
          console.log("concatted word:", letterConcat);
      } else{
      //Consonant first case
        let letterArray = currentWord.split("")
        let wordSplice = letterArray.splice(findFirstVowelIndex, currentWord.length, )
        console.log("moved consonants:", wordSplice, letterArray);

        let letterConcat = wordSplice.concat(letterArray).concat(addAy).join("")
        currentWord = letterConcat;
        console.log("concatted word:", letterConcat);
      }









//if value index is 0 -- concat "way" to the end


//if includes "u" at first vowel - use second vowel index for splice && q is index 0



      // Remember: console.log is your friend :)


      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word
      return currentWord
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "",
      phraseTranslated: ("This is where your translated sentence will appear.")
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({ phrase: e.target.value })
  }

  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <img
          // src="https://images.unsplash.com/photo-1567201080580-bfcc97dae346?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          // alt="happy pig"
          // id="butcherPig"
        />
        <div id="box">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            id="inputPhrase"
            onChange={ this.handleInput }
            value={ this.state.phrase }
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={ this.setUpPreventDefault }>Submit</button>
          <button onClick={ this.restartGame }>Clear</button>
          <p>{ this.state.phraseTranslated }</p>
          <footer>Coded by ~Elyse and Lex~</footer>
        </div>

      </>
    )
  }
}

export default App
