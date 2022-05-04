const companydesktop = document.querySelector('.boxMobile .companyBar');
const feauturesdesktop = document.querySelector('.boxMobile .iconBar');

const opendesktop = () =>{
    document.querySelector('.companydesktop').classList.toggle('companydesktop2')
    companydesktop.classList.toggle('companydesktop2')
    document.querySelector('.iconboxdesktop').classList.remove('companydesktop3')
}

const openFeautures = () =>{

    document.querySelector('.iconboxdesktop').classList.toggle('companydesktop3')
    feauturesdesktop.classList.toggle('companydesktop3')
    document.querySelector('.companydesktop').classList.remove('companydesktop2')
}
feauturesdesktop.addEventListener('click', openFeautures)
companydesktop.addEventListener('click', opendesktop)