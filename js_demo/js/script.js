function askName() {
    var nameReturn =document.getElementById('ask-name')
    var name = prompt('Please enter your name' , 'HERE');
    if (name =='') {
        alert('please try again');
    } else {
        nameReturn.innerHTML = 'Hello' + name + '! Nice to meet you!';
    }
}

function askQuestion() {
    var q = prompt('How much wood would a wook chuck chuck if a wood chuck could chuck wood?');
    if (q !=null) {
        document.getElementById('question').innerHTML = 'Yikes!' + q + ' is a lot of wood!'
    }
}