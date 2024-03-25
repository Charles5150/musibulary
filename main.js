const piano = `
<ul class="piano-keys">
  <li class="key white pitchClass00" ></li>
  <li class="key black pitchClass01" ></li>
  <li class="key white pitchClass02" ></li>
  <li class="key black pitchClass03" ></li>
  <li class="key white pitchClass04" ></li>
  <li class="key white pitchClass05" ></li>
  <li class="key black pitchClass06" ></li>
  <li class="key white pitchClass07" ></li>
  <li class="key black pitchClass08" ></li>
  <li class="key white pitchClass09" ></li>
  <li class="key black pitchClass10" ></li>
  <li class="key white pitchClass11" ></li>
</ul>
`;

const noteTypes = ["C", "D", "E", "F", "G", "A", "B"];
const notesCircle = {
  A: { next: "B", semitonesFromPrev: 2 },
  B: { next: "C", semitonesFromPrev: 2 },
  C: { next: "D", semitonesFromPrev: 1 },
  D: { next: "E", semitonesFromPrev: 2 },
  E: { next: "F", semitonesFromPrev: 2 },
  F: { next: "G", semitonesFromPrev: 1 },
  G: { next: "A", semitonesFromPrev: 2 },
};

/*
const originNotes = [
  { noteType: 0, pitchClass: 0, icon: 'C' },
  { noteType: 1, pitchClass: 2, icon: 'D' },
  { noteType: 2, pitchClass: 4, icon: 'E' },
  { noteType: 3, pitchClass: 5, icon: 'F' },
  { noteType: 4, pitchClass: 7, icon: 'G' },
  { noteType: 5, pitchClass: 9, icon: 'A' },
  { noteType: 6, pitchClass: 11, icon: 'B' },
  { noteType: 0, pitchClass: 1, icon: 'C#' },
  { noteType: 1, pitchClass: 3, icon: 'D#' },
  { noteType: 2, pitchClass: 5, icon: 'E#' },
  { noteType: 3, pitchClass: 6, icon: 'F#' },
  { noteType: 4, pitchClass: 8, icon: 'G#' },
  { noteType: 5, pitchClass: 10, icon: 'A#' },
  { noteType: 6, pitchClass: 0, icon: 'B#' },
  { noteType: 0, pitchClass: 11, icon: 'Cb' },
  { noteType: 1, pitchClass: 1, icon: 'Db' },
  { noteType: 2, pitchClass: 3, icon: 'Eb' },
  { noteType: 3, pitchClass: 4, icon: 'Fb' },
  { noteType: 4, pitchClass: 6, icon: 'Gb' },
  { noteType: 5, pitchClass: 8, icon: 'Ab' },
  { noteType: 6, pitchClass: 10, icon: 'Bb' },
];
*/
const originNotes = [
  { noteType: 0, pitchClass: 0, icon: "C" },
  { noteType: 1, pitchClass: 2, icon: "D" },
  { noteType: 2, pitchClass: 4, icon: "E" },
  { noteType: 3, pitchClass: 5, icon: "F" },
  { noteType: 4, pitchClass: 7, icon: "G" },
  { noteType: 5, pitchClass: 9, icon: "A" },
  { noteType: 6, pitchClass: 11, icon: "B" },
  { noteType: 0, pitchClass: 1, icon: "C#/Db" },
  { noteType: 1, pitchClass: 3, icon: "D#/Eb" },
  { noteType: 3, pitchClass: 6, icon: "F#/Gb" },
  { noteType: 4, pitchClass: 8, icon: "G#/Ab" },
  { noteType: 5, pitchClass: 10, icon: "A#/Bb" },
];

/*
const intervals = [
  { name: 'min. 9<sup>th</sup>', semitones: 1, distance: 1 },
  { name: 'maj. 9<sup>th</sup>', semitones: 2, distance: 1 },
  { name: 'aug. 9<sup>th</sup>', semitones: 3, distance: 1 },
  { name: 'min. 3<sup>rd</sup>', semitones: 3, distance: 2 },
  { name: 'maj. 3<sup>rd</sup>', semitones: 4, distance: 2 },
  { name: 'dim. 11<sup>th</sup>', semitones: 4, distance: 3 },
  { name: '11<sup>th</sup>', semitones: 5, distance: 3 },
  { name: 'aug. 11<sup>th</sup>', semitones: 6, distance: 3 },
  { name: 'dim. 5<sup>th</sup>', semitones: 6, distance: 4 },
  { name: '5<sup>th</sup>', semitones: 7, distance: 4 },
  { name: 'aug. 5<sup>th</sup>', semitones: 8, distance: 4 },
  { name: 'min. 13<sup>th</sup>', semitones: 8, distance: 5 },
  { name: 'maj. 13<sup>th</sup>', semitones: 9, distance: 5 },
  { name: 'min. 7<sup>th</sup>', semitones: 10, distance: 6 },
  { name: 'maj. 7<sup>th</sup>', semitones: 11, distance: 6 },
];
*/

