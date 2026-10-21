// Находим элементы на странице
const btnVerify = document.getElementById("verify");
const btnSend   = document.getElementById("send");
const msgBox    = document.getElementById("message");

// По клику на «Проверить» — считаем и показываем результат
btnVerify.addEventListener("click", checkInterval);

function checkInterval() {
    // Считываем значения из полей и превращаем в числа
    const x = parseFloat(document.getElementById("X").value);
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);

    // Проверка на корректность ввода
    if (isNaN(x) || isNaN(a) || isNaN(b)) {
        document.getElementById("result").value = "Ошибка ввода";
        msgBox.textContent = "Введите корректные числа во все поля.";
        msgBox.className = "result-box fail";
        return;
    }

    if (a > b) {
        document.getElementById("result").value = "Ошибка: a > b";
        msgBox.textContent = "Начало отрезка a должно быть меньше или равно b.";
        msgBox.className = "result-box fail";
        return;
    }

    // Основная проверка: x ∈ [a, b]  ⇔  a <= x <= b
    let answer;
    let text;
    if (x >= a && x <= b) {
        answer = "принадлежит";
        text   = "Число " + x + " ПРИНАДЛЕЖИТ отрезку [" + a + ", " + b + "].";
        msgBox.className = "result-box ok";
    } else {
        answer = "не принадлежит";
        text   = "Число " + x + " НЕ принадлежит отрезку [" + a + ", " + b + "].";
        msgBox.className = "result-box fail";
    }

    // Записываем результат в поле формы — оно уйдёт на сервер при отправке
    document.getElementById("result").value = answer;
    msgBox.textContent = text;
}

// Необязательно: проверять автоматически при отправке формы,
// чтобы на сервер не ушло «не определен»
btnSend.addEventListener("click", function (e) {
    const current = document.getElementById("result").value;
    if (current === "не определен" || current.indexOf("Ошибка") === 0) {
        e.preventDefault();
        alert("Сначала нажмите «Проверить», чтобы вычислить результат.");
    }
});