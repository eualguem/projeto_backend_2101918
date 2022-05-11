function trabalho(he, me, se, hs, ms, ss) { 
    resultado1 = ((he * 3600) + (me * 60) + se);
    resultado2 = ((hs * 3600) + (ms * 60) + ss);
    trabalhou = (resultado2 - resultado1);
    horas=Math.floor(trabalhou/3600);
    hora=(trabalhou%3600);
    mins=Math.floor(hora/60);
    mins2=hora%60;
    if (he >= 8 && me >= 00 && se >= 00 && hs <= 18 && resultado2 < 64801 ){
        console.log("trabalhou", horas,"horas",mins,"minutos",mins2,"segundos");
    }
    else {
        console.log("intoduziu horas erradas");
    }
}
trabalho(12, 10, 00, 18, 00, 00)