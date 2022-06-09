

# Intro to Python pt. 1

## Video Link

[Intro to Python pt 1](https://www.youtube.com/watch?v=h6vNf4_6ldc&list=PLdnONIhPScSQqXfMndCJRYWQl-0uApORf&index=19)

## Lesson Objectives

1. Print a message
1. Add a comment
1. Create a variable and assign it a value
1. Explain the different data types
1. Perform calculations with variables
1. Use string operations
1. Create a list
1. Access an element of a list
1. Use conditional statements to perfom a set of commands depending on the situation


## Set up

In today's `student_examples` directory, touch a file `program.py`


## Running files

These notes are for python 3.x, so use `python3 <YOUR FILENAME>.py` to run your files

## Print a message

You can print a message to the user

```python
print("hello!")
```

## Add a comment

- Comments let you summarize what you're doing
- They don't get executed

```python
# this will not be executed
```

- Python doesn't have a specific syntax for multi-line comments so we just use a # for each line.

```python
# to do multiple line comments
# you have to put a hash at the start of every
# line
```

## Create a variable and assign it a value

```python
a = "hello"
print(a) ##print the value of the variable 'a'
```

## Data Types in Python

There are lots of different types of data that you can use in python

- String (text)
- Integers (whole numbers)
- Float (decimal numbers)
- Booleans (True/False)

You can convert one data type to another

```python
a = str(1) #a = "1"
b = int("5") #b = 5
c = float(4) #c = 4.0
d = int(5.7) #d = 5
```

## Performing Calculations

```python
a = 1
b = a + 1 #b = 2
c = b * 3 #c = 6
d = c - 1 #d = 5
e = d / 2 #e = 2.5
f = d ** 2 #exponent: f = 25
```

## String Operations

```python
a = "first string"
b = "second string"
c = a + " " + b
```

## Lists

You can create lists of things

```python
a = [1, 5, "some string", True, 5.6]
```

You can even have lists of lists

```python
a = [
    [1, 2, 3], #first row
    [4, 5, 6], #second row
    [7, 8, 9], #third row
    [10] #fourth row
]
```

You can conceptualize a list of lists however you want

### ACTIVITY

If you want to make the previous example have columns instead of rows, do you need to change anything?

## Access an element of a list

Lists have elements stored at numerical indexes, starting at 0

```python
a = [1, 5, "some string", True, 5.6]
print(a[0]) #1
print(a[1]) #5
print(a[4]) #5.6
```

## Dictionaries

You can create JS style objects in python called dictionaries
- Dictionaries use array access syntax:

```python
my_car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(my_car["brand"])
```

You can also have lists in dictionaries and dictionaries in lists!

```python
a = [
    {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
    },
    [4, 5, 6],
    [7, 8, 9],
    [10]
]
print(a)

b = {
  "firstGrade": ["Bobby", "Kyle", "Suzy"],
  "secondGrade": ["Jennifer", "Jasmine", "Javier"],
  "thirdGrade": "Nobody, they all failed last year!"
}
print(b)
```

## Perform a set of commands depending on a situation

```python
a = 22
if a < 10:
    print("a is less than 10")
elif a == 10:
    print("a is 10")
else:
    print("a is greater than 10")
```

The conditions can be

- `<` less than
- `>` greater than
- `<=` less than or equal to
- `>=` greater than or equal to
- `==` an exact match
- `!=` not equal to

You can also compare strings:

```python
a = 'oh hai!'
if a == 'oh hai!':
    print('this works')
```

You can combine conditional statements:

check to see if both conditions are met:

```python
a = 1
b = 2
if a == 1 and b == 2:
  print('y') # will print only when both a==1 AND b==2
else:
  print('n') # will print if either condition is false

if a == 0 and b == 2:
  print('y') # will print only when both a==1 AND b==2
else:
  print('n') # will print if either condition is false
```

check to see if either condition is met:

```python
a = 2
b = 2
if a == 1 or b == 2:
  print('y') # will print when either a==1 OR b==2
else:
  print('n') # will print if both conditions are false

if a == 1 or b == 1:
  print('y') # will print when either a==1 OR b==2
else:
  print('n') # will print if both conditions are false
```
