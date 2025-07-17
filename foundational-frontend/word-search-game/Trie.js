// Code describes a data structure that is used to search for words that come from a dictionary file.
// Trie will get its words from a file

const fs = require("fs"); // node module that reads a file from a file system

class Trie {
    constructor(dictFilePath){
        this.dictionaryFilePath = dictFilePath;
        this.wordMap = {}; // Will hold the data from the dictionary file, 26 key-value pairs
        this.readDictionaryFile(this.dictionaryFilePath);
    }

    readDictionaryFile(filePath){
        const words = fs.readFileSync(filePath, "utf-8").split(/\s/); // reads file and returns contents as a string, split breaks one string
                                                                      // into an array of other strings, splits on whitespaces and newlines
        words.forEach(word => {
            word = word.toLowerCase(); // words is now an array with all words and each word will be lowercase
            this.addWordToObject(word, this.wordMap); // after word is lowercased it is passed to addWordToObject method
                });

    }

    addWordToObject(word, wordMap){
        for(let i = 0; i < word.length; i++){ //iterates through each letter of passed in string and extract a letter
            const letter = word.at(i);

            if(!wordMp[letter]){ // Checks to see if wordMap has an attribute associated with the current letter of the word
                                 // If not then add a new attribute in the wordMap associated with that letter
                wordMap[letter] = {
                    wordMap: {}
                };
            }
        }
    }
}