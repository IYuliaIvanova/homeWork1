function getNameSurnamePatronymic(){
    let name = prompt("Введите ваше имя");
    let surname = prompt("Введите вашу фамилию");
    let patronymic = prompt("Введите ваше отчество");
    while (!name || !surname || !patronymic) {
        if(!name){
            name = prompt("Введите ваше имя еще раз");
        }
        else if(!surname){
            surname = prompt("Введите вашу фамилию еще раз");
        }
        else{
            patronymic = prompt("Введите ваше отчество еще раз");
        } 
    }

    return surname + " " + name + " " + patronymic
}

function getAge(){
    let age = +prompt("Введите ваш возраст");
    let str = "";
    while(!age){
        age = +prompt("Введите ваш возраст");
    }
    return age;
}

function getGender(){
    let gender = confirm("Ваш пол - мужской?");
    return gender ? "Вы мужчина" : "Вы женщина"
}

function inRetired(gender, age){
    let str = "";
    if (gender && age >= 65 || !gender && age >= 55) {
        str = "Да"
        return str
    } else {
        str = "Нет"
        return str
    }
}

let nameSurnamePatronymic = getNameSurnamePatronymic();
let age = getAge();
let gender = getGender();
let ageInDays = age * 365;
let ageInFiveYears = age + 5;
let retired = inRetired(gender, age);
alert(`Ваше ФИО: ${nameSurnamePatronymic}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${ageInDays}
Через 5 лет вам будет: ${ageInFiveYears}
Ваш пол: ${gender}
Вы на пенсии: ${retired}`);
