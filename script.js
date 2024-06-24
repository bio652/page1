function checkinput(){
    console.log('checkinput'); 
    let inputs = document.querySelectorAll('.bli');
    inputs.forEach(function(input) {
        if(input.value === ''){
            input.previousElementSibling.classList.add('required');
        } else {
            input.previousElementSibling.classList.remove('required');
        }
    });
}