const intervals = [
  { name: "b2<sup>nd</sup>", semitones: 1, distance: 1 },
  { name: "2<sup>nd</sup>", semitones: 2, distance: 1 },
  // { name: "#2<sup>nd</sup>", semitones: 3, distance: 1 },
  { name: "b3<sup>rd</sup>", semitones: 3, distance: 2 },
  { name: "3<sup>rd</sup>", semitones: 4, distance: 2 },
  // { name: "b4<sup>th</sup>", semitones: 4, distance: 3 },
  { name: "4<sup>th</sup>", semitones: 5, distance: 3 },
  { name: "#4<sup>th</sup>/b5<sup>th</sup>", semitones: 6, distance: 3 },
  // { name: "b5<sup>th</sup>", semitones: 6, distance: 4 },
  { name: "5<sup>th</sup>", semitones: 7, distance: 4 },
  { name: "#5<sup>th</sup>/b6<sup>th</sup>", semitones: 8, distance: 4 },
  // { name: "b6<sup>th</sup>", semitones: 8, distance: 5 },
  { name: "6<sup>th</sup>", semitones: 9, distance: 5 },
  { name: "b7<sup>th</sup>", semitones: 10, distance: 6 },
  { name: "7<sup>th</sup>", semitones: 11, distance: 6 },
];

const resultCombination = [];

originNotes.forEach((originNote) => {
  // const circleNote = notesCircle[originNote.icon.charAt(0)];
  /*
  const originKey = originNote.icon.charAt(0);
  const originAlteration = originNote.icon.charAt(1);

  let originAlterationNumber = 0;
  if (originAlteration !== "") {
    originAlterationNumber = originAlteration === "#" ? -1 : 1;
  }
  */
  intervals.forEach((interval) => {
    /*
    let currentDistance = 0;
    let totalSemitones = originAlterationNumber;
    let currentKey = `${originKey}`;
    while (currentDistance < interval.distance) {
      currentDistance++;

      currentKey = notesCircle[currentKey].next;

      totalSemitones += notesCircle[currentKey].semitonesFromPrev;
    }
    const destinationNote = currentKey;

    const alterationNumber = interval.semitones - totalSemitones;

    let alteration = "";
    if (alterationNumber < 0) {
      for (let i = 0; i < Math.abs(alterationNumber); i++) {
        alteration += "b";
      }
    }
    if (alterationNumber > 0) {
      for (let i = 0; i < Math.abs(alterationNumber); i++) {
        alteration += "#";
      }
      alteration = alteration.replace("##", "x");
    }
    */
    //const result = `${originNote.icon} ---> ${interval.name} ---> ${destinationNote}${alteration}`
    const result = {
      // originNote: originNote.icon,
      originNote: originNote.pitchClass,
      interval: interval.name,
      // destinationNote: destinationNote + alteration,
      destinationNote: originNotes.find((element) => {
        return (
          element.pitchClass ==
          (originNote.pitchClass + interval.semitones) % 12
        );
      }).pitchClass,
    };
    resultCombination.push(result);
  });
});

console.log(resultCombination);

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const discardDoubleAlterations = false;
const orderedDeck = [];
resultCombination.forEach((item) => {
  if (discardDoubleAlterations) {
    if (
      item.destinationNote.charAt(1) === "x" ||
      item.destinationNote.length > 2
    ) {
      console.log("discarded ", item.destinationNote);
      return;
    }
  }
  for (let i = 0; i < 3; i++) {
    // console.log({...item, hidden: i});
    orderedDeck.push({ ...item, hidden: i });
  }
});
const deck = shuffle(orderedDeck);
let currentCard = 0;
const appDiv = document.getElementById("app");
const originDiv = document.getElementById("origin");
const intervalDiv = document.getElementById("interval");
const destinationDiv = document.getElementById("destination");
const statsDiv = document.getElementById("stats");

