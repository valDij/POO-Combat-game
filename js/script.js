// my parent - characters
class Characters {
	constructor(nom, health,damage){
		this.nom = nom;
		this.health = health;
		/*this.damage = function() {
		}*/
	}
}







//Story 3 : le héros se fait attaquer par un minion 





































/*function myHero(name,health,armor,attackPower,damage, healthBonus, armorBonus){
	this.name = name;
	this.health = health;
	this.armor = armor;
	this.attackPower = attackPower;
	this.damage = function(enemies){

			let result =  enemies.attackPower - this.armor;
			if (result < 0){
				console.log(this.health - result);
				}		
			else {
				console.log(this.armorBonus)
			}	

		};

		this.healthBonus = function(){
			console.log ("Le héros a " + (this.health + 50)+ " "+ "points de vie");
		}

		this.armorBonus = function(){
			console.log("Le héros récupère un bonus armure, il a maintenant " + (this.armor + 20) + " points d'armure");
		}
	}

	function enemies (type,health,attackPower,damage){
		this.type= type;
		this.health = health;
		this.attackPower = attackPower;
		this.damage = damage;
	}

//Mon héros
let jack = new myHero ("Jack",200,0,15,0);

//Mes ennemis
let minion = new enemies ("minion",10,10,0)
let lieutenantMinion = new enemies ("lieutenant Minion",30,30,0);
let chefMinion = new enemies ("chefMinion", 100,100,0);

//Story 1 : Le héros récupère un bonus de vie
jack.healthBonus();

//Story 2 : le héros récupère un bonus armure
jack.armorBonus();

//Story 3 : le héros se fait attaquer par un minion.
jack.damage(minion);*/