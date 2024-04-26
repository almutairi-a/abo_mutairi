const button = document.getElementById('sub');

button.addEventListener('click', function() {
    var score = document.getElementById('types').value;
    const result = document.getElementById("result");
    result.innerHTML = score;

    if(score == "الشفت_الصباحي") {
        result.innerHTML = score;
        var TypeM = document.getElementById('typeM').value;
        if(TypeM == "الميناء_الرئيسي") {
            result.innerHTML = `**تم استلام اشراف الميناء البحري الرئيسي وكان تقييم الوحدات كالاتي :
            <br><br>\`مشرف G-40\`<br><br>
            ${getID("1", "typeS1")}<br>
            <br>\`تفتيش اسماك\`<br><br>
            ${getID("2", "typeS2")}<br>
            <br>\`مشرف G-42\`<br><br>
            ${getID("3", "typeS3")}<br>
            <br>\`الدوريات الحره\`<br><br>
            ${getID("4", "typeS4")}<br><br>
            ${getID("5", "typeS5")}<br><br>
            ${getID("6", "typeS6")}<br><br>
            ${getID("7", "typeS7")}<br><br>
            ${getID("8", "typeS8")}<br><br>
            ${getID("9", "typeS9")}<br><br>
            ${getID("10", "typeS10")}<br><br>

            <@${document.getElementById("owner").value}> \`/ مقدم التقرير ${document.getElementById("rank").value} ✍️\`<br><br>

            ${document.getElementById("11").value} \`/ التقرير 📄\`**
            `
        } else if(TypeM == "التوسعه_1") {
            result.innerHTML = `**تم استلام اشراف التوسعه ( 1 ) وكان تقييم الوحدات كالاتي :<br>
            <br>\`وحدات التوسعة ( 1 )\`<br><br>
            ${getID("1", "typeS1")}<br><br>
            ${getID("2", "typeS2")}<br><br>
            ${getID("3", "typeS3")}<br><br>
            ${getID("4", "typeS4")}<br><br>
            ${getID("5", "typeS5")}<br><br>
            ${getID("6", "typeS6")}<br><br>
            ${getID("7", "typeS7")}<br><br>
            ${getID("8", "typeS8")}<br><br>
            ${getID("9", "typeS9")}<br><br>
            ${getID("10", "typeS10")}<br><br>

            <@${document.getElementById("owner").value}> \`/ مقدم التقرير ${document.getElementById("rank").value} ✍️\`<br><br>

            ${document.getElementById("11").value} \`/ التقرير 📄\`**
            `
        } else if(TypeM == "التوسعه_2") {
            result.innerHTML = `**تم استلام اشراف التوسعه ( 2 ) وكان تقييم الوحدات كالاتي :<br>
            <br>\`وحدات التوسعة ( 2 )\`<br><br>
            ${getID("1", "typeS1")}<br><br>
            ${getID("2", "typeS2")}<br><br>
            ${getID("3", "typeS3")}<br><br>
            ${getID("4", "typeS4")}<br><br>
            ${getID("5", "typeS5")}<br><br>
            ${getID("6", "typeS6")}<br><br>
            ${getID("7", "typeS7")}<br><br>
            ${getID("8", "typeS8")}<br><br>
            ${getID("9", "typeS9")}<br><br>
            ${getID("10", "typeS10")}<br><br>

            <@${document.getElementById("owner").value}> \`/ مقدم التقرير ${document.getElementById("rank").value} ✍️\`<br><br>

            ${document.getElementById("11").value} \`/ التقرير 📄\`**
            `
        } else if(TypeM == "التوسعه_3") {
            result.innerHTML = `**تم استلام اشراف التوسعه ( 3 ) وكان تقييم الوحدات كالاتي :<br>
            <br>\`وحدات التوسعة ( 3 )\`<br><br>
            ${getID("1", "typeS1")}<br><br>
            ${getID("2", "typeS2")}<br><br>
            ${getID("3", "typeS3")}<br><br>
            ${getID("4", "typeS4")}<br><br>
            ${getID("5", "typeS5")}<br><br>
            ${getID("6", "typeS6")}<br><br>
            ${getID("7", "typeS7")}<br><br>
            ${getID("8", "typeS8")}<br><br>
            ${getID("9", "typeS9")}<br><br>
            ${getID("10", "typeS10")}<br><br>

            <@${document.getElementById("owner").value}> \`/ مقدم التقرير ${document.getElementById("rank").value} ✍️\`<br><br>

            ${document.getElementById("11").value} \`/ التقرير 📄\`**
            `
        } else if(TypeM == "التوسعه_3_4") {
            result.innerHTML = `**تم استلام اشراف التوسعه ( 3 - 4 ) وكان تقييم الوحدات كالاتي :<br>
            <br>\`وحدات التوسعة ( 3 - 4 )\`<br><br>
            ${getID("1", "typeS1")}<br><br>
            ${getID("2", "typeS2")}<br><br>
            ${getID("3", "typeS3")}<br><br>
            ${getID("4", "typeS4")}<br><br>
            ${getID("5", "typeS5")}<br><br>
            ${getID("6", "typeS6")}<br><br>
            ${getID("7", "typeS7")}<br><br>
            ${getID("8", "typeS8")}<br><br>
            ${getID("9", "typeS9")}<br><br>
            ${getID("10", "typeS10")}<br><br>

            <@${document.getElementById("owner").value}> \`/ مقدم التقرير ${document.getElementById("rank").value} ✍️\`<br><br>

            ${document.getElementById("11").value} \`/ التقرير 📄\`**
            `
        } else if(TypeM == "مشرف_عام") {
            result.innerHTML = `**تم استلام اشراف عام وكان تقييم المشرفين كالاتي :<br>
            <br>${getStatsV2("1", "typeS1", "\`مشرف الميناء الرئيسي :\`")}<br>
            <br>${getStatsV2("2", "typeS2", "\`مشرف توسعه 1 :\`")}<br>
            <br>${getStatsV2("3", "typeS3", "\`مشرف توسعه 2 :\`")}<br>
            <br>${getStatsV2("4", "typeS4", "\`مشرف توسعه 3 :\`")}<br>
            <br>${getStatsV2("5", "typeS5", "\`مشرف توسعه 3 - 4 :\`")}<br>
            <br>${getStatsV2("6", "typeS6", "\`مركز العمليات :\`")}<br><br>

            <@${document.getElementById("owner").value}> \`/ مقدم التقرير ${document.getElementById("rank").value} ✍️\`<br><br>

            ${document.getElementById("11").value} \`/ التقرير 📄\`**
            `
        } else if(TypeM == "الجناح_الجوي") {
            result.innerHTML = `**﷽ <br><br>
            تم تأمين ( ${document.getElementById("1").value} ) من قبل ${document.getElementById("2").value}<br><br>
            الكود :<br>
            ${document.getElementById("3").value}<br>
            ${document.getElementById("4").value}<br><br>
            مدة تفعيل الواحدة ( ${document.getElementById("5").value} ) ساعة داخل المقاطعة<br><br>
            من الساعة ${document.getElementById("6").value} ألى الساعة ${document.getElementById("7").value}<br><br>
            التقرير : ${document.getElementById("8").value} <br>${document.getElementById("9").value}<br><br>
            <@${document.getElementById("10").value}>`
        }
    } else if(score == "الشفت_المسائي") {
        var TypeM = document.getElementById('typeM').value;
        if(TypeM == "ساندي") {
            result.innerHTML = `**تم استلام اشراف ساندي وكان تقييم الوحدات كالاتي :
            <br><br>${getIDL2("1", "typeS1", "\`S-11\`")}<br>
            <br>${getIDL2("2", "typeS2", "\`S-12\`")}<br>
            <br>${getIDL2("3", "typeS3", "\`S-21\`")}<br>
            <br>${getIDL2("4", "typeS4", "\`S-22\`")}<br>
            <br>${getIDL2("5", "typeS5", "\`S-31\`")}<br>
            <br>${getIDL2("6", "typeS6", "\`S-32\`")}<br><br>

            <@${document.getElementById("owner").value}> \`/ مقدم التقرير ${document.getElementById("rank").value} ✍️\`<br><br>

            ${document.getElementById("11").value} \`/ التقرير 📄\`**
            `
        } else if(TypeM == "بليتو"){
            result.innerHTML = `**تم استلام اشراف بليتو وكان تقييم الوحدات كالاتي :
            <br><br>${getIDL2("1", "typeS1", "\`P-11\`")}<br>
            <br>${getIDL2("2", "typeS2", "\`P-12\`")}<br>
            <br>${getIDL2("3", "typeS3", "\`P-13\`")}<br>
            <br>${getIDL2("4", "typeS4", "\`P-20\`")}<br>
            <br>${getIDL2("5", "typeS5", "\`P-21\`")}<br>
            <br>${getIDL2("6", "typeS6", "\`P-22\`")}<br><br>

            <@${document.getElementById("owner").value}> \`/ مقدم التقرير ${document.getElementById("rank").value} ✍️\`<br><br>

            ${document.getElementById("11").value} \`/ التقرير 📄\`**
            `
        } else if(TypeM == "دعم_شرطة"){
            result.innerHTML = `**تم استلام اشراف دعم شرطة وكان تقييم الوحدات كالاتي :
            <br><br>${getIDL2("1", "typeS1", "\`L-11\`")}<br>
            <br>${getIDL2("2", "typeS2", "\`L-12\`")}<br>
            <br>${getIDL2("3", "typeS3", "\`L-21\`")}<br>
            <br>${getIDL2("4", "typeS4", "\`L-22\`")}<br>
            <br>${getIDL2("5", "typeS5", "\`L-31\`")}<br>
            <br>${getIDL2("6", "typeS6", "\`L-32\`")}<br>
            <br>${getIDL2("7", "typeS7", "\`L-41\`")}<br>
            <br>${getIDL2("8", "typeS8", "\`L-42\`")}<br>
            <br>${getIDL2("9", "typeS9", "\`L-51\`")}<br>
            <br>${getIDL2("10", "typeS10", "\`L-52\`")}<br><br>

            <@${document.getElementById("owner").value}> \`/ مقدم التقرير ${document.getElementById("rank").value} ✍️\`<br><br>

            ${document.getElementById("11").value} \`/ التقرير 📄\`**
            `
        } else if(TypeM == "مشرف_عام") {
            result.innerHTML = `**تم استلام اشراف عام وكان تقييم المشرفين كالاتي :<br>
            <br>${getStatsV3("1", "typeS1", `\`مشرف سطحات :\``)}<br>
            <br>${getStatsV3("2", "typeS2", `\`مشرف امن مقاطعة - ساندي :\``)}<br>
            <br>${getStatsV3("3", "typeS3", `\`مشرف امن مقاطعة - بليتو :\``)}<br>
            <br>${getStatsV3("4", "typeS4", `\`مشرف دعم شرطة :\``)}<br>
            <br>${getStatsV3("5", "typeS5", `\`مركز العمليات :\``)}<br><br>

            <@${document.getElementById("owner").value}> \`/ مقدم التقرير ${document.getElementById("rank").value} ✍️\`<br><br>

            ${document.getElementById("11").value} \`/ التقرير 📄\`**
            `
        }
    } else {
        
    }
})

