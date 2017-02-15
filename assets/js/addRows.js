
$('input').removeAttr('onfocus');
div = document.createElement('div');
div.setAttribute('id','rows');

numberInput = document.createElement('input');
numberInput.setAttribute('type','text');
numberInput.setAttribute('class','textbox');
numberInput.setAttribute('placeholder','№')
numberInput.setAttribute('style','width:5%')
numberInput.setAttribute('maxlength','2');
div.appendChild(numberInput);

groupInput = document.createElement('input');
groupInput.setAttribute('type','text');
groupInput.setAttribute('class','textbox');
groupInput.setAttribute('placeholder','Група')
groupInput.setAttribute('style','width:8%')
groupInput.setAttribute('maxlength','3');
div.appendChild(groupInput);

lessonInput = document.createElement('input');
lessonInput.setAttribute('type','text');
lessonInput.setAttribute('class','textbox');
lessonInput.setAttribute('placeholder','Предмет')
lessonInput.setAttribute('style','width:33%')
div.appendChild(lessonInput);

nameInput = document.createElement('input');
nameInput.setAttribute('type','text');
nameInput.setAttribute('class','textbox');
nameInput.setAttribute('placeholder','ПІП')
nameInput.setAttribute('style','width:33%')
div.appendChild(nameInput);

lastInput = document.createElement('input');
lastInput.setAttribute('type','text');
lastInput.setAttribute('type','text');
lastInput.setAttribute('class','textbox');
lastInput.setAttribute('placeholder','Аудиторія');
lastInput.setAttribute('style','width:13%');
lastInput.setAttribute('maxlength','4');
lastInput.setAttribute('onfocus','add()');
div.appendChild(lastInput);

buttonApply = document.createElement('input');
buttonApply.setAttribute('type','submit');
buttonApply.setAttribute('value','Відправити');
buttonApply.setAttribute('id','add');

document.getElementById('schedule').appendChild(div);
document.getElementById('schedule').appendChild(buttonApply);

function add()
{
    $('input').removeAttr('onfocus');
    $('#add').remove();
    div = document.createElement('div');
    div.setAttribute('id','rows');

    numberInput = document.createElement('input');
    numberInput.setAttribute('type','text');
    numberInput.setAttribute('class','textbox');
    numberInput.setAttribute('placeholder','№')
    numberInput.setAttribute('style','width:5%')
    numberInput.setAttribute('maxlength','2');
    div.appendChild(numberInput);

    groupInput = document.createElement('input');
    groupInput.setAttribute('type','text');
    groupInput.setAttribute('class','textbox');
    groupInput.setAttribute('placeholder','Група')
    groupInput.setAttribute('style','width:8%')
    groupInput.setAttribute('maxlength','3');
    div.appendChild(groupInput);

    lessonInput = document.createElement('input');
    lessonInput.setAttribute('type','text');
    lessonInput.setAttribute('class','textbox');
    lessonInput.setAttribute('placeholder','Предмет')
    lessonInput.setAttribute('style','width:33%')
    div.appendChild(lessonInput);

    nameInput = document.createElement('input');
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('class','textbox');
    nameInput.setAttribute('placeholder','ПІП')
    nameInput.setAttribute('style','width:33%')
    div.appendChild(nameInput);

    lastInput = document.createElement('input');
    lastInput.setAttribute('type','text');
    lastInput.setAttribute('type','text');
    lastInput.setAttribute('class','textbox');
    lastInput.setAttribute('placeholder','Аудиторія');
    lastInput.setAttribute('style','width:13%');
    lastInput.setAttribute('maxlength','4');
    lastInput.setAttribute('onfocus','add()');
    div.appendChild(lastInput);

    buttonApply = document.createElement('input');
    buttonApply.setAttribute('type','submit');
    buttonApply.setAttribute('value','Відправити');
    buttonApply.setAttribute('id','add');

    document.getElementById('schedule').appendChild(div);
    document.getElementById('schedule').appendChild(buttonApply);

}
