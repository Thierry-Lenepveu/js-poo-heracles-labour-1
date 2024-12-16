const MAX_LIFE = 100;

/* Fighter class definition */

export class Fighter {
	#life;

	constructor(name, strength, dexterity) {
		this.name = name;
		this.strength = strength;
		this.dexterity = dexterity;
		this.#life = MAX_LIFE;
	}

	displayHealth() {
		return `💙${this.name}: ${this.#life}`;
	}

	getLife() {
		return this.#life;
	}

	setLife(life) {
		if (life < 0) this.#life = 0;
		else this.#life = life;
	}

	fight(attackedFighter) {
		const damage = Math.floor(
			1 + Math.floor(Math.random() * (this.strength - 1)),
		);
		const damageAttackedFighter = damage - attackedFighter.dexterity;
		if (damageAttackedFighter > 0)
			attackedFighter.setLife(
				attackedFighter.getLife() - damageAttackedFighter,
			);
	}
}