function getID(string, string1) {
    var id = document.getElementById(string);

    if(id.value == "a") {
        return "";
    } else if(id.value == "none" || id.value == "") {
        return "لايوجد";
    } else {
        return "<@" + id.value + `><br><br>${getStats(string1)}`;
    }
}

function getIDL2(string, string1, string2) {
    var id = document.getElementById(string);

    if(id.value == "a") {
        return "";
    } else if(id.value == "none" || id.value == "") {
        return "لايوجد";
    } else {
        return `${string2}<br><br>` + "<@" + id.value + `><br><br>${getStats(string1)}`;
    }
}

function getStats(string) {
    var stats = document.getElementById(`${string}`).value;

    return stats;
}

function getStatsV2(string, string1, string2) {
    var stats = getStats(string1);
    var id = document.getElementById(string);
    if(id.value == "a") {
        return "";
    } else if(id.value == "none" || id.value == "") {
        return "لايوجد";
    } else {
        if(string1 == "typeS6") {
            if(stats == "ممتاز") {
                return `${string2}<br><br>
                <@${id.value}><br><br>
                ممتاز في توزيع الوحدات.<br>
                ممتاز في المتابعه.`
            } else if(stats == "جيد جدا") {
                return `${string2}<br><br>
                <@${id.value}><br><br>
                جيد جدا في توزيع الوحدات.<br>
                جيد جدا في المتابعه.`
            } else if(stats == "جيد") {
                return `${string2}<br><br>
                <@${id.value}><br><br>
                جيد في توزيع الوحدات.<br>
                جيد في المتابعه.`
            } else if(stats == "سيء") {
                return `${string2}<br><br>
                <@${id.value}><br><br>
                سيء في توزيع الوحدات.<br>
                سيء في المتابعه.`
            } else if(stats == "ضابط") {
                return `${string2}<br><br>
                <@${id.value}><br><br>
                ${stats}`
            } else if(stats == "قيادة") {
                return `${string2}<br><br>
                <@${id.value}><br><br>
                ${stats}`
            }
        } else {
            if(stats == "ممتاز") {
                return `${string2}<br><br>
                <@${id.value}><br><br>
                ممتاز في مهام الاشراف.<br>
                ممتاز في ارسال وحدات لتنظيم مناطق التصدير.<br>
                ممتاز الالتزام بسرعه داخل الموانئ.`
            } else if(stats == "جيد جدا") {
                return `${string2}<br><br>
                <@${id.value}><br><br>
                جيد جدا في مهام الاشراف.<br>
                جيد جدا في ارسال وحدات لتنظيم مناطق التصدير.<br>
                جيد جدا الالتزام بسرعه داخل الموانئ.`
            } else if(stats == "جيد") {
                return `${string2}<br><br>
                <@${id.value}><br><br>
                جيد في مهام الاشراف.<br>
                جيد في ارسال وحدات لتنظيم مناطق التصدير.<br>
                جيد الالتزام بسرعه داخل الموانئ.`
            } else if(stats == "سيء") {
                return `${string2}<br><br>
                <@${id.value}><br><br>
                سيء في مهام الاشراف.<br>
                سيء في ارسال وحدات لتنظيم مناطق التصدير.<br>
                سيء الالتزام بسرعه داخل الموانئ.`
            } else if(stats == "ضابط") {
                return `${string2}<br><br>
                <@${id.value}><br><br>
                ${stats}`
            } else if(stats == "قيادة") {
                return `${string2}<br><br>
                <@${id.value}><br><br>
                ${stats}`
            }
        }
    }
}

