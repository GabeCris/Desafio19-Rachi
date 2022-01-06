function openModal(){
    document.getElementById('modal').classList.remove('hide-modal');
    document.getElementById('modal').classList.add('show-modal');
}

function hideModal(){
    document.getElementById('modal').classList.remove('show-modal');
    document.getElementById('modal').classList.add('hide-modal');
}

function showPopup(){
    console.log('entrou aqui')
    document.getElementById('popup').classList.remove('hide-popup');
    document.getElementById('popup').classList.add('show-popup');
    setTimeout(hideModal, 2000);
    setTimeout(hidePopup, 2000);
    
}

function hidePopup(){
    document.getElementById('popup').classList.remove('show-popup');
    document.getElementById('popup').classList.add('hide-popup');
    setTimeout(clearInputs, 1000);
}

function clearInputs(){
    console.log("ENTROU NO CLEAR")
    const inputs = document.querySelectorAll('input');

    inputs.forEach(element => {
        element.value = ''
    });
}