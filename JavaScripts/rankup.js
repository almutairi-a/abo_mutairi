const sub = document.getElementById('sub')

sub.addEventListener('click', function() {
    var code = document.getElementById('code').value;
    var cha1 = document.getElementById('cha1').value;
    var name = document.getElementById('name').value;
    var disid = document.getElementById('disid').value;
    var ranks = document.getElementById('ranks').value;
    var data = document.getElementById('data').value;
    var data1 = document.getElementById('data1').value;
    var allday = document.getElementById('allday').value;
    var days = document.getElementById('days').value;
    var g40 = document.getElementById('g40').value;
    var g42 = document.getElementById('g42').value;
    var mang = document.getElementById('mang').value;
    var d1 = document.getElementById('d1').value;
    var d2 = document.getElementById('d2').value;
    var d3 = document.getElementById('d3').value;
    var d4 = document.getElementById('d4').value;
    var d5 = document.getElementById('d5').value;
    var d6 = document.getElementById('d6').value;
    var d7 = document.getElementById('d7').value;
    var d8 = document.getElementById('d8').value;
    var d9 = document.getElementById('d9').value;
    var d10 = document.getElementById('d10').value;
    var typ = document.querySelector('input[name="typ"]:checked').value;
    var typ1 = document.querySelector('input[name="typ1"]:checked').value;
    var typ2 = document.querySelector('input[name="typ2"]:checked').value;
    var typ3 = document.querySelector('input[name="typ3"]:checked').value;
    var typ4 = document.querySelector('input[name="typ4"]:checked').value;
    var typ5 = document.querySelector('input[name="typ5"]:checked').value;
    var typ6 = document.querySelector('input[name="typ6"]:checked').value;
    var typ7 = document.querySelector('input[name="typ7"]:checked').value;
    var typ8 = document.querySelector('input[name="typ8"]:checked').value;
    var typ9 = document.querySelector('input[name="typ9"]:checked').value;
    var typ10 = document.querySelector('input[name="typ10"]:checked').value;
    var typ11 = document.querySelector('input[name="typ11"]:checked').value;
    var typ12 = document.querySelector('input[name="typ12"]:checked').value;
    var typ13 = document.querySelector('input[name="typ13"]:checked').value;
    var typ14 = document.querySelector('input[name="typ14"]:checked').value;
    var result = document.getElementById('result');

    result.innerHTML = `**صاحب التذكرة [ <#${cha1}> ] مكمل لجميع الشروط**<br><br>
- **\`بيانات الحارس :\`**<br>
  - **الاسم : ${name}**<br>
  - **الكود العسكري : ${code}**<br>
  - **الرتبة العسكرية : ${ranks}**<br>
  - **منشن للحارس : <@${disid}>**<br>
  - **الكوبي ايدي الخاص بالحارس : ${disid}**<br><br>

- **\`بيانات تخص تواريخ الحارس :\`**<br>
  - **التوظيف : ${data}**<br>
  - ${typ13 === "مطلوب" ? "**اخر ترقية : " + data1 + "**" : "~~**اخر ترقية :**~~"}<br><br>

- **\`بيانات تواجد الحارس :\`**<br>
  - **مجموع التقارير بشكل كامل : ${allday}**<br>
  - ${typ === "مطلوب" ? "**مجموع ايام الحضور : " + days + "**" : "~~**مجموع ايام الحضور :**~~"}<br>
  - ${typ3 === "مطلوب" ? "**مجموع تقارير نائب عمليات / العمليات : " + mang + "**" : "~~**مجموع تقارير نائب عمليات / العمليات :**~~"}<br>
  - ${typ1 === "مطلوب" ? "**مجموع تقارير مشرف G-40 : " + g40 + "**" : "~~**مجموع تقارير مشرف G-40 :**~~"}<br>
  - ${typ2 === "مطلوب" ? "**مجموع تقارير G-42 : " + g42 + "**" : "~~**مجموع تقارير G-42 :**~~"}<br><br>

- **\`بيانات دورات الحارس :\`**<br>
  - ${typ4 === "مطلوب" ? "**دورة شخصية الحارس : ✅ -** " + d1 : "~~**دورة شخصية الحارس :**~~"}<br>
  - ${typ5 === "مطلوب" ? "**دورة تاهيل الافراد : ✅ -** " + d2 : "~~**دورة تاهيل الافراد :**~~"}<br>
  - ${typ6 === "مطلوب" ? "**دورة العمليات : ✅ -** " + d3 : "~~**دورة العمليات :**~~"}<br>
  - ${typ7 === "مطلوب" ? "**دورة الدعم الجوي : ✅ -** " + d4 : "~~**دورة الدعم الجوي :**~~"}<br>
  - ${typ8 === "مطلوب" ? "**دورة السجن المركزي : ✅ -** " + d5 : "~~**دورة السجن المركزي :**~~"}<br>
  - ${typ9 === "مطلوب" ? "**دورة خفر سواحل : ✅ -** " + d6 : "~~**دورة خفر سواحل :**~~"}<br>
  - ${typ10 === "مطلوب" ? "**دورة حراسة الشخصية : ✅ -** " + d7 : "~~**دورة حراسة الشخصية :**~~"}<br>
  - ${typ11 === "مطلوب" ? "**دورة القوات الخاصة : ✅ -** " + d8 : "~~**دورة القوات الخاصة :**~~"}<br>
  - ${typ12 === "مطلوب" ? "**دورة الدعم و الاسناد : ✅ -** " + d9 : "~~**دورة الدعم و الاسناد :**~~"}<br><br>

- **\`ملاحظات :\`**<br>
  - ${typ14 === "مطلوب" ? "**" + d10 + "**" : "**لايوجد**"}<br><br>
**\`يحال الى :\` ( <@&568035184771858452> )**
`;
})