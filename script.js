let welcomeMessage = "Welcome to Nobody save's the world";

let currentHealth = 400;

console.log(currentHealth);

let maxHealth = 500;

let deathHealth = 0;

currentHealth = currentHealth - 10;

console.log(currentHealth);

const wizardNpcOpeningMessage = "Where are your pants?";

const stats = [
  { label: "Health", value: 945 },
  { label: "Mana", value: 125 },
  { label: "Speed", value: 130 },
  { label: "Strength", value: 65 },
];

const avatars = {
  rat: {
    description: "a chompy little friend",
    attacks: [{ label: "Gnaw", damage: 15, mana: 5 }, { label: "Consume" }],
    stats: [
      { label: "Health", value: 945 },
      { label: "Mana", value: 125 },
      { label: "Speed", value: 130 },
      { label: "Strength", value: 65 },
    ],
  },
  nobody: {
    description: "A pantsless blob of a person",
    attacks: [{ label: "Slap", damage: 5 }],
    stats: [
      { label: "Health", value: 445 },
      { label: "Mana", value: 12 },
      { label: "Speed", value: 10 },
      { label: "Strength", value: 6 },
    ],
  },
};
// TODO: FIX CURRENT AVATAR BUG
const currentAvatar = { stats: "Blah" };
const player = {
  name: "Nobody",
  currentAvatar: avatars.rat,
  stats: currentAvatar.stats,
};

const wizardNPC = {
  name: "Wizard",
  spriteFile: "./sprites/wizardNPC",
  startDialog: ["Where are your pants", "something about nostramagus"],
  hasDoneStartDialog: true,
  postStartDialog: "Go talk to Nostramagus",
};

console.log(avatars.rat.stats[1]);
