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

	reduceLife(points) {
		this.#life = Math.max(this.#life - points, 0);
	}

	fight(attackedFighter) {
		const damage = Math.floor(Math.ceil(Math.random() * this.strength));
		const damageAttackedFighter = damage - attackedFighter.dexterity;
		if (damageAttackedFighter > 0)
			attackedFighter.reduceLife(damageAttackedFighter);
	}
}
