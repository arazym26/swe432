
function validateForm() {
    var requestField = document.getElementById('requestField');

    if (requestField.value.trim() === '') {
      alert('Please enter a song/artist.');
      requestField.focus();
      return false; 
    }
       return true;
}

function submitForm(){
    alert('search sent');
    return true;
}
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
    if (!validateForm()) {
      event.preventDefault(); 
    }
});

function change(){
    var likeIcon = document.querySelectorAll(`.table__like-icon`);
    for (var icon of likeIcon) {
        icon.addEventListener('click', likeIconIsClicked);
      }
     
}
function likeIconIsClicked() {
    this.classList.toggle(`table__like-icon_active`);
    
  
if(this.value=="liked"){
     this.value="click to like";
     this.innerHTML="click to like";
}
else {
    this.value="liked";
    this.innerHTML="liked";
}}