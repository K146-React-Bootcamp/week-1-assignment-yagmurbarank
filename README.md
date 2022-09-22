## week-1-assignment

Cookie ve Session Storage ile set ve get işlemleri nasıl yapılır ? 

script.js dosyası içerisinde örneklerle açıklayınız.

Cookies (Çerezler)

Çerezler, bilgisayarınızda küçük metin dosyalarında saklanan verilerdir.
Bir web sunucusu bir tarayıcıya bir web sayfası gönderdiğinde, bağlantı kapatılır ve sunucu kullanıcı hakkında her şeyi unutur.
Çerezler, "kullanıcı hakkındaki bilgilerin nasıl hatırlanacağı" sorununu çözmek için icat edilmiştir.
Bir kullanıcı bir web sayfasını ziyaret ettiğinde, adı bir çerezde saklanabilir.
Kullanıcı sayfayı bir sonraki ziyaretinde, çerez onun adını "hatırlar".
Bir tarayıcı bir sunucudan bir web sayfası istediğinde, sayfaya ait çerezler talebe eklenir. Bu şekilde sunucu, kullanıcılar hakkındaki bilgileri "hatırlamak" için gerekli verileri alır.
Çerezler, ad-değer çiftlerine kaydedilir: username = Yagmur


 
 Session Storage
 
  Session Storage mantığı tıpkı session cookies (geçici çerezler) gibidir. sessionStorage nesnesi, yalnızca bir oturum için veri depolar. (Tarayıcı kapatıldığında veriler silinir). Tarayıcı kapanana kadar veya sekme kapanana kadar veriler kaybolmaz. Session Storage özelliği Javascript ile kullanılır. Depolama işlemleri yapılırken HTML5 ile birlikte hazır olarak gelen sessionStorage nesnesinden yararlanılır. 
