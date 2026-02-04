// login button functionality 
document.getElementById('registerbtn').addEventListener("click", function(e){
    e.preventDefault()
    const mobileNumber = 12345678910;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValueconverted = parseInt(pinNumberValue)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueconverted === pinNumber){
        window.location.href = "./index.html"
    }
    else{
        alert("Invalid credentials")
    }
})





