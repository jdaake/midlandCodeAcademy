## We need to create an RPG where you can play one of several different classes of character

### There will be four distinct characters as outlined below. Let's make actual JS classes for them!


* Fighter - Tough warrior 
    * Attributes
        * Strength: Random between 10-18
        * Intelligence: Random between 4-12
        * Agility: Random between 8-13
        * Toughness: Random between 10-18 
        * Hit Points: Random between 3 and 10
    * Abilities
        * Sword Attack - Does random damage between 1-6 plus strength
        * Punch - Does damage equal to strength
        * Shield Bash - Does random damage between 1-4
    * Player Actions
        * Check HP - Will return current hit points
        * Rest - returns 3 hit points (cannot exceed maximum)

* Cleric - Healing Expert
    * Attributes
        * Strength: Random between 4-10
        * Intelligence: Random between 8-15
        * Agility: Random between 8-12
        * Toughness: Random between 5-10 
        * Hit Points: Random between 1 and 6
        * Magic Points: Random between 5 and 10
    * Abilities
        * Heal Self - Heals themselves for between 2-4 HP costs 2 Magic Points
        * Smite - Deals between 1 and 6 damage costs 3 Magic Points
        * Punch - Does damage equal to strength
    * Player Actions
        * Check HP - Will return current hit points
        * Check MP - Will return current magic points
        * Rest  
            * returns 3 hit points (cannot exceed maximum) 
            * returns 2 magic points (cannot exceed maximum)

* Wizard - Magic Expert
    * Attributes
        * Strength: Random between 2-6
        * Intelligence: Random between 12-18
        * Agility: Random between 4-10
        * Toughness: Random between 2-7 
        * Hit Points: Random between 2 and 4
        * Magic Points: Random between 10 and 15
    * Abilities
        * Telekinetic Strike - Does random damage between 1-4.
        * Fireball - Deals between 1 and 6 damage plus intelligence costs 3 Magic Points
        * Punch - Does damage equal to strength
    * Player Actions
        * Check HP - Will return current hit points
        * Check MP - Will return current magic points
        * Rest  
            * returns 3 hit points (cannot exceed maximum) 
            * returns 2 magic points (cannot exceed maximum)

* Archer - Bow Expert 
    * Attributes
        * Strength: Random between 8-15
        * Intelligence: Random between 6-10
        * Agility: Random between 12-18
        * Toughness: Random between 8-15 
        * Hit Points: Random between 3 and 8
    * Abilities
        * Shoot Bow - Does random damage between 1-6 plus Agility
        * Punch - Does damage equal to strength
        * Dagger - Does random damage between 1-4
    * Player Actions
        * Check HP - Will return current hit points
        * Rest - returns 3 hit points (cannot exceed maximum)

