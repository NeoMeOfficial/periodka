export const UI_TEXT = {
  welcome: "Vitaj! Začnime nastavením tvojho cyklu",
  lastPeriod: "Posledná menštruácia",
  cycleLength: "Dĺžka cyklu",
  periodLength: "Dĺžka menštruácie",
  todayEstimate: "Odhad na dnes",
  whatToDo: "Čo s tým",
  symptoms: "Príznaky",
  mood: "Nálada",
  energy: "Energia",
  notes: "Poznámky",
  today: "Dnes",
  calendar: "Kalendár",
  settings: "Nastavenia",
  save: "Uložiť",
  cancel: "Zrušiť",
  phase: {
    menstrual: "Menštruácia",
    follicular: "Folikulárna",
    ovulation: "Ovulácia", 
    luteal: "Luteálna"
  },
  phaseDescriptions: {
    menstrual: "Čas odpočinku a obnovy",
    follicular: "Energia rastie, nové začiatky",
    ovulation: "Vrchol energie a kreativity",
    luteal: "Príprava na odpočinok"
  },
  suggestions: {
    menstrual: "Odpočívaj si, pij veľa tekutín",
    follicular: "Skús nové aktivity a výzvy",
    ovulation: "Využi svoju energiu na dôležité úlohy",
    luteal: "Dokončuj projekty, priprav sa na odpočinok"
  },
  startPeriod: "Začať periódu",
  endPeriod: "Ukončiť periódu",
  expectedPeriod: "Očakávaná menštruácia",
  daysLeft: "dní zostáva",
  daysPast: "dní po termíne",
  cycleDay: "deň cyklu"
};

export const PHASE_INSIGHTS = {
  menstrual: {
    title: "Čas na odpočinok",
    description: "Tvoje telo sa obnovuje. Je to prirodzený čas na spomalenie.",
    suggestions: [
      "Dopraj si dostatok spánku",
      "Pij veľa vody a bylinkových čajov",
      "Jemné pohybové aktivity ako jóga",
      "Teplé kúpele na úľavu od kŕčov"
    ],
    energy: 30,
    mood: 2.5
  },
  follicular: {
    title: "Nová energia",
    description: "Energia sa vracia, je čas na nové výzvy a plány.",
    suggestions: [
      "Začni nové projekty",
      "Zvýš intenzitu cvičenia",
      "Plánuj sociálne aktivity",
      "Skús nové jedlá bohaté na železo"
    ],
    energy: 70,
    mood: 4
  },
  ovulation: {
    title: "Vrchol energie",
    description: "Cítiš sa najlepšie. Využi túto energiu na dôležité úlohy.",
    suggestions: [
      "Dôležité rozhovory a prezentácie",
      "Intenzívne cvičenie",
      "Kreatívne projekty",
      "Sociálne stretnutia"
    ],
    energy: 95,
    mood: 4.5
  },
  luteal: {
    title: "Príprava na pokoj",
    description: "Energia klesá, je čas na dokončovanie a prípravu na odpočinok.",
    suggestions: [
      "Dokončuj rozpracované úlohy",
      "Organizuj a upratuj",
      "Relaxačné aktivity",
      "Obmedz kofeín a cukor"
    ],
    energy: 50,
    mood: 3
  }
};