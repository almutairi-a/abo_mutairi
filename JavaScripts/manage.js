const button = document.getElementById('sub');
const button1 = document.getElementById('copy');
const types = document.getElementById('types');
const msg = document.getElementById('msg');
const msg1 = document.getElementById('msg1');
const msg2 = document.getElementById('msg2');

const id = document.getElementById('disid');
const links = document.getElementById('links');
const opt = document.getElementById('opt');

button.addEventListener('click', function() {
    var score = document.querySelector('input[name="types"]:checked').value;
    msg.textContent = "Score: " + score
    if(score == "سحب") {
        if(links.value == "رابط السجل" || links.value == "") {
            msg.textContent = "حط رابط سجل"
        }

        if(opt.value == "اغراض" || opt.value == "") {
            msg.textContent = "حط اغراض او غرض"
        }

        if(id.value == "ايديه دسكورد" || id.value == "") {
            msg.textContent = "حط ايدي دسكورد"
        }

        msg.textContent = `<@${id.value}>`
        msg1.textContent = `**سبب مصادرتك ${opt.value} من مركبة غير مالك؟**`
        msg2.textContent = `${links.value}`
    } else if(score == "ايداع") {
        if(links.value == "رابط السجل" || links.value == "") {
            msg.textContent = "حط رابط سجل"
        }

        if(opt.value == "اغراض" || opt.value == "") {
            msg.textContent = "حط اغراض او غرض"
        }

        if(id.value == "ايديه دسكورد" || id.value == "") {
            msg.textContent = "حط ايدي دسكورد"
        }

        msg.textContent = `<@${id.value}>`
        msg1.textContent = `**سبب ايداعك ${opt.value} من مركبة غير مالك؟**`
        msg2.textContent = `${links.value}`
    }
})

$(document).ready(function () {

    $('.menu').click(function() {
        $('.overlay').toggleClass('anim');
        $(this).addClass('open')
    });

    $('.open').click(function(){
        $('.overlay').toggleClass('reverse-animation');
    })
});

button1.addEventListener('click', function() {
var inp = document.createElement('input')
document.body.appendChild(inp)
inp.value = `<@${id.value}>
**سبب سحبك ${opt.value} من مركبة غير مالك؟**
${links.value}`
inp.select()
document.execCommand('copy', false)
inp.remove();
})