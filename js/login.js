 // step: 1 -- add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
// step: 2 get email
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value ;
    // console.log(email)

// step: 3 get password
    const userPassword = document.getElementById('user-password')
    const password = userPassword.value ;
    // console.log(password)
// step 4 verify email user
    if( email == 'nurzihad123@gmail.com' && password == 'zihad'){
        window.location.href = 'bank.html'
    }
    else{
        alert('incorrect password.Please try again')
    }

})