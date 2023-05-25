function checkRegistration() {
    let input = document.getElementById("input").value;
    let pattern = /^[a-zA-Z0-9_.,?]+$/;

    if (input === "") {
        alert("Вы не заполнили поле");
        return false;
    }

    if (input.length <= 4) {
        alert("Пожалуйста, введите минимум 4 символа");
        return false;
    }

    if (!pattern.test(document.getElementById("input").value)) {
        alert("Пожалуйста, не используйте эти символы - !@#$%^&*()");
        return false;
    }

}

document.getElementById('click').addEventListener('click', checkRegistration)