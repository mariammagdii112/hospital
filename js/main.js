window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // يمكنك تغيير القيمة حسب الحاجة
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


var x = document.querySelector('#first-Q'); // تأكد من أن معرف العنصر يبدأ بـ #
var answerElement = document.getElementById('answer'); // الحصول على عنصر الإجابة
var firstItem = document.querySelector('.first-item'); // العنصر الذي تريد تغيير ارتفاعه

// دالة لتغيير ارتفاع العنصر بناءً على حالة الإجابة
function change() {
    // التحقق إذا كان النص فارغًا أو موجودًا
    if (answerElement.innerHTML === "") {
        firstItem.style.height = "130px"; // إرجاع الارتفاع إلى 130px عند إخفاء النًص

    } else {
        firstItem.style.height = "200px"; // تغيير الارتفاع عند إظهار النص
        answerElement.style.opacity = "1"; // جعل النص مرئي
    }
}

// دالة لاستدعاء البيانات عند النقر
function getdata() {
    // تحقق مما إذا كان المحتوى موجودًا بالفعل
    if (answerElement.innerHTML === "") {
        answerElement.innerHTML = "To book an appointment, visit the clinic page, scroll down, select the doctor's name and the desired time, and click 'Submit.' You will receive a confirmation email once your appointment is successfully booked.";
        answerElement.style.transition = "opacity 1s linear";

    } else {
        answerElement.innerHTML = ""; // إذا كان المحتوى موجودًا، قم بإزالته\\

    }

    // استدعاء دالة change لتغيير الارتفاع بعد تحديث المحتوى
    change();

    return false;
}

// إضافة حدث النقر
x.addEventListener('click', getdata);
// //////////////////////////////////////////////////////////////////////////


