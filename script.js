//Cookies In JS

function setCookie(cname, cvalue, exdays) { //fonsiyonun parametreleri, çerezin adı (cname), çerezin değeri (cvalue) ve çerezin süresinin dolmasına kalan gün sayısı (exdays). olarak tanımlandı. 
     const d = new Date();   // d degişkenine tarih fonksiyonu atandı.
      d.setTime(d.getTime() + (exdays*24*60*60*1000));  //çerezin süresinin dolmasına kalan gün sayısı setTime fonsiyonu ile belirtildi.
      let expires = "expires="+ d.toUTCString();  //son kullanma tarihi eklendi (UTC saatinde).
       document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; 
 //setCookie fonksiyonu belirlendi.
}
 function getCookie(cname) {   //getCookiefonksiyonu parametre olarak sadece cookie adını alır ve o cookieye ait değeri bize getirir.
        var name = cname + "=";  //Aranacak metinle (cname + "=") bir değişken oluşturuldu.
        var decodedCookie = decodeURIComponent(document.cookie); //Tanımlama bilgilerini özel karakterlerle işlemek için tanımlama bilgisi dizesinin kodu.
        var ca = decodedCookie.split(';');  //Document.cookie'yi noktalı virgüllerle ca (ca = decodingCookie.split(';')) adlı bir diziye bölündü. 
        for (var i = 0; i < ca.length; i++) {  //ca dizisinde dolaşın (i = 0; i < ca.uzunluk; i++) ve her bir c = ca[i] değerini okunur.
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);              
                }
            if (c.indexOf(name) == 0) {        //Tanımlama bilgisi bulunursa (c.indexOf(name) == 0), tanımlama bilgisinin değerini döndürün (c.substring(name.length, c.length). 
                return c.substring(name.length, c.length);  //Çerez bulunamazsa, "" döndürün.
            }
        }
        return "";
    }

  setCookie("name", "Yagmur Baran", 15); // Şu andan itibaren 15 dakika saklanır.
  getCookie("name");   //Cookie Verisini Getirme.
  setCookie("name", "Yasemin",  15);  //Cookie Değerinin değiştirilmesi. name değişkenine Yagmur Baran yerine Yasemin yazıldı.
  setCookie("name", "Yasemin", -1); //Var olan Cookie Değerini silinmesi.
 
  //A Function to Check a Cookie

function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}
//Çerez ayarlanmışsa, bir karşılama mesajı görüntüler. Tanımlama bilgisi ayarlanmazsa, kullanıcının adını soran bir bilgi istemi kutusu görüntüler 
ve setCookie işlevini çağırarak kullanıcı adı tanımlama bilgisini 365 gün boyunca saklar
 
 //****************************************************************************************************************************************************************
 //Session Storage
 
 	sessionStorage.setItem(key, value);  //Session Storage'a Veri Ekleme.
	sessionStorage.setItem("isim","Yagmur"); //key= isim value=Yagmur.
  
  sessionStorage.getItem(key); //Session Storage'dan Veri Okuma
	sessionStorage.getItem("isim");
  
  sessionStorage.removeItem(key); //Session Storage'dan Veri Silme.
  sessionStorage.removeItem("isim");
  
  sessionStorage.clear(); //Session Storage'daki Tüm Verileri Silme.

