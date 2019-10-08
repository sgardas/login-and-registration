var remainingAttempts = 3;

function checkDetails() {
    var name = form1.uname.value;
    var password = form1.password.value;
    console.log('name', name);
    console.log('password', password);
    var validUsername = validateUsername(name);
    var validPassword = validatePassword(password);
    if (validUsername && validPassword) {
        alert('Login successful');
    } else {
        form1.uname.value = '';
        form1.password.value = '';
        remainingAttempts--;

        var msg = '';
        if (validPassword) {
            msg += 'Username incorrect: ';
        } else if (validUsername) {
            msg += 'Password incorrect: ';
        } else {
            msg += 'Both username and password are incorrect: ';
        }

        msg += remainingAttempts + ' attempts left.';
        alert(msg);

        if (remainingAttempts <= 0) {
            alert('Closing window...');
            window.close();
        }
    }

    return validUsername && validPassword;
}

function validateUsername(username) {
    return username == 'team2';
}

function validatePassword(password) {
    return password == 'team2rocks';
}