let ogrenciAdi = "Veysel";
let ogrenciNo = "24301003";
let dogumYili = 2000;
let bolum = "Bilgisayar Mühendisliği";
let mezunMu = false;
let notOrtalamasi = 0;
console.log(ogrenciAdi);
console.log(ogrenciNo);
console.log(dogumYili);
console.log(bolum);
console.log(mezunMu);
console.log(notOrtalamasi);
of ile tip kontrolü
console.log(typeof ogrenciAdi);
console.log(typeof ogrenciNo);
console.log(typeof dogumYili);
console.log(typeof bolum);
console.log(typeof mezunMu);
console.log(typeof notOrtalamasi);
let simdi = new Date().getFullYear();
let yas = simdi - dogumYili;
console.log(yas);
if (yas >= 0 && yas <= 6) {
    console.log("Bebek / Okul öncesi");
} else if (yas >= 7 && yas <= 14) {
    console.log("İlköğretim çağı");
} else if (yas >= 15 && yas <= 18) {
    console.log("Lise çağı");
} else if (yas >= 19 && yas <= 25) {
    console.log("Üniversite çağı");
} else if (yas >= 26 && yas <= 40) {
    console.log("Genç yetişkin");
} else if (yas >= 41 && yas <= 65) {
    console.log("Yetişkin");
} else if (yas > 65) {
    console.log("Emeklilik çağı");
} else {
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
console.log(Boolean(deger1));
console.log(Boolean(deger2));
console.log(Boolean(deger3));
console.log(Boolean(deger4));
console.log(Boolean(deger5));
console.log(Boolean(deger6));
console.log(Boolean(deger7));
console.log(Boolean(deger8));
let ayNo = 5;
let ayAdi = "";
switch (ayNo) {
    case 1:
        ayAdi = "Ocak";
        break;
    case 2:
        ayAdi = "Şubat";
        break;
    case 3:
        ayAdi = "Mart";
        break;
    case 4:
        ayAdi = "Nisan";
        break;
    case 5:
        ayAdi = "Mayıs";
        break;
    case 6:
        ayAdi = "Haziran";
        break;
    case 7:
        ayAdi = "Temmuz";
        break;
    case 8:
        ayAdi = "Ağustos";
        break;
    case 9:
        ayAdi = "Eylül";
        break;
    case 10:
        ayAdi = "Ekim";
        break;
    case 11:
        ayAdi = "Kasım";
        break;
    case 12:
        ayAdi = "Aralık";
        break;
    default:
        ayAdi = "Geçersiz ay numarası";
}
console.log(ayAdi);
