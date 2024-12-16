// First Labour : Heracles vs Nemean Lion
// use your Figher class here

import { Fighter } from "./src/Fighter.js";

const heracles = new Fighter("🧔Heracles", 20, 6);
const nemeanLion = new Fighter("🦁Nemean lion", 11, 13);

console.info(heracles.displayHealth());
console.info(nemeanLion.displayHealth());

let index = 1;
while (heracles.getLife() > 0 && nemeanLion.getLife() > 0) {
	console.info(`Round #${index++}`);
	heracles.fight(nemeanLion);
	console.info(
		`${heracles.name} ⚔️ ${nemeanLion.name} ${nemeanLion.displayHealth()}`,
	);
	nemeanLion.fight(heracles);
	console.info(
		`${nemeanLion.name} ⚔️ ${heracles.name} ${heracles.displayHealth()}`,
	);
}

if (heracles.getLife() === 0) {
	console.info(`💀${heracles.name} is dead.`);
	console.info(`🏆${nemeanLion.name} wins (💙 ${nemeanLion.getLife()})`);
} else {
	console.info(`💀${nemeanLion.name} is dead.`);
	console.info(`🏆${heracles.name} wins (💙 ${heracles.getLife()})`);
}
