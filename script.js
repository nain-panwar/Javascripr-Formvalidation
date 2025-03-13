document.querySelector('#form-submit').addEventListener('click', function () {

    if (document.querySelector('.firstname').value === '') {
        document.querySelector('.error').innerText = 'First Name is wrong.';
        return;
    } else {
        document.querySelector('.error').innerText = '';
    }

    if (document.querySelector('.lastname').value === '') {
        document.querySelector('.error').innerText = 'Last Name is wrong.';
        return;
    } else {
        document.querySelector('.error').innerText = '';
    }

    if (document.querySelector('.phone').value === '') {
        document.querySelector('.error').innerText = 'Phone number is wrong.';
        return;
    } else {
        document.querySelector('.error').innerText = '';
    }

    if (document.querySelector('.address').value === '') {
        document.querySelector('.error').innerText = 'Address is wrong.';
        return;
    } else{
        document.querySelector('.error').innerText= 'Successfully Submitted'
    }

});
