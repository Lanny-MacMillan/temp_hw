import './App.css';
import {useState} from 'react';

const App = () => {
  const [oven, setOven] = useState('No bake baking')
  const [bankAccount, setbankAccount] = useState(0)
  const [rate, setRate] = useState(1)
  
  const makeMoney = () => {
    if(bankAccount >= 1000){
      alert('You Win!')
    } else {
      setbankAccount(bankAccount + rate)
    }
  } 
  const buyEasyBake = () => {
      if(bankAccount >= 5 & oven !== 'Easy Bake Oven'){
        setbankAccount(bankAccount - 5)
        setRate(rate + 4)
        setOven('Easy Bake Oven')
        document.getElementById("easyBakeButton").disabled = true;
      } else {
        alert('Not Enough Money Yet')
      }
    }
  const buyOldToasterOven = () => {
    if(bankAccount >= 25 & oven !== 'Old Toaster Oven' ){
      setbankAccount(bankAccount - 25)
      setRate(rate + 45)
      setOven('Old Toaster Oven')
      document.getElementById("oldToasterButton").disabled = true;
    } else {
      alert('Not Enough Money Yet')
    }
  }
  const buyConvectionOven = () => {
    if(bankAccount >= 250 & oven !== 'Convection Oven' ){
      setbankAccount(bankAccount - 250)
      setRate(rate + 50)
      setOven('Convection Oven')
      document.getElementById("oldConvectionButton").disabled = true;

    } else {
      alert('Not Enough Money Yet')
    }
  }
  const buyFactory = () => {
    if(bankAccount >= 500 & oven !== 'Factory' ){
      setbankAccount(bankAccount - 500)
      setRate(rate + 150)
      setOven('Factory')
      document.getElementById("factoryButton").disabled = true;
    
    } else {
      alert('Not Enough Money Yet')
    }
  }
  const reset = () => {
    setbankAccount(0)
    setOven('No Bake Oven')
    setRate(1)
    document.getElementById("easyBakeButton").disabled = false;
    document.getElementById("oldToasterButton").disabled = false;
    document.getElementById("oldConvectionButton").disabled = false;
    document.getElementById("factoryButton").disabled = false;
    document.getElementById("newBakery").disabled = true;
  }

  return (
    <>
      <div class="container">
      <div class="firstBakery">
        <h1>Barely a Bakery</h1>
      <h2> First Establishment</h2>
        <h4>You may only purchase a single oven at a time in this version of the game, to win you must get $1,000 in your Bank Account</h4>

        <h2>Cooking with: {oven}</h2>
        <h3>Currently earning ${rate}.00 daily</h3>

        <h3>Bank Account = ${bankAccount}.00 </h3>
        <button class='myButton' onClick={makeMoney}>Bake/Work</button>
        <br></br>
        <br></br>
        <h5>Using the Easy Bake Oven, you can spend the day baking and earn $5 more a day</h5>
        <button class='myButton' id='easyBakeButton' onClick={buyEasyBake}>Buy Easy Bake Oven $5</button> 
        <br></br>
        <h5>Using the Old-Toaster-Oven, you can spend the day baking and earn $50 more a day</h5>
        <button class='myButton' id='oldToasterButton' onClick={buyOldToasterOven}>Buy Old Toaster Oven $25</button>
        <br></br>
        <h5>Using the Convection Oven, you can spend the day baking and earn $100 more a day</h5>
        <button class='myButton' id='oldConvectionButton' onClick={buyConvectionOven}>Buy Convection Oven $250</button>
        <br></br>
        <h5>Using the the factory, you can spend the day baking and earn $250 more a day</h5>
        <button class='myButton' id = 'factoryButton' onClick={buyFactory}>Buy a Factory $500</button>
        <br></br>
        <br></br>
        <button class='myButton' onClick={reset}>Reset Game</button>
        </div>
        <div class="secondBakery">
          <SecondBakery/>
        </div>
        </div>
    </>
  );
}

const SecondBakery = () => {
  const [oven, setOven] = useState('No bake baking')
  const [bankAccount, setbankAccount] = useState(0)
  const [rate, setRate] = useState(1)
  
  const makeMoney = () => {
    if(bankAccount >= 20000){
      alert('You Win!')
    } else {
      setbankAccount(bankAccount + rate)
    }
  } 
  const buyEasyBake = () => {
      if(bankAccount >= 5){
        setbankAccount(bankAccount - 5)
        setRate(rate + 5)
        setOven('Easy Bake Oven')
      } else {
        alert('Not Enough Money Yet')
      }
    }
  const buyOldToasterOven = () => {
    if(bankAccount >= 25){
      setbankAccount(bankAccount - 25)
      setRate(rate + 50)
      setOven('Old Toaster Oven')
    } else {
      alert('Not Enough Money Yet')
    }
  }
  const buyConvectionOven = () => {
    if(bankAccount >= 250){
      setbankAccount(bankAccount - 250)
      setRate(rate + 100)
      setOven('Convection Oven')
    } else {
      alert('Not Enough Money Yet')
    }
  }
  const buyFactory = () => {
    if(bankAccount >= 500){
      setbankAccount(bankAccount - 500)
      setRate(rate + 250)
      setOven('Factory')    
    } else {
      alert('Not Enough Money Yet')
    }
  }
  const reset = () => {
    setbankAccount(0)
    setOven('No Bake Oven')
    setRate(1)
  }

  return (
    <>
    <h1>Barely a Bakery II</h1>
    <h2>Second Establishment</h2>
    <h4>You may purchase Multiple ovens in this version of the game but to win you must get $20,000 in your Bank Account</h4>
    <h2>Cooking with: {oven}</h2>
    <h3>Currently earning ${rate}.00 daily</h3>

    <h3>Bank Account = ${bankAccount}.00 </h3>
    <button class='myButton1' onClick={makeMoney}>Bake/Work</button>
    <br></br>
    <br></br>
    <h5>Using the Easy Bake Oven, you can spend the day baking and earn $5 more a day </h5>
    <button class='myButton1' id='easyBakeButton1' onClick={buyEasyBake}>Buy Easy Bake Oven $5</button> 
    <br></br>
    <h5>Using the Old-Toaster-Oven, you can spend the day baking and earn $50 more a day</h5>
    <button class='myButton1' id='oldToasterButton1' onClick={buyOldToasterOven}>Buy Old Toaster Oven $25</button>
    <br></br>
    <h5>Using the Convection Oven, you can spend the day baking and earn $100 more a day</h5>
    <button class='myButton1' id='oldConvectionButton1' onClick={buyConvectionOven}>Buy Convection Oven $250</button>
    <br></br>
    <h5>Using the the factory, you can spend the day baking and earn $250 more a day</h5>
    <button class='myButton1' id = 'factoryButton1' onClick={buyFactory}>Buy a Factory $500</button>
    <br></br>
    <br></br>
    <button class='myButton1' onClick={reset}>Reset Game</button>
    </>
  );
}

export default App;

