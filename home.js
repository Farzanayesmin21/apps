// add money button --------------------------------------------

document.getElementById('addMoneybtn').addEventListener('click', function(e){
    e.preventDefault()

    validpin = 1234
    
    const selectBank = document.getElementById("select-bank").value
    const addAccountNumber = document.getElementById("add-accountNumber").value
    const addAmount =parseInt(document.getElementById("add-amount").value) 
    const addPinNumber = parseInt(document.getElementById("add-pin").value)

    if(addAccountNumber.length <11){
        alert("Please provide valid account number")
        return;
    }
    if(addPinNumber !== validpin ){
         alert("Please provide valid pin number")
        return;
    }
    
    const availableBalance =parseInt( document.getElementById("available-balance").innerText)

    const totalAvailableBalance = addAmount + availableBalance
    document.getElementById("available-balance").innerText = totalAvailableBalance
    alert("Money added")


})
// taggling feature---------------------------------------------
document.getElementById("addmoney").addEventListener("click", function(){
    document.getElementById("cash-out").style.display= "none"
    document.getElementById("transfer-money").style.display= "none"
    document.getElementById("getBonus").style.display= "none"
    document.getElementById("payBill").style.display= "none"
    document.getElementById("add-money").style.display = "block"
})

document.getElementById("cashout").addEventListener("click", function(){
    document.getElementById("add-money").style.display= "none"
    document.getElementById("transfer-money").style.display= "none"
    document.getElementById("getBonus").style.display= "none"
    document.getElementById("payBill").style.display= "none"
    document.getElementById("cash-out").style.display = "block"
})

document.getElementById("transfermoney").addEventListener("click", function(){
    document.getElementById("cash-out").style.display= "none"
    document.getElementById("getBonus").style.display= "none"
    document.getElementById("payBill").style.display= "none"
    document.getElementById("add-money").style.display= "none"
    document.getElementById("transfer-money").style.display = "block"
})

document.getElementById("get-bonus").addEventListener("click", function(){
    document.getElementById("cash-out").style.display= "none"
    document.getElementById("add-money").style.display= "none"
    document.getElementById("transfer-money").style.display= "none"
    document.getElementById("payBill").style.display= "none"
    document.getElementById("getBonus").style.display = "block"
})
document.getElementById("pay-bill").addEventListener("click", function(){
    document.getElementById("cash-out").style.display= "none"
    document.getElementById("add-money").style.display= "none"
    document.getElementById("transfer-money").style.display= "none"
    document.getElementById("getBonus").style.display= "none"
    document.getElementById("payBill").style.display = "block"
})