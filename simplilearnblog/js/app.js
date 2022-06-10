// Current Date
const currentDate = new Date();
const dateTime = `${currentDate.toLocaleString('default', {weekday:'long'})}, ${currentDate.toLocaleString('default', {month: 'short'})} ${currentDate.getDate().toString().padStart(2,0)}, ${currentDate.getFullYear()}`
document.getElementById('currentDate').innerHTML = dateTime;

// Header Search
const headerSearch = document.querySelector('#headerSearch');
headerSearch.addEventListener('click',function() {
    document.querySelector('.HeaderSearch').classList.toggle('searchShow');
})
const hideSearch = document.querySelector('#hideSearch');
hideSearch.addEventListener('click', function(){
    document.querySelector('.HeaderSearch').classList.remove('searchShow');
})

// About Hamburger
const aboutShow = document.querySelector('#desktopHamburger');
const aboutSidebar = document.querySelector('.aboutSideBar');
const backShadow = '<div class="backshadow" onclick="hidebackShadow()"></div>';
aboutShow.addEventListener('click',function(){
    document.querySelector('.aboutSideBar').classList.add('showAbout');
    aboutSidebar.insertAdjacentHTML("afterend", backShadow);
})
const hideAboutSide = document.querySelector('#hideAboutSideBar');
hideAboutSide.addEventListener('click',function(){
    document.querySelector('.aboutSideBar').classList.remove('showAbout');
    const backShadowDiv = document.querySelector('.backshadow');
    backShadowDiv.remove();
})

function hidebackShadow(){
    document.querySelector('.aboutSideBar').classList.remove('showAbout');
    const backShadowDiv = document.querySelector('.backshadow');
    backShadowDiv.remove();
}

