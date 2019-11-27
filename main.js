$(document).ready(function(){
    // Mostra la prima immagine
    $('.immagine-carosello:first').show();
    // Dichiaro una variabile in cui memorizzo l'indice dell'iimagine attuale
    var immagine_attuale = 0;
    // Aggungo il colore nero al pallino attuale corrispondente all'immagine immagine_attuale
    $('.pallini>span:first').addClass('nero');

    // Cambio immagine cliccando sul pallino
    $('.punto').click(function() {
        // Rimuovo il colore nero dal pallino mediante l'indice dell'immagine attuale
        $('.punto').eq(immagine_attuale).removeClass('nero');
        // Aggiungo il colore nero al pallino cliccato
        $(this).addClass('nero');
        // Nascondo l'immagine attualmente presente
        $('.immagine-carosello').eq(immagine_attuale).hide();
        // Aggiorno l'indice dell'immagine attuale
        immagine_attuale = $(this).data('numeroimmagine') - 1;
        // Mostro l'immagine successiva (quella relativa al pallino cliccato)
        $('.immagine-carosello').eq(immagine_attuale).show();
    });

    // Cambio immagine cliccando sulla freccia destra
    $('.avanti').click(function() {
        // Nascondo l'immagine attualmente presente
        $('.immagine-carosello').eq(immagine_attuale).hide();
        // Rimuovo il colore nero dal pallino mediante l'indice dell'immagine attuale
        $('.punto').eq(immagine_attuale).removeClass('nero');
        if (immagine_attuale < 5) {
            immagine_attuale++;
        } else {
            immagine_attuale = 0;
        }
        // Mostro l'immagine successiva
        $('.immagine-carosello').eq(immagine_attuale).show();
        // Aggiungo il colore nero al pallino
        $('.punto').eq(immagine_attuale).addClass('nero');
    });

    // Cambio immagine cliccando sulla freccia sinistra
    $('.indietro').click(function() {
        // Nascondo l'immagine attualmente presente
        $('.immagine-carosello').eq(immagine_attuale).hide();
        // Rimuovo il colore nero dal pallino mediante l'indice dell'immagine attuale
        $('.punto').eq(immagine_attuale).removeClass('nero');
        if (immagine_attuale > 0) {
            immagine_attuale--;
        } else {
            immagine_attuale = 5;
        }
        // Mostro l'immagine successiva
        $('.immagine-carosello').eq(immagine_attuale).show();
        // Aggiungo il colore nero al pallino
        $('.punto').eq(immagine_attuale).addClass('nero');
    });
});
