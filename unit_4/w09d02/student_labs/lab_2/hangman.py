# =============== HANGMAN ===============
# The computer should randomly select a word from a list of words you create.
# The user should be prompted with the length of the word they are trying to guess.
# The user should have a limited number of guesses. If they don't guess the word correctly within the allotted number of guesses, the program should supply a lose statement.
# The program should prompt the user with how many guesses they have left after each guess they make.
# User should be able to see what letters they have guessed correctly and what letters they have guessed incorrectly.
# If the user guesses all of the letters in the word, they should be shown a win statement.
import random
from tkinter import Y

# def playGame():
#     getWord()
words_list= ['Hangman', 'Piano', 'Games', 'developer', 'python']
missedLetters = ''
correctLetters = ''
secretWord = random.choice(words_list)
gameIsDone = False

def playGame():
    print("Welcome to Hangman!")
    ready = input("Are you ready to play?!: ")
    if ready == 'y' :
        getWord()
    else: 
        print("Okay Goodbye!")
        gameIsDone = True


def getWord():
    print("Random Word is: " + str(secretWord))
    print("Your random word is " + str(len(secretWord)) + " letters long")
    print(secretWord)
    getGuess()


def getGuess():
    attempts = 6
    print("You have " + str(attempts) + " tries remaining, what is your guess?: ")
    guess = input("Guess a letter: ")
    attempts = attempts - 1
    print(str(attempts) + " attempts remaining")
    
    return guess

while True:
    guess = getGuess(missedLetters + correctLetters)
    if guess in secretWord:
        correctLetters = correctLetters + guess

# playGame()
playGame()