# Terminal Navigation

## Lesson Objectives

_After this lesson, students will be able to:_

1. Describe basic aspects of how classes will work.
1. Download and install software necessary for the class.
1. Open Terminal.
1. Describe what a command line interface (CLI) is.
1. Describe the state of the current working directory.
1. Change directories.
1. List some keyboard shortcuts.
1. Create files and folders.
1. Navigate using relative pathing on the command line.
1. Navigate using absolute pathing on the command line.
1. Run some code.

## Describe basic aspects of how classes will work

- Lesson headers.
	- Headers will be posted for all lessons and labs with links to markdowns and the Zoom channel.
- Markdown.
	- Markdown contains reference material related to the lesson.
	- Slides from the markdown will be posted into Slack during the lesson.
- Sharing screen.
	- The instructor will share their screen for demonstration purposes. Double-click to get out of fullscreen.
- Screen real-estate: markdown, Zoom, text editor, Terminal, Slack.
	- Command-tab to cycle applications.
- Muting.
	- Be muted unless speaking.
- Asking questions.
	- Ask away! Either in Slack or out loud.
- Visibility of instructor code.
	- Speak up if the instructor's code is not visible (eg. too small).
- Thumbs ups.
	- We use the thumbs up emoji to gauge completeness of exercises. Click on the thumb when you are done with an exercise.

## Download and install software necessary for the class

