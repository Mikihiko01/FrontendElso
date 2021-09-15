var vers = [
  {
    cim: "Metró",
    szerzo: "Varró Dániel",
    vers:
      "Hát elkapott ma, kiscicám,<br>az ellenőr a metrón.<br>Nem volt érvényes matricám,<br>kívánom, bárha lett vón.<br><br>Leszállított – az alagút<br>most énelőttem ásít,<br>s eljutnom több mint bonyolult<br>a kívánt állomásig.<br>S míg kattog egyre távolabb<br>haladva lent a metró,<br>halkan kattog a bőr alatt<br>az ember szíve dettó.<br><br>Ó, bár ne kéne lógnia,<br>föladva minden elvét!<br>Ez itt egy allegória,<br>ha nem tűnt volna fel még.<br><br>Hisz látod, éppen így megyek<br>hogy földerítsem, úgy ám,<br>felszín alatti énedet<br>a lélek mélyvasútján.<br><br>De megvívnám bár érted, ó,<br>én héroszok tusáját,<br>nem jutok el hozzád a szó<br>szűk labirintusán át.<br><br>S a vágy metróján, hol az ok<br>zord ellenőre szétcsap,<br>mint potyautas utazok,<br>azt kell hogy mondjam, én csak.<br><br>Mert nincsen matricám, se más,<br>jegy, bérlet, bármi érvény,<br>a benned rejlő állomást<br>hogy egyszer is elérném.<br><br>S meglelve benned messzi, tág,<br>mély állomások mását,<br>meghallanám a bőrön át<br>a szíved kattogását.",
    kep: "kepek/metro.jpg",
  },
];

$(function () {
    $("article").append("<div class=vers>");
    $(".vers").append("<h3>"+vers[0].cim+"</h3><p>"+vers[0].vers+"</p><p><i>"+vers[0].szerzo+"</i></p><img src='"+vers[0].kep+"' class=eltunik alt='metro'>");
    $("h3").hover(megjelenit);
});

function megjelenit(){
    $("img").toggle(".eltunik");
}


/* <img src='"+vers[0].kep+"' */