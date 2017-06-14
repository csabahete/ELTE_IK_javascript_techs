# ELTE_IK_javascript_techs

Javascript technológiák beadandó

A feladat egy szerver- és egy kliensoldali alkalmazás elkészítése lesz, tetszőleges Javascriptes technológiák felhasználásával. Akár az órán látott (express + react-redux), vagy egészen más (pl.: koa + angular2) technológiák is használhatók.

Feladat

A Caesar-kódolás megvalósítása lesz a feladat a következő módon:

Egy kliensnek meg kell adnia egy kulcsot (tetszőleges string).
A kulcsot elküldi a szervernek, majd a szerver válaszol, hogy az adott kulcshoz milyen eltolás tartozik.
Az eltolás ismeretében a kliens oldali alkalmazás képes elkódolni/visszafejteni egy szöveget.
A kódolandó/dekódolandó szövegben az angol ábécé betűi, illetve szóközök szerepelhetnek. Az ábécé betűit a kódolásnak megfelelően kódoljuk, a szóközt hagyjuk helyben.
A megvalósítás részletei

Néhány architektúrális, illetve működési követelményt is támasztunk az alkalmazás egyes részeivel szemben.

Kliens-oldal

A kliens-oldali alkalmazást single page application-ként valósítsuk meg, azaz a szerverrel legfeljebb ajax útján kommunikáljon.
Az alkalmazás két képernyőből álljon. Egy a kulcs beírásához, egy pedig a kódoláshoz.
Szerver-oldal

Az alkalmazás a kulcsokat csak memóriában tárolja. Az egyetlen végpontját egy JSON-t visszaadó tetszőleges végpontként valósítsuk meg.
Minden kulcshoz tároljunk egy számot, hogy egy újabb lekéréskor ugyanazt adjuk vissza.
Egy még nem ismert kulcs beérkezése esetén generáljunk egy eltolást, amit aztán mentsünk le.
Az alkalmazás akár teljesen állapotmentesen is megvalósítható. Ekkor az eltolást egy "tiszta" stringből számot képező függvény segítségével tudjuk megkeresni.
   
Példa: Józsi és Sanyi szeretnének titkosítva beszélgetni, ehhez ezt az alkalmazást használják. Megbeszélik, hogy a kulcsuk az 'almafa' szöveg lesz. Mindketten beírják az alkalmazás felületének első oldalán, hogy 'almafa', majd továbbnavigálnak a következő képernyőre. Ott Józsi beírja az elküldendő üzenetet, majd megkapja az elkódolt üzenetet. Az elkódolt üzenetet elküldi Sanyinak, amit Sanyi bemásol, és megkapja a dekódolt üzenetet. Majd ezt fordítva, ameddig így szeretnének beszélgetni. (A megkapja rész történhet automatikusan, kattintással, vagy tetszőleges módon.)