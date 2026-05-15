
let ogrenciAdi = "Veysel";
let ogrenciNo = 123456;
let dogumYili = 2005;
let bolum = "Bilgisayar Mühendisliği";
let mezunMu = false;
let notOrtalamasi = 0;
console.log("Öğrenci Adı:", ogrenciAdi);
console.log("Öğrenci No:", ogrenciNo);
console.log("Doğum Yılı:", dogumYili);
console.log("Bölüm:", bolum);
console.log("Mezun Mu?:", mezunMu);
console.log("Not Ortalaması:", notOrtalamasi);
console.log("ogrenciAdi tipi:", typeof ogrenciAdi);
console.log("ogrenciNo tipi:", typeof ogrenciNo);
console.log("dogumYili tipi:", typeof dogumYili);
console.log("bolum tipi:", typeof bolum);
console.log("mezunMu tipi:", typeof mezunMu);
console.log("notOrtalamasi tipi:", typeof notOrtalamasi);
let yas = 2026 - dogumYili;
console.log("Yaş:", yas);
if (yas >= 0 && yas <= 6) {
    console.log("Bebek / Okul öncesi");
}
else if (yas >= 7 && yas <= 14) {
    console.log("İlköğretim çağı");
}
else if (yas >= 15 && yas <= 18) {
    console.log("Lise çağı");
}
else if (yas >= 19 && yas <= 25) {
    console.log("Üniversite çağı");
}
else if (yas >= 26 && yas <= 40) {
    console.log("Genç yetişkin");
}
else if (yas >= 41 && yas <= 65) {
    console.log("Yetişkin");
}
else if (yas > 65) {
    console.log("Emeklilik çağı");
}
else {
    console.log("Geçersiz yaş değeri");
}
let deger1 = "";
let deger2 = "JavaScript";
let deger3 = 0;
let deger4 = 42;
let deger5 = null;
let deger6 = "0";
let deger7 = [];
let deger8 = {};
console.log("deger1:", Boolean(deger1));
console.log("deger2:", Boolean(deger2));
console.log("deger3:", Boolean(deger3));
console.log("deger4:", Boolean(deger4));
console.log("deger5:", Boolean(deger5));
console.log("deger6:", Boolean(deger6));
console.log("deger7:", Boolean(deger7));
console.log("deger8:", Boolean(deger8));
let ayNo = 5;
switch (ayNo) {
    case 1:
        console.log("Ocak");
        break;

    case 2:
        console.log("Şubat");
        break;

    case 3:
        console.log("Mart");
        break;

    case 4:
        console.log("Nisan");
        break;

    case 5:
        console.log("Mayıs");
        break;

    case 6:
        console.log("Haziran");
        break;

    case 7:
        console.log("Temmuz");
        break;

    case 8:
        console.log("Ağustos");
        break;

    case 9:
        console.log("Eylül");
        break;

    case 10:
        console.log("Ekim");
        break;

    case 11:
        console.log("Kasım");
        break;

    case 12:
        console.log("Aralık");
        break;

    default:
        console.log("Geçersiz ay numarası");
}