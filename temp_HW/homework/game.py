# ======================== LANDSCAPER 2.0 ========================
import os

class Tool:
    def __init__(self, name, profit, cost):
        self.name = name
        self.profit = profit
        self.cost = cost


    def upgrade(self, bankAccount, tool):
        print("You now have $" + str(bankAccount) + ". You can buy " + tool.name + " for $" + str(tool.cost) + " to make a profit of $" + str(tool.profit) + " a day cutting lawns.")
        response = input("Do you want to buy the " + tool.name + "? (y/n): ")
        if response == "y":
            os.system('clear')
            bankAccount -= tool.cost
            print("================== Landscaper ==================")
            print("Account balance is: $" + str(bankAccount))
            del tools[0]
            tools[0].cutGrass(bankAccount)
        else:
            print("Okay Goodbye!")
            

    def cutGrass(self, bankAccount):   
        while bankAccount < tools[1].cost:
            res = input("Do you want to cut the grass with " + tools[0].name + " ? (y/n): ")
            if res == "y":
                os.system('clear')
                print("================== Landscaper ==================")
                print("Tool: " + tools[0].name)
                bankAccount += tools[0].profit
                print("Account Balance: " + str(bankAccount))
            else:
                print("Okay Goodbye!")
            if bankAccount >= 1000:
                print("Congratulations! You've earned $1000 or more, you win!")
                exit()
            elif bankAccount >= tools[1].cost:
                tools[0].upgrade(bankAccount, tools[1])
            



students = Tool("Starving Students", 250, 500)
fancyLawnmower = Tool("Fancy Battery-Powered Lawnmower", 100, 250)
oldLawnmower = Tool("Old-Timey Push Lawnmower", 50, 25)
rustyScissors = Tool("Rusty Scissors", 5, 5)
teeth = Tool("teeth", 1, 0)

tools = [teeth, rustyScissors, oldLawnmower, fancyLawnmower, students]

def startGame():
    bankAccount = 0
    print("Welcome to Landscaper!")
    print("You have started a landscape business, but all you currently have is your teeth.")
    while bankAccount < rustyScissors.cost:
        res = input("Do you want to cut the grass with " + teeth.name + " ? (y/n): ")
        if res == "y":
            os.system('clear')
            print("================== Landscaper ==================")
            bankAccount += teeth.profit
            print("Account Balance: " + str(bankAccount))
            print("Tool: " + teeth.name)
        else:
            print("Exiting Game")
        if bankAccount >= rustyScissors.cost:
            teeth.upgrade(bankAccount, rustyScissors)

def clear_console():
    os.system('clear')
startGame()