function getStatsV3(string, string1, name) {
    var stats = getStats(string1);
    var id = document.getElementById(string);
    if(id.value == "a") {
        return "";
    } else if(id.value == "none" || id.value == "") {
        return "لايوجد";
    } else {
        if(string1 == "typeS5") {
            if(stats == "ممتاز") {
                return `**${name}<br><br>
                <@${id.value}><br><br>
                ممتاز في توزيع الوحدات.<br>
                ممتاز في المتابعه.`
            } else if(stats == "جيد جدا") {
                return `${name}<br><br>
                <@${id.value}><br><br>
                جيد جدا في توزيع الوحدات.<br>
                جيد جدا في المتابعه.`
            } else if(stats == "جيد") {
                return `**${name}<br><br>
                <@${id.value}><br><br>
                جيد في توزيع الوحدات.<br>
                جيد في المتابعه.`
            } else if(stats == "سيء") {
                return `**${name}<br><br>
                <@${id.value}><br><br>
                سيء في توزيع الوحدات.<br>
                سيء في المتابعه.`
            } else if(stats == "ضابط") {
                return `**${name}<br><br>
                <@${id.value}><br><br>
                ${stats}`
            } else if(stats == "قيادة") {
                return `**${name}<br><br>
                <@${id.value}><br><br>
                ${stats}`
            }
        } else { 
            if(string1 == "typeS1") {
            if(stats == "ممتاز") {
                return `${name}<br><br>
                <@${id.value}><br><br>
                ممتاز في مهام الاشراف.<br>
                ممتاز في ارسال وحدات للتنظيف التوسعات من المركبات المهملة.`
            } else if(stats == "جيد جدا") {
                return `${name}<br><br>
                <@${id.value}><br><br>
                جيدا جدا في مهام الاشراف.<br>
                جيد جدا في ارسال وحدات للتنظيف التوسعات من المركبات المهملة.`
            } else if(stats == "جيد") {
                return `${name}<br><br>
                <@${id.value}><br><br>
                جيد في مهام الاشراف.<br>
                جيد في ارسال وحدات للتنظيف التوسعات من المركبات المهملة.`
            } else if(stats == "سيء") {
                return `${name}<br><br>
                <@${id.value}><br><br>
                سيء في مهام الاشراف.<br>
                سيء في ارسال وحدات للتنظيف التوسعات من المركبات المهملة.`
            } else if(stats == "ضابط") {
                return `${name}<br><br>
                <@${id.value}><br><br>
                ${stats}`
            } else if(stats == "قيادة") {
                return `${name}<br><br>
                <@${id.value}><br><br>
                ${stats}`
            }
           } else {
            if(stats == "ممتاز") {
                return `${name}<br><br>
                <@${id.value}><br><br>
                ممتاز في مهام الاشراف.<br>
                ممتاز في ارسال وحدات للحالات التاليه : { Code 4 - نداء الاستغاثة - الاستنفار الامني }.`
            } else if(stats == "جيد جدا") {
                return `${name}<br><br>
                <@${id.value}><br><br>
                جيدا جدا في مهام الاشراف.<br>
                جيد جدا في ارسال وحدات للحالات التاليه : { Code 4 - نداء الاستغاثة - الاستنفار الامني }.`
            } else if(stats == "جيد") {
                return `${name}<br><br>
                <@${id.value}><br><br>
                جيد في مهام الاشراف.<br>
                جيد في ارسال وحدات للحالات التاليه : { Code 4 - نداء الاستغاثة - الاستنفار الامني }.`
            } else if(stats == "سيء") {
                return `${name}<br><br>
                <@${id.value}><br><br>
                سيء في مهام الاشراف.<br>
                سيء في ارسال وحدات للحالات التاليه : { Code 4 - نداء الاستغاثة - الاستنفار الامني }.`
            } else if(stats == "ضابط") {
                return `${name}<br><br>
                <@${id.value}><br><br>
                ${stats}`
            } else if(stats == "قيادة") {
                return `${name}<br><br>
                <@${id.value}><br><br>
                ${stats}`
            }
        }
        }
    }
}

function checkNotNull(element) {
    if (element !== null) {
        return "is not null";
    } else {
        return "is null";
    }
}