let show = false;
let intervalClass;
let originClass;
let destinationClass;
const posibleClasses = [
  "bounceInRight",
  "bounceInLeft",
  "bounceInUp",
  "bounceInDown",
];
const posibleOutClasses = [
  "fadeOutRightBig",
  "fadeOutLeftBig",
  "fadeOutUpBig",
  "fadeOutDownBig",
];
document.onmousedown = () => {
  console.log("mousedown");
  statsDiv.innerHTML = `${currentCard + 1}/${deck.length}`;
  // originDiv.innerHTML = `${(deck[currentCard].hidden == 0 && !show) ? '?' : deck[currentCard].originNote.charAt(0)+'<sup>'+deck[currentCard].originNote.substr(1)+'</sup>'}`;
  // intervalDiv.innerHTML = `${(deck[currentCard].hidden == 1 && !show) ? '?' : deck[currentCard].interval}`;
  // destinationDiv.innerHTML = `${(deck[currentCard].hidden == 2 && !show) ? '?' : deck[currentCard].destinationNote.charAt(0)+'<sup>'+deck[currentCard].destinationNote.substr(1)+'</sup>'}`;
  // intervalDiv.classList.add('animate__animated', 'animate__bounceInLeft');

  if (!show) {
    // intervalClass = posibleClasses[Math.floor(Math.random()*posibleClasses.length)];
    animateCSS("interval", posibleOutClasses[Random(posibleOutClasses)]).then(
      (message) => {
        intervalDiv.innerHTML = `${deck[currentCard].hidden == 1 /*&& !show*/ ? "?" : deck[currentCard].interval}`;
        animateCSS("interval", posibleClasses[Random(posibleClasses)]);
      },
    );
    animateCSS("origin", posibleOutClasses[Random(posibleOutClasses)]).then(
      (message) => {
        // originDiv.innerHTML = `${deck[currentCard].hidden == 0 /*&& !show*/ ? "?" : deck[currentCard].originNote.charAt(0) + "<sup>" + deck[currentCard].originNote.substr(1) + "</sup>"}`;
        originDiv.innerHTML = `${
          deck[currentCard].hidden == 0 /*&& !show*/
            ? "?"
            : (originDiv.innerHTML = piano.replace(
                "pitchClass" +
                  deck[currentCard].originNote.toString().padStart(2, "0"),
                "active",
              ))
        }`;
        animateCSS("origin", posibleClasses[Random(posibleClasses)]);
      },
    );
    animateCSS(
      "destination",
      posibleOutClasses[Random(posibleOutClasses)],
    ).then((message) => {
      // destinationDiv.innerHTML = `${deck[currentCard].hidden == 2 /*&& !show*/ ? "?" : deck[currentCard].destinationNote.charAt(0) + "<sup>" + deck[currentCard].destinationNote.substr(1) + "</sup>"}`;
      destinationDiv.innerHTML = `${
        deck[currentCard].hidden == 2 /*&& !show*/
          ? "?"
          : (destinationDiv.innerHTML = piano.replace(
              "pitchClass" +
                deck[currentCard].destinationNote.toString().padStart(2, "0"),
              "active",
            ))
      }`;
      animateCSS("destination", posibleClasses[Random(posibleClasses)]);
    });
    //originClass = posibleClasses[Math.floor(Math.random()*posibleClasses.length)];
    //destinationClass = posibleClasses[Math.floor(Math.random()*posibleClasses.length)];
    // intervalDiv.classList.add('animate__animated', `animate__${intervalClass}`);
    //originDiv.classList.add('animate__animated', `animate__${originClass}`);
    //destinationDiv.classList.add('animate__animated', `animate__${destinationClass}`);
    show = true;
  } else {
    //intervalDiv.classList.remove(`animate__animated`, `animate__${intervalClass}`);
    //originDiv.classList.remove(`animate__animated`, `animate__${originClass}`);
    //destinationDiv.classList.remove(`animate__animated`, `animate__${destinationClass}`);
    intervalDiv.innerHTML = `${deck[currentCard].interval}`;
    // originDiv.innerHTML = `${deck[currentCard].originNote.charAt(0) + "<sup>" + deck[currentCard].originNote.substr(1) + "</sup>"}`;
    originDiv.innerHTML = piano.replace(
      "pitchClass" + deck[currentCard].originNote.toString().padStart(2, "0"),
      "active",
    );
    // destinationDiv.innerHTML = `${deck[currentCard].destinationNote.charAt(0) + "<sup>" + deck[currentCard].destinationNote.substr(1) + "</sup>"}`;
    destinationDiv.innerHTML = piano.replace(
      "pitchClass" +
        deck[currentCard].destinationNote.toString().padStart(2, "0"),
      "active",
    );

    show = false;
    currentCard++;
  }
};

const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    // const node = document.querySelector(element);
    const node = document.getElementById(element);
    console.log("node", node);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

const Random = (mat) => {
  return Math.floor(Math.random() * mat.length);
};
