class PlayerCharacter{    
    constructor(str, int, agi, tgh, hp){
        this.strength = this.random(str[0], str[1]);
        this.intelligence = this.random(int[0], int[1]);
        this.agility = this.random(agi[0], agi[1]);
        this.toughness = this.random(tgh[0], tgh[1]);
        this.maxHitPoints = this.random(hp[0], hp[1]);
        this.currentHitPoints = this.maxHitPoints;
    }

    random(min, max){
        return Math.floor(Math.random()*(max-min+1))+min
    }

    checkHitPoints(){
        console.log(`You currently have ${this.currentHitPoints} hit points.`)
    }

    rest(){
        this.currentHitPoints = this.currentHitPoints +2 > this.maxHitPoints ? this.maxHitPoints : this.currentHitPoints+2;
        this.checkHitPoints();
    }

    punch(){
        console.log(`Your punch did ${this.strength} damage!`)
    }

    _largeAttack(modifier){
        console.log(`Your attack did ${this.random(1,6)+modifier} damage!`)
    }

    _smallAttack(){
        console.log(`Your attack did ${this.random(1,4)} damage!`)
    }

    

}

class MagicUser extends PlayerCharacter{
    constructor(str, int, agi, tgh, hp, mp){
        super(str, int, agi, tgh, hp);
        this.maxMagicPoints = this.random(mp[0], mp[1]);
        this.currentMagicPoints = this.maxMagicPoints;
    }

    _castSpell(mpCost){
        if(this.currentMagicPoints - mpCost >=0){
            this.currentMagicPoints = this.currentMagicPoints - mpCost;
            return true;
        }
        console.log("You don't have enough magic points to cast that spell.")
        return false;
    }

    rest(){
        super.rest()
        this.currentMagicPoints = this.currentMagicPoints +2 > this.maxMagicPoints ? this.maxMagicPoints : this.currentMagicPoints +2
        this.checkMagicPoints();
    }

    checkMagicPoints(){
        console.log(`You currently have ${this.currentMagicPoints} magic points.`)
    }

}

class Fighter extends PlayerCharacter{
    constructor(){
        super([10,18], [4,12], [8,13], [10,18], [3,10])
    }
    swordAttack(){
        super._largeAttack(this.strength)
    }
    shieldBash(){
        super._smallAttack()
    }

}

class Archer extends PlayerCharacter{
    constructor(){
        super([8,15], [6,10], [12,18], [8,15], [3,8])
    }
    shootBow(){
        super._largeAttack(this.agility)
    }
    daggerAttack(){
        super._smallAttack()
    }

}

class Cleric extends MagicUser{
    constructor(){
        super([4,10], [8,15], [8,12], [5,10], [1,6], [5,10])
    }
    healSelf(){
        if(super._castSpell(2)){
            var healedAmount = this.random(2,4);
            this.currentHitPoints = this.currentHitPoints+ healedAmount > this.maxHitPoints ? this.maxHitPoints : this.currentHitPoints+healedAmount;
            console.log(`You healed yourself for ${healedAmount} hit points.`)
        }
    }

    smite(){
        if(super._castSpell(3)){
            super._largeAttack(0);
        }
    }
}

class Wizard extends MagicUser{
    constructor(){
        super([2,6], [12,18], [4,10], [2,7], [2,4], [10,15])
    }
    telekeneticStrike(){
        this._smallAttack
    }

    fireBall(){
        if(super._castSpell(3)){
            super._largeAttack(this.intelligence);
        }
    }
}