    let writing = document.getElementsByClassName(".miNombre") = str => {
        let arrFromStr = str.split('');
        let i = 0;
        let printStr = setInterval(function() {
            document.body.innerHTML += arrFromStr[i];
            i++;
            if (i === arrFromStr.length) {
                clearInterval(printStr);
            }
        }, 400);
    };
    writing("Gabriel Marzioli");