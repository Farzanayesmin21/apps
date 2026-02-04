 const transectionData = []
 validpin = 1234

// function to get input values 
function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    
    return inputFieldValueNumber
}
function getInputValue(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}
// function to get innertext 
function getInerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}
function setInnerText(value){
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value
}
// function to set toggle 
function handleToggle(id){
    const forms = document.getElementsByClassName("form")
    for (const form of forms){
        form.style.display= "none"
        document.getElementById(id).style.display = "block"
    }
}
// function to toggle buttons 
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName("form-btn")
    for (const btn of formBtns){
        btn.classList.remove("border-[#0874f2]" , "bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]" , "bg-[#0874f20d]")
}


// add money feature --------------------------------------------

document.getElementById('addMoneybtn').addEventListener('click', function(e){
    e.preventDefault()

   
    
    const selectBank = getInputValue("select-bank")
    const addAccountNumber = getInputValue("add-accountNumber")
    const addAmount =getInputValueNumber("add-amount")
    if (addAmount <= 0){
        alert("invalid amount")
        return;
    }
    const addPinNumber = getInputValueNumber("add-pin")

    if(addAccountNumber.length <11){
        alert("Please provide valid account number")
        return;
    }
    if(addPinNumber !== validpin ){
         alert("Please provide valid pin number")
        return;
    }
    
    const availableBalance =getInerText("available-balance")

    const totalAvailableBalance = addAmount + availableBalance
    setInnerText(totalAvailableBalance)
    alert("Money added")

    const data ={
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    transectionData.push(data)
    console.log(transectionData);


})

// Cash out button feature 

document.getElementById("cashout-btn").addEventListener("click", function(e){
    e.preventDefault()
    const agentNumber =getInputValue("agent-number")
    const cashoutAmount = getInputValueNumber("cashout-ammount")
    const cashoutPin = getInputValueNumber("cashout-pin")

    if (agentNumber.length <11){
        alert("pleace provide 11 digit number")
        return;
    }

    if(cashoutPin != validpin){
        alert("Pleace provide valid pin number")
        return;
    }

    const availableBalance = getInerText("available-balance")
    if(cashoutAmount <=0 || cashoutAmount>availableBalance){
    alert("invalid amount")
        return;
    }
    const validAvailableBalance = availableBalance - cashoutAmount
    setInnerText (validAvailableBalance)
    alert ("Cash out succesfull")

    const data ={
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transectionData.push(data)
    console.log(transectionData);
})

// Trasfer money button feature
document.getElementById("transfer-btn").addEventListener("click", function(e){
    e.preventDefault()
    const accountNumber =getInputValue("transfer-account")
    const transferAmount = getInputValueNumber("transfer-amount")
    const transferPin = getInputValueNumber("trasnfer-pin")

    if (accountNumber.length <11){
        alert("pleace provide 11 digit number")
        return;
    }

    if(transferPin != validpin){
        alert("Pleace provide valid pin number")
        return;
    }

    const availableBalance = getInerText("available-balance")
    if(transferAmount <=0 || transferAmount>availableBalance){
    alert("invalid amount")
        return;
    }
    const validAvailableBalance = availableBalance - transferAmount
    setInnerText (validAvailableBalance)
    alert ("Transfer Money succesfull")

    const data ={
        name: "Transfer Money",
        date: new Date().toLocaleTimeString()
    }
    transectionData.push(data)
    console.log(transectionData);
})

// Pay bill button feature 
document.getElementById('bill-btn').addEventListener('click', function(e){
    e.preventDefault()

   
    
    const selectPay = getInputValue("select-pay")
    const billerAccountNumber = getInputValue("biller-account")
    const billAmount =getInputValueNumber("bill-amount")
    if (billAmount <= 0){
        alert("invalid amount")
        return;
    }
    const billPinNumber = getInputValueNumber("bill-pin")

    if(billerAccountNumber.length <11){
        alert("Please provide valid account number")
        return;
    }
    if(billPinNumber !== validpin ){
         alert("Please provide valid pin number")
        return;
    }
    
    const availableBalance =getInerText("available-balance")

    const totalAvailableBalance = availableBalance - billAmount
    setInnerText(totalAvailableBalance)
    alert("Bill Payed")

    const data ={
        name: "Pay Bill",
        date: new Date().toLocaleTimeString()
    }
    transectionData.push(data)
    console.log(transectionData);


})

// transection button featurs
document.getElementById("transection-button").addEventListener('click', function(){
    const transectionContainer = document.getElementById("transaction-container")
    transectionContainer.innerText = ""
    for (const data of transectionData){
        const div = document.createElement("div")
        div.innerHTML = `
            <div  class="bg-white h-[60px] p-[10px] rounded-xl flex justify-between items-center mb-[10px]">
            <div class="flex items-center">
        <div class="bg-[#f4f5f7] h-[40px] w-[40px] rounded-full mx-[10px] p-1.5">
          <img class="h-[25px] w-[25px] " src="image/opt-1.png" alt="" />
        </div>
        <div>
          <h1 class="text-[16px] font-bold text-gray-600">${data.name}</h1>
          <h1 class="text-gray-500 text-[12px] font-semibold">${data.date}</h1>

        </div>
      </div>
      <i class="fa-solid fa-ellipsis-vertical"></i>

    </div>
    `
    transectionContainer.appendChild(div)
    }
})

// taggling feature---------------------------------------------
document.getElementById("addmoney").addEventListener("click", function(){
    handleToggle("add-money")
    handleButtonToggle("addmoney")
})

document.getElementById("cashout").addEventListener("click", function(){
    handleToggle("cash-out")
    handleButtonToggle("cashout")
})

document.getElementById("transfermoney").addEventListener("click", function(){
   handleToggle("transfer-money")
   handleButtonToggle("transfermoney")
})

document.getElementById("get-bonus").addEventListener("click", function(){
    handleToggle("getBonus")
    handleButtonToggle("get-bonus")
})
document.getElementById("pay-bill").addEventListener("click", function(){
   handleToggle("payBill")
   handleButtonToggle("pay-bill")
})
document.getElementById("transection-button").addEventListener("click", function(){
   handleToggle("transection-parent")
   handleButtonToggle("transection-button")
})

// log out button feature 
document.getElementById("logoutBtn").addEventListener("click", function () {
  const confirmLogout = confirm("Are you sure you want to logout?");
  
  if (confirmLogout) {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "index.html";
  }
});
