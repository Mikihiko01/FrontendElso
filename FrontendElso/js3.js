var versTomb = [
    {
        versCim: "Metró",
        szerzo:"Varró Dániel",
        vers:"az alagút<br>most énelőttem ásít,<br>s eljutnom több mint bonyolult<br>a kívánt állomásig.<br><br>S míg kattog egyre távolabb<br>haladva lent a metró,<br>halkan kattog a bőr alatt<br>az ember szíve dettó.<br><br>Ó, bár ne kéne lógnia,<br>föladva minden elvét!<br>Ez itt egy allegória,<br>ha nem tűnt volna fel még.<br><br>Hisz látod, éppen így megyek<br>hogy földerítsem, úgy ám,<br>felszín alatti énedet<br>a lélek mélyvasútján.<br><br>De megvívnám bár érted, ó,<br>én héroszok tusáját,<br>nem jutok el hozzád a szó<br>szűk labirintusán át.<br><br>S a vágy metróján, hol az ok<br>zord ellenőre szétcsap,<br>mint potyautas utazok,<br>azt kell hogy mondjam, én csak.<br><br>Mert nincsen matricám, se más,<br>jegy, bérlet, bármi érvény,<br>a benned rejlő állomást<br>hogy egyszer is elérném.<br><br>S meglelve benned messzi, tág,<br>mély állomások mását,<br>meghallanám a bőrön át<br>a szíved kattogását." ,
        kep:"kepek/kep1.jpg"
    },
    {
        versCim:"Lusták Dala",
        szerzo:"Tóth Krisztina",
        vers:"Gyere lusta, feküdj mellém,<br>kezdjünk együtt lustálkodni,<br>és csak lógjunk itt egész nap,<br>mint kötélen fél pár zokni!<br><br>Gyere, bújj be mellém, lusta,<br>mondjuk el, mit nem csinálunk!<br>Most arról készüljön lista,<br>mi minden nem lesz ma nálunk!<br><br>Nem lesz itt ma nyelvtanlecke,<br>olyat lusták nem csinálnak.<br>Cerka se lesz kihegyezve,<br>és az öltözés is várhat.<br><br>Lego nem lesz itt ma rendben,<br>nem lesz mosdás, nem lesz séta!<br>Nehogy már mozdulni kelljen!<br>Elterülünk, mint a béka.<br><br>Szemetet ma nem viszünk le,<br>piszkos edényt nem mosunk el.<br>Aki fel próbálna hívni,<br>csak csöngessen, annak úgy kell!<br><br>Ez a lusták napja, vagy mi,<br>átalusszuk az egészet,<br>tessék minket békén hagyni,<br>ágyba kérjük az ebédet!",
        kep:"kepek/kep2.jpg"
    },
];
$(function(){
    $("#elso").on("click", elsorekattint);
    $("#masodik").on("click", masodikrakattint);
    
});
function elsorekattint(){
    for (let i = 0; i < 1; i++) {
        const element = versTomb[0];
        $(".elem1").append("<div><h3>"+element["versCim"] + "</h3>" + "<p>"+[element.vers] + "</p>"+"<p>"+element.szerzo+"</p></div>");
        
    }
}
function masodikrakattint(){
    for (let i = 1; i < 2; i++) {
        const element = versTomb[1];
        $(".elem2").append("<div><h3>"+element["versCim"] + "</h3>" + "<p>"+ [element.vers] + "</p>"+"<p>"+element.szerzo+"</p></div>");
        
    }
}
