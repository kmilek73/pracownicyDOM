const PoliczWyplaty = () => {


    var allClass = document.getElementsByClassName('pracownik'); // pobranie kolekcji ze wszystkimi elementami o określonej klasie
    var allClassLen = (allClass.length); // długość tablicy

    for (let i = 1; i <= allClassLen; i++) {
        //pobranie listy pracownik - minus jedna klasa
        let getPracownik = document.getElementById('pracownik' + [i]);
        let czasP = getPracownik.querySelector('.czas'); //pobranie clasy matematyka
        let czasPracy = czasP.getAttribute('value'); //pobranie atrybutu value
        let stawkaP = getPracownik.querySelector('.stawka'); //pobranie clasy matematyka
        let stawkaPracy = stawkaP.getAttribute('value'); //pobranie atrybutu value

        let czasPracyLiczba = parseFloat(czasPracy);
        let stawkaPracyLiczba = parseFloat(stawkaPracy);


        if (czasPracyLiczba > 160) {
            let sumaDoWyplaty = ((czasPracyLiczba - 160) * stawkaPracyLiczba + (stawkaPracyLiczba * czasPracyLiczba));
            let wstawWyplate = getPracownik.querySelector('.wyplata');
            wstawWyplate.innerText = (sumaDoWyplaty);
        } else {
            let sumaDoWyplaty = (stawkaPracyLiczba * czasPracyLiczba);
            let wstawWyplate = getPracownik.querySelector('.wyplata');
            wstawWyplate.innerText = (sumaDoWyplaty);
        }


        if (czasPracy < 100) {
            let zmienTlo = getPracownik.querySelector('.pracownik'); //pobranie clasy uczeń
            zmienTlo.classList.add('red'); //dodanie clasy green do pola uczeń
            let zmienTloCzas = getPracownik.querySelector('.czas'); //pobranie clasy uczeń
            zmienTloCzas.classList.add('red'); //dodanie clasy green do pola uczeń
            let zmienTloStawka = getPracownik.querySelector('.stawka'); //pobranie clasy uczeń
            zmienTloStawka.classList.add('red'); //dodanie clasy green do pola uczeń
            let zmienTloWyplata = getPracownik.querySelector('.wyplata'); //pobranie clasy uczeń
            zmienTloWyplata.classList.add('red'); //dodanie clasy green do pola uczeń
        }




    }
    for (i = 1; i < 4; i++) {
        let getPracownik = document.getElementById('pracownik' + [i]);
         let czasP = getPracownik.querySelector('.czas'); //pobranie clasy matematyka
        let czasPracy = czasP.getAttribute('value'); //pobranie atrybutu value
        let wstawOl = document.createElement('ol');
        document.body.appendChild(wstawOl);
        let wstaw = document.createElement('li');
         wstaw.innerText = (czasPracy);
        wstaw.classList.add('pracownik');
        wstawOl.appendChild(wstaw);


    }


  /*   let getClassPracownik = document.querySelector('.pracownik');
    let getPracz = getClassPracownik.getAttribute('value')
    console.log(getPracz) */

}



let btn = document.getElementById('oblicz')
btn.addEventListener('click', PoliczWyplaty);