- Atom installed? Or your favorite text editor.
	- [Download Atom](https://atom.io/)
- Node installed?
	- [Current version](https://nodejs.org/en/download/current/), **not** LTS.
	- Click on "Macintosh Installer."
	- Install the package.

## Open Terminal

- `⌘ (Command) + Space`, or open Spotlight
- Type `terminal`
- Hit `Enter`

![](https://i.imgur.com/CvggrYa.png)

- Keep it locked in your dock. Right click on the icon, highlight options, check "Keep in Dock".

![](https://i.imgur.com/ZrPuVNq.png)


### Terminal Preferences

You can change the color of your Terminal and the font size. It is recommended to make your Terminal output easier to read, rather than the tiny default output.

> Terminal > Preferences > Pro

## Describe what a command line interface is

Terminal provides a Command Line Interface (CLI) to the operating system. With it you can give your computer direct, text-based instructions. It is the most powerful piece of software on your computer! Think of it as the central hub of your development process. For now, we will use it to navigate the files and folders in our computer.

When terminal launches, it will start in your computer's home directory (whatever you named your computer). Your home directory is denoted by the tilde `~`.

In Terminal-land, **directories** are the same as **folders** (we just call them **directories**).

![](https://i.imgur.com/tTyOkwV.png)


In **Finder**, we can also navigate our computer's folders and files: folders contain files and more folders:

![](https://i.imgur.com/CR7PmAO.png)

## Describe the state of the current directory

The Command Line understands commands written in the `bash scripting language`. The commands are abbreviations of English words, or acronyms.

- `pwd` - Will print the current working directory. It shows you a `path`. This `path` shows you where you are currently located in the filesystem. It's like sending up a flare or homing beacon, where you can see how far you have 'traveled' from the root directory.

![](https://i.imgur.com/4aaT88x.png)

- `ls` - Lists the contents of the current directory. You can see:
	* The immediate _child_ directories (the directories inside this directory).
	* The files in this directory.

![](https://i.imgur.com/H2RTUny.png)

- Bash commands can take `flags` denoted by a dash `-`.
	- `ls -a` - Lists content including hidden files and directories. Hidden files and directories begin with a period, for example, `.git`.
	- `ls -l` - Lists content and give meta information about each item.

Directories (folders) can have directories within them, and there can be directories inside _those_ directories, ad infinitum. This creates a tree structure where directories can have many children with many different branches.

![](http://i.imgur.com/M6OgKZJ.png)

## Change Directories

We can navigate to other directories _relative_ to the current working directory.

- `cd some_directory`
	- Navigates into a child directory called `some_directory`. `some_directory` is a child of the current directory.
- `cd ..`
	- Navigates into the parent of the current directory.
	- `..` is shorthand for parent.
- `cd` will take you back home.

## List some keyboard shortcuts

In the long term, reduce your reliance on the mouse. More Bash keyboard shortcuts:

- `⌘ K` Clear the Terminal window.
- `option arrow` Move cursor by word.
- Letter[TAB].
	- Autocompletes (case-sensitive).
- Up / down arrow.
	- Cycle command history.
- `Ctrl R` Search through previous commands.

## Create files and folders

- `mkdir`
	- Makes a directory.
	- Example:
		- `mkdir directory_name`
			- makes a directory called `directory_name`
- `touch`
	- Creates an empty file.
	- A file typically will have a **file extension** like `.txt` whereas a directory will not.
	- Example:
		- `touch file.txt`
			- Makes a .txt file.

## Navigate using relative pathing on the command line

Chain more directories to the current path with the `/` separator.

- Go down the chain into child directories:
	- `cd parent_directory`
	- `cd parent_directory/child_directory`
	- `cd parent_directory/child_directory/grandchild_directory`

- Go up the chain into parent directories:
	- `cd ..`
	- `cd ../..`
	- `cd ../../..`

- Go sideways into a _sibling_ directory by first going up, then down:
	- `cd ../sibling_directory`

- Go into an _aunt_ or _uncle_ directory by first going up to the parent, then the grandparent, then down again on another branch:
	- `cd ../../auntie_directory`

## Navigate using absolute pathing on the command line

Move anywhere relative to the home directory:

`cd ~/` - the path starts in home directory.

Example:

- `cd ~/Desktop/Labyrinth/stairway/escher_room`

Navigates to the escher room _no matter where_ you are currently located in your filesystem.

> NOTE: You can combine absolute and relative pathing when copying or moving files from one location to another with `cp` and `mv`.

## Run some code

We are going to:

* Make a file.
* Open it in our text editor.
* Write some code.
* Run the code in Terminal.

### Code Along (5 min)

#### Create Files/Directories

* In Terminal, navigate to Documents.
* Make a directory `w01d01/student_examples`
* Go inside the directory.
* Make a file `first_code.js`
* Open up Atom through Spotlight or the Dock.
* Go to `Atom -> Install Shell Commands`
	* this allows you to open Atom using a terminal command.
* Close Atom.
* From inside the `w01d01/student_examples` directory, open Atom from the command line with `atom .` (atom space dot)
	* **NOTE** This might not work on some systems. If not we will get it sorted out in time. For now, Just open the directory from `File -> Open`, and open the `w01d01/student_examples` directory.
* When Atom opens, you should see the `w01d01/student_examples` directory and all the files inside the directory (in this case, just the `first_code.js` file.

#### Write/Run Code

* Check version of Node `node -v`. You should have a version greater than 8.
* Let's send a message to the console. It is somewhat of a tradition to write a 'Hello World' message as the first thing you do in programming.

```
console.log('Hello World!');
```

Run the code in Terminal:

> `node filename.js`
> => Hello World!

**Congrats!** You've written your first "Hello World" of wdi-remote!

We can send whatever we want to the console.

`console.log('The rain in Spain falls mainly on the plain');`

## More Terminal Keyboard shortcuts

In the long term, reduce your reliance on the mouse.
More Bash keyboard shortcuts:

`⌘ K` Clear the Terminal window.

`option arrow` Move cursor by word.

`Ctrl A` Go to beginning of line.

`Ctrl E` Go to end of line.

`Ctrl K` Kill line to end.

`Ctrl U` Kill line to beginning.

`Ctrl Y` Paste whatever was killed using Ctrl+K or Ctrl+U.

`cd -` Toggle previous directory.

`Ctrl R` Search through previous commands.

There are also video tutorials [here](https://www.youtube.com/playlist?list=PLdnONIhPScSToZztXRHyKZTQEsE30luMx)
