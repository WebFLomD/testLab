/** */
const btnOpenMenuModile = document.querySelector('.hamburgerMenuItem')
const btnCloseMenuModile = document.querySelector('.siteMobile-btnClose')
const blockMenuItemModile = document.querySelector('.siteModile-menuItemAndTitle')

btnOpenMenuModile.addEventListener('click', function(event){
    event.preventDefault()
    if(blockMenuItemModile.classList.contains('active')){
        blockMenuItemModile.classList.remove('active')
    } else {
        blockMenuItemModile.classList.add('active')
    }
})

btnCloseMenuModile.addEventListener('click', function(event){
    event.preventDefault()
    blockMenuItemModile.classList.remove('active')
})

/** */
function updateHeading() {
    const textContentMain = document.querySelector('.textContentMain')
    const btnMain = document.querySelector('.mainCallout-btn')

    if (window.innerWidth < 768){
        textContentMain.classList.remove('body-18')
        textContentMain.classList.add('body-16')
        btnMain.style.marginTop = '40px'
    } else {
        textContentMain.classList.add('body-18')
        textContentMain.classList.remove('body-16')
        btnMain.style.marginTop = ''
    }



    const heading = document.querySelector('.thirdBlock-cardTitle')
    if (window.innerWidth <= 840) {
        heading.outerHTML = '<h5 class="thirdBlock-cardTitle">Круто, ты дошел до третьего блока</h5>'
    } else {
        heading.outerHTML = '<h3 class="thirdBlock-cardTitle">Круто, ты дошел до третьего блока</h3>'
    }

    const titleContent = document.querySelectorAll('.titleContent')
    if (window.innerWidth <= 375) {
        titleContent.forEach(element => {
            element.outerHTML = '<h4 class="titleContent">Как это работает</h4>'
        })
    } else {
        titleContent.forEach(element => {
            element.outerHTML = '<h2 class="titleContent">Как это работает</h2>'
        })
    }

}

// Обновляем заголовок при загрузке страницы и изменении размера окна
window.addEventListener('load', updateHeading)
window.addEventListener('resize', updateHeading)