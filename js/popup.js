const popup = document.getElementById('popup_display');
const popupEmail = document.getElementById('show_email');
const popupPhone = document.getElementById('show_phone');
const linkIconEmail = document.getElementById('icon_media_email');
const linkIconPhone = document.getElementById('icon_media_phone');
const formPopup = document.getElementById('form_popup');

document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') popup.style.display = 'none';
})

const buttoNMensagemInputText = document.getElementById('mensagem_input').addEventListener('click', () => {
    const closePopup = document.getElementById('close_popup1').addEventListener('click', (e) => {
        popup.style.display = 'none';
    })
    const mensagem = document.getElementById('inp_msg').value;
    popup.style.display = 'flex';
    popupEmail.style.display = 'none';
    popupPhone.style.display = 'none';
    formPopup.style.display = 'flex';
    const textarea = document.getElementById('mensagem').innerText = mensagem;
})

linkIconEmail.addEventListener('click', () => {
    const closePopup = document.getElementById('close_popup2').addEventListener('click', (e) => {
        popup.style.display = 'none';
    })
    popup.style.display = 'flex';
    popupEmail.style.display = 'flex';
    formPopup.style.display = 'none';
    popupPhone.style.display = 'none'
});
linkIconPhone.addEventListener('click', () => {
    const closePopup = document.getElementById('close_popup3').addEventListener('click', (e) => {
        popup.style.display = 'none';
    })
    popup.style.display = 'flex';
    popupPhone.style.display = 'flex';
    formPopup.style.display = 'none';
    popupEmail.style.display = 'none';
});