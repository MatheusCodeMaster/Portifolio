const dateNow = document.querySelector('.date-now');
const today = new Date();
const ano = today.getFullYear();
if(ano == 2023){
    dateNow.innerHTML =` `;
}else{
    dateNow.innerHTML=` - ${ano}`;
}
