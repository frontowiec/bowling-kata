#Bowling kata
Aplikacja mająca na celu obliczenie wyniku gry w bowling na podstawie ilości zrzuconych kręgli w danych rundach. 

Aplikacja nie zapewnia:

* sprawdzenia poprawności rzutów
* sprawdzenia poprawności prawidłowej ilości rzutów i rund
* wyników dla pośrednich rund

## Reguły domenowe
* Każda gra składa się z 10 `ramek (frame)` każda ramka z dwóch `rzutów (throw)`.
* W każdym rzucie `gracz (bowler)` stara się strącić wszystkie `kręgle (pins)`.
* Jeśli gracz w pierwszym rzucie strąci wszystkie kręgle runda jest zakończona, a jego wynikiem jest tzw. `strike` w którym gracz otrzymuje 10 punktów plus liczba punktów równa liczbie kręgli strąconych w dwóch następnych rzutach.
* Jeśli gracz strąci wszystkie kręgle w drugim rzucie to runda jest zakończona, a jego wynikiem jest tzw. `spare` w którym gracz otrzymuje 10 punktów plus liczba punktów równa liczbie kręgli strąconych w następnym rzucie.
* Jeśli podczas ramki nie uda się mu zrzucić wszystkich kręgli, jego wynikiem jest liczba zrzuconych kręgli.
* Jeśli podczas ostatniej (10 rundy) gracz rzuci spare lub strike dostaje  odpowiednio jeden lub dwa rzuty dodatkowo. Rzuty te są podejmowane w ramach obecnej rundy. 
Jeśli w dodatkowej rundzie gracz strąci wszystkie kręgle, proces nie zostaje powtórzony, a strącone kręgle są dodawane do punktacji.
* `Wynik (score)` gry jest sumą zdobytych punktacji w każdej z ramek.

**Wskazówka**
Podczas zdobycia strike lub spare nie można obliczyć wyniku dla rundy dopóki nie rozpoczną się następne dwie lub jedna runda.

## Przypadki testowe (Test Cases)
* 