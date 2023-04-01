let weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let num_day = 0
let start = new Date() 
let day = start.getDay()
console.log(day);

//1

switch (day) {
    case 1:
        console.log(weekday[day - 1]);
        break;
    case 1:
        console.log(weekday[day - 1]);
        break;
    case 2:
        console.log(weekday[day - 1]);
        break;
    case 3:
        console.log(weekday[day - 1]);
        break;
    case 4:
        console.log(weekday[day - 1]);
        break;
    case 5:
        console.log(weekday[day - 1]);
        break;
    case 6:
        console.log(weekday[day - 1]);
        break;
    default:
        console.log(weekday[weekday.length - 1]);
        break;

}

//2

if (day == 1) {
    console.log(weekday[day - 1]);
}
else if (day == 2) {
    console.log(day);
    console.log(weekday[day - 1]);
}
else if (day == 3) {
    console.log(day);
    console.log(weekday[day - 1]);
}
else if (day == 4) {
    console.log(day);
    console.log(weekday[day - 1]);
}
else if (day == 5) {
    console.log(day);
    console.log(weekday[day - 1]);
}
else if (day == 6) {
    console.log(day);
    console.log(weekday[day - 1]);
}
else  {
    console.log(day);
    console.log(weekday[day - 1]);
}
//3

console.log(day);
console.log(weekday[day - 1]);




