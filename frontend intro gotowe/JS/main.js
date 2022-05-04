const features = document.querySelector('.iconBar')
const company =  document.querySelector('.companyBar')
const openBar = document.querySelector('.header__icon')
const closeBar = document.querySelector('.X')



const list = () =>{
 document.querySelector('.iconBox').classList.toggle('activFeatures')
 document.querySelector('.iconBar').classList.toggle('activFeatures')

}
const cpnBar = () =>{
    document.querySelector('.companyBox').classList.toggle('activFeatures')
    document.querySelector('.companyBar').classList.toggle('activFeatures')
}
const open =  () =>{
  document.querySelector('.section-menu').classList.add('activeMenu')
  document.querySelector('.heroshadow').classList.add('activeMenu')
}
const close = () =>{
    document.querySelector('.section-menu').classList.remove('activeMenu')
    document.querySelector('.heroshadow').classList.remove('activeMenu')
}

closeBar.addEventListener('click', close)
openBar.addEventListener('click', open)
company.addEventListener('click', cpnBar)
features.addEventListener('click', list)