goodTap = 0;
badTap = 0;
text = '';

array__text = [
    'Lorem ipsum dolor ',
    'Hello bro, give me consectetur adipisicing elit. Fugit quae placeat similique, ab eum omnis commodi alias vitae! Unde, esse. Quae explicabo reiciendis optio est rerum voluptate numquam impedit provident illum natus sequi, cumque laboriosam doloremque, consequatur harum vitae cum! Ratione quia soluta veniam deserunt nihil et consectetur? Inventore, aliquid? Yes u can.',
    'Your looking elit. Distinctio iure provident, optio quasi explicabo non! Rem, architecto explicabo at reprehenderit officia quibusdam voluptatibus assumenda harum aliquam deleniti illum aperiam provident minima exercitationem debitis, laborum cupiditate iste! Ratione cumque repellendus eveniet ab perspiciatis adipisci obcaecati, placeat vero nam mollitia, id officia.',
];

closePopUp__btn.onclick = function () {
    document.body.querySelector('.popUp__bg').style.opacity = 0;
    setTimeout(() => {
        document.body.querySelector('.popUp__bg').style.display = 'none';
    }, 500);
};

start__btn.onclick = function () {
    start__btn.style.display = 'none';
    end__btn.style.display = 'flex';
    badTap = 0;
    goodTap = 0;
    document.body.querySelector('#goodScore').innerHTML = goodTap;
    document.body.querySelector('#badScore').innerHTML = badTap;

    board.style.height = 240 + 'px';
    board.style.opacity = 1;

    goodScore.style.width = 80 + 'px';
    goodScore.style.height = 80 + 'px';
    goodScore.style.opacity = 1;
    badScore.style.width = 80 + 'px';
    badScore.style.height = 80 + 'px';
    badScore.style.opacity = 1;

    start__title.style.opacity = 0;
    setTimeout(() => {
        chouseText(array__text);
        createText();
        eventListener();
        start__title.style.display = 'none';
    }, 500);
};

end__btn.onclick = function () {
    endWritting();
    document.body.querySelector('.popUp__bg').style.display = 'none';
    document.body.querySelector('.board').innerHTML = '';
};

function chouseText(arr) {
    max = arr.length;
    k = Math.floor(Math.random() * (max - 0) + 0);
    text = arr[k];
    console.log(k);
}

upKey = false;
function eventListener() {
    document.addEventListener('keydown', clickKey);
}

function clickKey() {
    console.log(event.code);

    if (event.code == 'Space') {
        userKey = '&nbsp;';
    } else if (event.code == 'ShiftLeft') {
        upKey = true;
        return upKey;
    } else if (upKey == true && event.code == 'Slash') {
        userKey = '?';
    } else if (upKey == true && event.code == 'Digit1') {
        userKey = '!';
    } else if (upKey == true && event.code == 'Digit2') {
        userKey = '@';
    } else if (upKey == true && event.code == 'Digit3') {
        userKey = '#';
    } else if (upKey == true && event.code == 'Digit4') {
        userKey = '$';
    } else if (upKey == true && event.code == 'Digit9') {
        userKey = '(';
    } else if (upKey == true && event.code == 'Digit0') {
        userKey = ')';
    } else if (upKey == true) {
        userKey = event.code.slice(3);
    } else if (event.code == 'Comma') {
        userKey = ',';
    } else if (event.code == 'Period') {
        userKey = '.';
    } else if (event.code == 'Slash') {
        userKey = '/';
    } else if (event.code == 'Minus') {
        userKey = '-';
    } else if (event.code.slice(0, 5) == 'Digit') {
        userKey = event.code.slice(5);
    } else {
        userKey = event.code.slice(3).toLowerCase();
    }
    upKey = false;

    //
    if (userKey == text[0]) {
        text = text.slice(1);
        createText();
        giveGoodPoint();
    } else if (userKey == text.slice(0, 6)) {
        text = text.slice(6);
        createText();
        giveGoodPoint();
    } else {
        giveBadPoint();
    }
}

function createText() {
    if (text == '') {
        document.body.querySelector('.board').innerHTML = text;
        endWritting();
    } else if (text[0] == ' ') {
        text = text.slice(1);
        text = '&nbsp;' + text;
        document.body.querySelector('.board').innerHTML = text;
    } else {
        document.body.querySelector('.board').innerHTML = text;
    }
}

function giveGoodPoint() {
    goodTap++;
    document.body.querySelector('#goodScore').innerHTML = goodTap;
}

function giveBadPoint() {
    badTap++;
    document.body.querySelector('#badScore').innerHTML = badTap;
}
//
function endWritting() {
    end__btn.style.display = 'none';
    start__btn.style.display = 'flex';
    document.removeEventListener('keydown', clickKey);
    document.body.querySelector('#statsGood').innerHTML =
        'good written:' + goodTap;
    document.body.querySelector('#statsBad').innerHTML =
        'bad written:' + badTap;

    board.style.height = 0 + 'px';
    board.style.opacity = 0;

    document.body.querySelector('.popUp__bg').style.display = 'flex';
    setTimeout(() => {
        document.body.querySelector('.popUp__bg').style.opacity = 1;
    }, 500);

    goodScore.style.width = 0 + 'px';
    goodScore.style.height = 0 + 'px';
    goodScore.style.opacity = 0;
    badScore.style.width = 0 + 'px';
    badScore.style.height = 0 + 'px';
    badScore.style.opacity = 0;
}

console.log(text.length);
