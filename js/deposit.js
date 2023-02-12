// step 1 
document.getElementById('btn-deposit').addEventListener('click', function(){
 //   step 2  
    const depositField = document.getElementById('diposit-amound') 
    const newDepositAmoundString = depositField.value ;
    const newDepositAmound = parseFloat(newDepositAmoundString)
// step 3 
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalPreviousString = depositTotalElement.innerText ;
    const depositTotalPrevious = parseFloat(depositTotalPreviousString)
    // console.log(depositTotalAmound)
// step 4 
    const currentDeposit = newDepositAmound + depositTotalPrevious;
    depositTotalElement.innerText = currentDeposit ;
// step 5 
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText ;
    const balanceTotalAmound = parseFloat(previousBalanceTotalString)
// step 6 
    const currentBalance = newDepositAmound + balanceTotalAmound ;
    balanceTotalElement.innerText = currentBalance ;

// step 7 
    depositField.value = '';

})
//---------------------- withdraw --------------------
document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const withdrawField = document.getElementById('withdraw-amound');
    // console.log('check')
    const newWithdrawString = withdrawField.value ;
    const newWithdraw = parseFloat(newWithdrawString)
    // const newWithdraw = parseFloat(newDepositAmoundString) ;
    // console.log('check')
    const previousWithdrawElement = document.getElementById('total-withdraw')
    const totalWithdrawString = previousWithdrawElement.innerText
    const totalWithdraw = parseFloat(totalWithdrawString)

    const currentWithdraw = newWithdraw + totalWithdraw ;
    previousWithdrawElement.innerText = currentWithdraw ;

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText ;
    const balanceTotalAmound = parseFloat(previousBalanceTotalString)

    const currentBalance2 = balanceTotalAmound - newWithdraw ;
    balanceTotalElement.innerText = currentBalance2


})

