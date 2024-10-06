let haveCarrot = false;
let haveBitterGourd = false;
let haveFish = true;
console.log( haveCarrot==true || haveBitterGourd==true || haveFish==true )

let todayWeather = 'rainy';
if(todayWeather=='sunny'){
    console.log('洛特會跟呆呆出門去逛街兜風約會');
    }else if(todayWeather == 'cloudy'){
    console.log('洛特會出門慢跑');
    }else if(todayWeather == 'rainy'){
    console.log('洛特會待在家裡玩樂高');
    }else if(todayWeather == 'snowy'){
    console.log('洛特會跟呆呆去堆雪人約會');
    }else{
    console.log('其他天氣狀態');
    }

    let studentGrades = 105;
    if (studentGrades < 0 || studentGrades > 100) {
        console.log('成績無效，不要亂打成績!，請輸入 0 到 100 之間的分數');
    } else if (studentGrades >= 90) {
        console.log('太厲害了!獲得評價為 A');
    } else if (studentGrades >= 80) {
        console.log('不錯喔~ 獲得評價為 B');
    } else if (studentGrades >= 70) {
        console.log('不會的弄懂，還可以再更好喔~ 獲得評價為 C');
    } else if (studentGrades >= 60) {
        console.log('是不是沒讀書! 差點要不及格了 獲得評價為 D');
    } else {
        console.log('太混了!給我去補考! 獲得評價為 F');
    }

    let myTemperature = 37.3;
    console.log(myTemperature);
    if(myTemperature >= 37.5){
        console.log('溫度過高!不得進入');
    }else if(myTemperature <= 37.5){
        console.log('溫度正常，請進入');
    }

    let mingGrades = 70;
    console.log(mingGrades)
    if(mingGrades>100 || mingGrades<0){
        console.log('成績輸入錯誤，請輸入0~100之間數字');
    }else if(mingGrades>=60){
        console.log('成績及格');
    }else{
        console.log('成績不及格');
    }

    let lotteGender = 'male';
    let waistLine = 99;

    if(lotteGender == 'female'){
        if(waistLine > 80){
            console.log('女生體型過胖');
        }else if(waistLine < 80){
            console.log('女生體型正常')

        }    
    }else if(lotteGender == 'male'){
        if(waistLine > 90){
            console.log('男生體型過胖');
        }else if(waistLine < 90){
            console.log('男生體型正常')
        }
    }
