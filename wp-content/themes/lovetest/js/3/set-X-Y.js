$(document).ready(function() {



    var femaleActiveSign =  $('a#female_sign_X').text();
    var maleActiveSign =  $('a#male_sign_Y').text();

    femaleActiveSign = getActiveSign(femaleActiveSign);
    maleActiveSign = getActiveSign(maleActiveSign);

    setActiveSign(femaleActiveSign, 'fill-pink');
    setActiveSign(maleActiveSign, 'fill-blue');

    drawSvgLine(femaleActiveSign,maleActiveSign);


    function drawSvgLine(femaleActiveSign, maleActiveSign) {

                $('.line-on-click').removeClass('line-on-click');

                var femaleNum = getActiveSignNumber(femaleActiveSign);
                var maleNum = getActiveSignNumber(maleActiveSign);

                var Substr = femaleNum - maleNum;
                    Substr = Math.abs(Substr);
                var lineTypeMessage;
                var lineTypeMessageAdd;

                var angle = 0;
                var lineType = 0;

                if(femaleNum > maleNum) {
                    lineType = femaleNum - maleNum;
                    angle = maleNum*30;
                    if (Substr > 6) {
                        angle = -1*30*(12-femaleNum);

                    }
                } else {
                    lineType = maleNum - femaleNum;
                    angle = femaleNum*30;
                    if (Substr > 6) {
                        angle = -1*30*(12-maleNum);

                    }
                }

                switch(lineType) {
                    case 0: lineTypeMessage = '«Я и мое зеркало»'; lineTypeMessageAdd = '— Два медведя в одной берлоге'; break;
                    case 1: lineTypeMessage = '«Лучший друг и лучший враг»'; lineTypeMessageAdd = '— Стерпится-слюбится'; break;
                    case 2: lineTypeMessage = '«Старший брат и младший брат»'; lineTypeMessageAdd = '— Друзья и братья навек!'; break;
                    case 3: lineTypeMessage = '«Покровитель и советник»'; lineTypeMessageAdd = '— Скорее деловой союз'; break;
                    case 4: lineTypeMessage = '«Родитель и ребенок»'; lineTypeMessageAdd = '— Гармоничный союз!'; break;
                    case 5: lineTypeMessage = '«Удав и кролик»';  lineTypeMessageAdd = '— Мелодрама с реками слез'; break;
                    case 6: lineTypeMessage = '«Противоположности притягиваются»'; lineTypeMessageAdd = '— Это будет непросто, но интересно'; break;

                    case 7: lineType = 5; lineTypeMessage = '«Удав и кролик»'; lineTypeMessageAdd = '— Трагическая мелодрама'; break;
                    case 8: lineType = 4; lineTypeMessage = '«Родитель и ребенок»'; lineTypeMessageAdd = '— Гармоничный союз!'; break;
                    case 9: lineType = 3; lineTypeMessage = '«Покровитель и советник»'; lineTypeMessageAdd = '— Скорее деловой союз'; break;
                    case 10: lineType = 2; lineTypeMessage = '«Старший брат и младший брат»'; lineTypeMessageAdd = '— Друзья и братья навек!'; break;
                    case 11: lineType = 1; lineTypeMessage = '«Лучший друг и лучший враг»'; lineTypeMessageAdd = '— Стерпится-слюбится'; break;
                }



                if (maleNum != -1 && femaleNum != -1) {
                    $('.line-0-'+lineType + '').addClass('line-on-click');
                    $('#0_'+lineType + '').attr('transform','rotate(0 250 250)');
                    $('#0_'+lineType + '').attr('transform','rotate('+ angle + ' 250 250)');

                } else {
                    return felse
                }
    }




});


function getActiveSign(sign) {

    var signOnCircle = '';

    switch (sign) {
        case 'Овен': signOnCircle = 'oven';	break;
        case 'Телец': signOnCircle = 'telets';	break;
        case 'Близнецы': signOnCircle = 'bliznecy';	break;
        case 'Рак': signOnCircle = 'rak';	break;
        case 'Лев': signOnCircle = 'lev';	break;
        case 'Дева': signOnCircle = 'deva';	break;
        case 'Весы': signOnCircle = 'vesy';	break;
        case 'Скорпион': signOnCircle = 'skorpion';	break;
        case 'Стрелец': signOnCircle = 'strelets';	break;
        case 'Козерог': signOnCircle = 'kozerog';	break;
        case 'Водолей': signOnCircle = 'vodoley';	break;
        case 'Рыбы': signOnCircle = 'riby';	break;
    }

    return signOnCircle
}



function setActiveSign(sign, signClass) {
    $('.' + signClass).removeClass(signClass);

    $('.'+ sign + '-svg').addClass(signClass);
    $('.'+ sign + '-svg').prev('.sign-name').addClass('sign-on');
}

function getActiveSignNumber(sign) {

    var signNumber = '';

    switch (sign) {
        case 'oven': signNumber = 0;	break;
        case 'telets': signNumber = 1;	break;
        case 'bliznecy': signNumber = 2;	break;
        case 'rak': signNumber = 3;	break;
        case 'lev': signNumber = 4;	break;
        case 'deva': signNumber = 5;	break;
        case 'vesy': signNumber = 6;	break;
        case 'skorpion': signNumber = 7;	break;
        case 'strelets': signNumber = 8;	break;
        case 'kozerog': signNumber = 9;	break;
        case 'vodoley': signNumber = 10;	break;
        case 'riby': signNumber = 11;	break;
        case 'no sign': signNumber = -1;	break;
    }

    return signNumber
}
