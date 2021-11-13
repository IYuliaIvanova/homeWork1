function findVowels(str) {
    let count = 0;
    let vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
    str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count += 1;
        } 
    }
    return count;
}

let str = prompt("Введите строку");
alert(findVowels(str));