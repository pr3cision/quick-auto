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

    const insertFooterHtml = contenuFooter.innerHtml;

    let contenuFooter = '<h1> allo ?? </h1>';

    insertFooterHtml.innerHtml = contenuFooter;
    console.log(myFooter);
}