function getValidation(value){
    while (!value) {
        value = prompt("Введите еще раз");
    }
    return value
}

function getGender(){
    let gender = confirm("Ваш пол - мужской?");
    return gender ? "Вы мужчина" : "Вы женщина"
}

function inRetired(gender, age){
    if (gender && age >= 65 || !gender && age >= 55) {
        return "Да"
    } else {
        return "Нет"
    }
}

function getMessage() {
    let name = getValidation(prompt("Введите ваше имя"));
    let surname = getValidation(prompt("Введите вашу фамилию"));
    let patronymic = getValidation(prompt("Введите ваше отчество"));
    let age = getValidation(+prompt("Введите ваш возраст"));
    const gender = getGender();
    const ageInDays = age * 365;
    const ageInFiveYears = age + 5;
    const retired = inRetired(gender, age);
    alert(`Ваше ФИО: ${name + " " + surname + " " + patronymic}
    Ваш возраст в годах: ${age}
    Ваш возраст в днях: ${ageInDays}
    Через 5 лет вам будет: ${ageInFiveYears}
    Ваш пол: ${gender}
    Вы на пенсии: ${retired}`);
}

getMessage();

