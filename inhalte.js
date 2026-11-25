// =====================================================================
//  HIER STEHEN DIE TEXTE
// =====================================================================
//
//  Für jeden Tag gibt es einen Eintrag mit:
//    titel:  kurze Überschrift (darf auch leer bleiben: titel: "")
//    quelle: (optional) kleine Zeile unter dem Titel, z. B. der Dichter
//    text:   das Gedicht oder die Nachricht
//    bild:   (optional) Dateiname eines Bildes im Ordner "bilder",
//            z. B. bild: "bilder/tag1.jpg"
//
//  Wichtig:
//  - Den Text zwischen den `Backticks` schreiben. Zeilenumbrüche werden
//    genau so angezeigt, wie sie hier stehen.
//  - Das Zeichen ` selbst darf im Text nicht vorkommen.
//
// =====================================================================

const KALENDER = {
  ueberschrift: "Für Fabio",
  untertitel: "Jeden Tag ein Türchen",

  // Ab dem 1. Dezember dieses Jahres geht jeden Tag ein neues Türchen auf.
  jahr: 2026,

  tage: {
    1: {
      titel: "For Fabio",
      quelle: "nach Edgar Allan Poe, „Annabel Lee“",
      text: `But our love it was stronger by far than the love
Of those who were older than we—
Of many far wiser than we—
And neither the angels in Heaven above
Nor the demons down under the sea
Can ever dissever my soul from the soul
Of my beautiful Fabio;`,
    },

    2: {
      titel: "Stitched Together",
      text: `If I'm a girl of scraps and thread,
then you're the needle, love —
you sewed my broken edges shut
with moonlight from above.
And if one day the seams should fray
and time pulls us apart,
just stitch me to your side again,
right up against your heart.`,
    },

    3: {
      titel: "When We Are Old",
      text: `When we are old and grey as dust,
in rocking chairs that creak,
I'll still steal glances at your face
and blush across my cheek.
Your hands will shake, my hair will thin,
the clocks will tick us slow —
but I will love you, wrinkled, worn,
as much as long ago.`,
    },

    4: {
      titel: "Two Graves, One Window",
      text: `Let's share a grave beneath the yew
with one small window round,
so we can watch the seasons turn
together underground.
Your bones beside my bones, my love,
your skull against my own —
the earth can keep our bodies, dear,
but never us alone.`,
    },

    5: {
      titel: "Sonnet 43",
      quelle: "Elizabeth Barrett Browning (Ausschnitt)",
      text: `I love thee with the love I seemed to lose
With my lost saints. I love thee with the breath,
Smiles, tears, of all my life; and, if God choose,
I shall but love thee better after death.`,
    },

    6: {
      titel: "Dwa duchy",
      text: `Kiedy umrzemy, kochany,
zamieszkamy na strychu,
dwa duchy w starym domu,
tańczące walca po cichu.
Będziemy straszyć sąsiadów
i śmiać się w świetle księżyca –
bo dla miłości, najdroższy,
śmierć to nie jest granica.`,
    },

    7: {
      titel: "Haunt Me",
      text: `Promise me, love, if you go first,
you'll haunt me every night,
you'll rattle chains outside my door
and flicker every light.
And if I go before you do,
I'll wait in the hallway, dear —
a ghost who keeps the kettle warm
until you're finally here.`,
    },

    8: {
      titel: "Когда часы пробьют тринадцать",
      text: `Когда часы пробьют тринадцать
и выйдет из тумана тень,
я буду там тебя дожидаться,
как ждала тебя каждый день.
И даже смерть нам не помеха —
мы станем призраками вдвоём
и будем с тихим смехом
кружиться в доме своём.`,
    },

    9: {
      titel: "Wild Nights",
      quelle: "Emily Dickinson (Ausschnitt)",
      text: `Wild nights – Wild nights!
Were I with thee
Wild nights should be
Our luxury!`,
    },

    10: {
      titel: "The Raven Saw Us",
      text: `A raven watched us from the oak
the night you held my hand,
he cocked his head and blinked his eyes
as if to understand.
He didn't croak a "Nevermore,"
he didn't fly away —
he knew that what he witnessed there
was love that's here to stay.`,
    },

    11: {
      titel: "To the Bone",
      text: `I love you to the very bone,
and past the bone, my dear —
when flesh is gone and skin is dust,
I'll still be holding here.
Two skeletons in Sunday best,
still tangled, hand in hand —
let archaeologists one day
try hard to understand.`,
    },

    12: {
      titel: "Jeden kamień",
      text: `Wyryję nasze imiona
na jednym zimnym kamieniu,
żeby wiedział każdy przechodzień,
kto tu śpi w wiecznym cieniu.
Dwa imiona, jedna data –
tej chwili, gdy cię poznałam,
bo wtedy, mój ukochany,
naprawdę żyć zaczęłam.`,
    },

    13: {
      titel: "The House on Hollow Lane",
      text: `There's a crooked house on Hollow Lane
with ivy on the door,
and that's where we'll grow old, my love,
and creak across the floor.
And when we're gone, the house will hum
with footsteps, soft and two —
the neighbours swear they hear a waltz.
It's me, still dancing with you.`,
    },

    14: {
      titel: "Невеста",
      text: `Я надену фату из тумана
и букет из осенних цветов,
и скажу тебе «да» без обмана —
на века, на сто тысяч веков.
Пусть пройдёт наша жизнь, словно вечер,
пусть остынет под нами земля —
даже там, где кончаются свечи,
я останусь навеки твоя.`,
    },

    15: {
      titel: "You Thawed Me",
      text: `You found me frozen, cold as snow,
a heart of ice and stone,
then held me close one winter night
and warmed me to the bone.
So if the world turns cold again
and every fire dies,
I'll only need one thing to burn:
the candle in your eyes.`,
    },

    16: {
      titel: "To One in Paradise",
      quelle: "Edgar Allan Poe (Ausschnitt)",
      text: `Thou wast that all to me, love,
For which my soul did pine—
A green isle in the sea, love,
A fountain and a shrine,
All wreathed with fairy fruits and flowers,
And all the flowers were mine.`,
    },

    17: {
      titel: "Two Dolls on a Shelf",
      text: `We're two old dolls upon a shelf,
your button eye is gone,
my lace has yellowed, seams have split —
and still we're leaning on.
No child will ever play with us,
the dust is soft and deep —
but you are close enough to touch,
and that is all I keep.`,
    },

    18: {
      titel: "Kiedy będziemy starzy",
      text: `Kiedy będziemy starzy,
siwi jak jesienna mgła,
usiądziemy na ganku
i powiem ci: „To ja.
Ta sama dziewczyna,
co kocha cię od lat –
i będę cię kochać dalej,
gdy skończy się nasz świat.”`,
    },

    19: {
      titel: "Candle",
      text: `Our love's a candle, burning low
in some forgotten room,
the wax runs down like silver tears,
the flame defies the gloom.
And when at last the wick is gone
and darkness takes its due,
the smoke will curl up toward the stars
and spell the name of you.`,
    },

    20: {
      titel: "Два крылатых сердца",
      text: `Пусть люди спят, а мы с тобою
летим над спящею землёю —
два сердца, тёмных и крылатых,
в любви навеки виноватых.`,
    },

    21: {
      titel: "For Fabio",
      quelle: "nach Edgar Allan Poe, „Annabel Lee“",
      text: `For the moon never beams, without bringing me dreams
Of my beautiful Fabio;
And the stars never rise, but I feel the bright eyes
Of my beautiful Fabio;`,
    },

    22: {
      titel: "Dance With Me Forever",
      text: `When frost bites hard in late December
and bones come out to play,
I'll take your bony hand in mine
and waltz the night away.
Your skull will wear that crooked hat,
my ribs a ribbon red —
we danced like this when we were young,
we'll dance like this when dead.`,
    },

    23: {
      titel: "Letter to the Moon",
      text: `Dear Moon, I'm writing you tonight
to tell you what I've found:
a man who loves my shadows too
and never turns around.
So shine on him a little more
when I'm not there to see,
and tell him, when he looks at you,
that you're a note from me.`,
    },

    24: {
      titel: "Goodnight, Forever",
      text: `"Goodnight," I'll whisper, very old,
and close my tired eyes,
but don't you cry, my love, my own —
this isn't our goodbye.
I'll wait for you beyond the dark,
a ghost in lace and grey,
and then we'll haunt this world, us two,
forever and a day.`,
    },
  },
};
