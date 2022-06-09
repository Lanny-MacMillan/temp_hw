# to execute --- python3 <filename>
# print('hello')
# this will not be executed
# a = 'oh hai'
# print(a)

# a = str(1) #a = "1"
# b = int("5") #b = 5
# c = float(4) #c = 4.0
# d = int(5.7) #d = 5

# print(a)
# print(b)
# print(c)
# print(d)

# a = 1
# b = a + 1 #b = 2
# c = b * 3 #c = 6
# d = c - 1 #d = 5
# e = d / 2 #e = 2.5
# f = d ** 2 #exponent: f = 25

# print(a)
# print(b)
# print(c)
# print(d)
# print(e)
# print(f)

# a = "first string"
# b = "second string"
# c = a + "" + b

# print(a)
# print(b)
# print(c)

# LISTS
# a = [1, 5, "some string", True, 5.6]
# print(a)
# # a = [
# #     [1, 2, 3], #first row
# #     [4, 5, 6], #second row
# #     [7, 8, 9], #third row
# #     [10] #fourth row
# # ]
# # print(a)

# print(a[0])
# print(a[1])
# print(a[3])

# ============================== DICTIONARY ========================
# my_car = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# print(my_car["brand"])
# print(my_car["model"])
# print(my_car["year"])

# a = [
#     {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
#     },
#     [4, 5, 6],
#     [7, 8, 9],
#     [10]
# ]
# print(a[0]["model"])#0 is the position of model, first dictionary [0] theres only one


# b = {
#     "firstGrade": ["Bobby", "Kyle", "Suzy"],
#     "secondGrade": ["Jennifer", "Jasmine", "Javier"],
#     "thirdGrade": "Nobody, they all failed last year!"
# }
# print(b)
# print(b["secondGrade"][2]) #pull Javier

# a = 8
# if a < 10:
#     print("a is less than 10")
# elif a == 10:
#     print("a is 10")
# else:
#     print("a is greater than 10")

# a = 'oh hai!'
# if a == 'oh hai!':
#     print('this works')

# a = 1
# b = 2
# if a == 1 and b == 2:
#     print('y') # will print only when both a==1 AND b==2
# else:
#     print('n') # will print if either condition is false

# if a == 0 and b == 2:
#     print('y') # will print only when both a==1 AND b==2
# else:
#     print('n') # will print if either condition is false

# a = 2
# b = 2
# if a == 1 or b == 2:
#     print('y') # will print when either a==1 OR b==2
# else:
#     print('n') # will print if both conditions are false

# if a == 1 or b == 1:
#     print('y') # will print when either a==1 OR b==2
# else:
#     print('n') # will print if both conditions are false
# ============================== USER INPUT ========================
# user_input = input("please enter your name: ")
# print("hello, " + user_input + "!")

# ============================== LOOPS ==============================
# a = 10
# while a < 20:
#     print("the value of a is currently: " + str(a))
#     a += 1

# foods = ['hot dogs', 'beer', 'bald eagles']
# for food in foods:
#     print(food)

# for x in range(0, 3):
#     print(x)


# def greet(name):
#     print('hi ' + name)

# greet('Lanny')

# def add(value1, value2):
#     return value1 + value2

# print(add(1,3))
#=========================== CREATE A CLASS FOR AN OBJECT =======================

class Person:
    def __init__(self, nameParam, ageParam):
        self.name = nameParam
        self.age = ageParam
        # print('Hi')
        
    def greet(self):                     #turns the age into a string for this print
        print("hello, my name is " + self.name + ". My age is " + str(self.age))

    def work(self):
        print("Boring")

# me = Person("Lanny", 48)
# me.greet()
sally = Person("Sally", 28)
sally.greet()
sally.work()

#=========================== HAVE A CLASS INHERIT FROM ANOTHER =======================
#SUperhero will inherit properties from Person
#super() function is used to give access to methods and properties of a parent or sibling class.
class SuperHero(Person):
    def __init__(self, name, age, powers):
        super().__init__(name, age)
        self.powers = powers

    def listPowers(self):
        # print('flight, strength, heat vision')
        for power in self.powers:
            print(power)

    def greet(self):
        super().greet()
        self.listPowers()
    
    def work(self):
        print("Up up and away!")


superman = SuperHero("Clark Kent", 200, ['flight','strength','heat vision', 'invunerability'])
superman.greet()
# superman.listPowers()
# superman.work()