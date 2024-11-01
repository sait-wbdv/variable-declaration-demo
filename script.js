/* Primitive Variables */

let welcomeMessage = "Welcome to Nobody save's the world";

/* TODO: these variables shouldn't be scoped globally */

let currentHealth = 400;

console.log(currentHealth);

let maxHealth = 500;

let deathHealth = 0;

currentHealth = currentHealth - 10;

console.log(currentHealth);

const wizardNpcOpeningMessage = "Where are your pants?";

/* Complex Variables */

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
// DONE: FIX CURRENT AVATAR STATS BUG

const currentAvatar = { stats: "Blah" };
const player = {
  name: "Nobody",
  currentAvatar: avatars.rat,
  stats: null,
};
// assignment approach initializes the value in the variable declaration, and then is allocated here
player.stats = player.currentAvatar.stats;

// Demonstrates that the fix worked
console.log(player.stats);

const wizardNPC = {
  name: "Wizard",
  spriteFile: "./sprites/wizardNPC",
  startDialog: ["Where are your pants", "something about nostramagus"],
  hasDoneStartDialog: true,
  postStartDialog: "Go talk to Nostramagus",
};
