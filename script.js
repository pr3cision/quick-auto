// @ts-ignore

window.onload = __onPageLoad();


function __onPageLoad() {
    _insertNavBar();
    _insertFooter();
}

function _insertNavBar(){
    const myNav = document.getElementById('myNavbar');

    console.log(myNav);
}

function _insertFooter(){
    const myFooter = document.getElementById('myFooter');
    const myFooterTemplate = document.getElementById('myFooterTemplate')
    
    myFooter.innerHTML = ('<h1> balalald </h1> <p>nlsdksd<p>')
    console.log(myFooterTemplate);
}