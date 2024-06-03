let funcToComputed = function (svgBoxList, side) {
    for (let i = 0; i < svgBoxList.length; i++) {
        // let el = getComputedStyle(svgBoxList.children().children()[i]);
        let el = getComputedStyle(svgBoxList.children()[i]);
        console.log(el)
        // console.log(svgBoxList.children().children()[i])
        let elHeight = parseInt(el.height);

        // console.log(svgBoxList[i].parentNode)

        let viewBox = "0 0 " + elWidth + " " + elHeight;

        svgBoxList.children()[i].setAttribute("viewBox", viewBox);
        svgBoxList.children()[i].setAttribute("width", elWidth);
        // svgBoxList.children().children()[i].setAttribute("width",elWidth);
        svgBoxList.children()[i].setAttribute("height", elHeight);
        side === 'bottom' ? elHeight = parseInt(el.height) : elHeight = parseInt(el.height) - 3;
        // Для высоты блока через высоту свг
        side === 'bottom' ? svgBoxList[i].parentNode.style.marginBottom = elHeight * 2 + 'px' : svgBoxList[i].parentNode.style.marginTop = elHeight * 2 + 'px';
        // side === 'bottom' ? svgBoxList[i].parentNode.style.marginBottom = elHeight * 2 + 'px' : svgBoxList[i].parentNode.style.marginTop = elHeight * 2 + 'px';
        // side === 'bottom' ? svgBoxList[i].children().children()[0].style.transform.scaleX = 0.2 : svgBoxList[i].parentNode.style.marginTop = elHeight * 2 + 'px';

        console.log()

        console.log(elHeight);
        // console.log(typeof elHeight);
        console.log(viewBox);
        // console.log(svgBoxList.children().children()[i]);

        side === 'bottom' ? svgBoxList[i].style.bottom = '-' + elHeight + 'px' : svgBoxList[i].style.top = '-' + elHeight + 'px';
    }
}

let desktops_block = $('.desktop');
let laptops_block = $('.laptop');
let mobiles_block = $('.mobile');
console.log('LSDAPKCSANC:CKN', desktops_block);

let hide_other_block = function (first_hide_block, second_hide_block, show_block) {
    for (let i = 0; i < first_hide_block.children.length; i++) {
        // first_hide_block.children()[i].css.display = "none";
        // console.log(first_hide_block.children()[i])
        // console.log(first_hide_block[i]);
    }
    for (let i = 0; i < second_hide_block.length; i++) {
        // second_hide_block[i].css.display = "none";
    }
    for (let i = 0; i < show_block.length; i++) {
        // show_block[i].show();
    }
}

let team = $('#team');
// let elWidth = window.innerWidth;
let elWidth = window.screen.availWidth;
// console.log(elWidth);
let absoluteBotImg = $('.absolute-bot-img');
let absoluteTopImg = $('.absolute-top-img');
funcToComputed(absoluteBotImg, 'bottom');
funcToComputed(absoluteTopImg, 'top');

if (elWidth >= 768) {
    hide_other_block(laptops_block, mobiles_block, desktops_block );
} else if (elWidth >= 475) {
    hide_other_block(mobiles_block, desktops_block, laptops_block);
} else {
    hide_other_block(desktops_block, laptops_block, mobiles_block);
}