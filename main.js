class AbsObject{
    constructor(name,type,coordinates,story,img){
        this._name = name;
        this._type = type;
        this._coordinates = coordinates;
        this._story = story;
        this._img = img;
    }

    draw(){}
}

class Player extends AbsObject{
    constructor(name,type,coordinates,story,img,stats,gold,expirience,level,skills){
        super(name,type,coordinates,story,img);
        this._stats = stats;
        this._gold = gold;
        this._expirience = expirience;
        this._level = level;
        this._skills = skills;
    }

    draw(){
        let button = document.createElement("button");
        button.className = "plusbutton";
        button.innerHTML = "+";
        let hero = document.getElementsByClassName('imgplayer')[0];
        hero.setAttribute("src","hero.jpg");
        let heroname = document.getElementsByClassName('HeroNameStory')[0];
        heroname.innerHTML = this._name + "<pre>\n\n\n</pre>" + this._story;
        let gcel = document.getElementsByClassName('GoldCoordExpLvl')[0];
        gcel.innerHTML = this._coordinates + "<pre>\n\n\n</pre>" + "Gold: " + this._gold + "<pre>\n\n\n</pre>" + "Level: " + 
        this._level + "<pre>\n\n\n</pre>" + "Exp: " + this._expirience;
        let heroStats = document.getElementsByClassName('HeroStatsMain')[0];
        if(this._stats.returnfreeStats() > 0)
        {
            heroStats.innerHTML = "Free stats: " + this._stats.returnfreeStats();
            heroStats.innerHTML += "<pre>\n</pre>" + "Strength: " + this._stats.returnStr();
            heroStats.append(button);
            heroStats.innerHTML += "<pre>\n</pre>" + "Agility: " + this._stats.returnAgi() ;
            heroStats.append(button);
            heroStats.innerHTML += "<pre>\n</pre>" + "Dextrity: " + this._stats.returnDex();
            heroStats.append(button); 
            heroStats.innerHTML += "<pre>\n</pre>" + "Vitality: " + this._stats.returnVit();
            heroStats.append(button); 
            heroStats.innerHTML += "<pre>\n</pre>" + "Energy: " + this._stats.returnEne();
            heroStats.append(button); 
            heroStats.innerHTML += "<pre>\n</pre>" + "Wisdom: " + this._stats.returnWis();
            heroStats.append(button);
        } else {
            heroStats.innerHTML = "Free stats: " + this._stats.returnfreeStats();
            heroStats.innerHTML += "<pre>\n</pre>" + "Strength: " + this._stats.returnStr();
            heroStats.innerHTML += "<pre>\n</pre>" + "Agility: " + this._stats.returnAgi() ;
            heroStats.innerHTML += "<pre>\n</pre>" + "Dextrity: " + this._stats.returnDex();
            heroStats.innerHTML += "<pre>\n</pre>" + "Vitality: " + this._stats.returnVit();
            heroStats.innerHTML += "<pre>\n</pre>" + "Energy: " + this._stats.returnEne();
            heroStats.innerHTML += "<pre>\n</pre>" + "Wisdom: " + this._stats.returnWis();
        }
        let heroSecondStats = document.getElementsByClassName('HeroStatsSecond')[0];
        heroSecondStats.innerHTML = "Min melee dmg: " + this._stats.returnMinPMdmg();
        heroSecondStats.innerHTML += "<pre>\n</pre>" + "Max melee dmg: " + this._stats.returnMaxPMdmg();
        heroSecondStats.innerHTML += "<pre>\n</pre>" + "Crit melee power: " + this._stats.returnCritPMPow();
        heroSecondStats.innerHTML += "<pre>\n</pre>" + "Defense: " + this._stats.returnDefence();
        heroSecondStats.innerHTML += "<pre>\n</pre>" + "Phisical Crit Chance: " + this._stats.returnPcritChance();
        let heroThirdStats = document.getElementsByClassName('HeroStatsThird')[0];
        heroThirdStats.innerHTML = "Min range dmg: " + this._stats.returnMinPRdmg();
        heroThirdStats.innerHTML += "<pre>\n</pre>" + "Max range dmg: " + this._stats.returnMaxPRdmg();
        heroThirdStats.innerHTML += "<pre>\n</pre>" + "Crit range power: " + this._stats.returnCritPRPow();
        heroThirdStats.innerHTML += "<pre>\n</pre>" + "Evasion: " + this._stats.returnEvasion();
        let heroFourthStats = document.getElementsByClassName('HeroStatsFourth')[0];
        heroFourthStats.innerHTML = "Min magic dmg: " + this._stats.returnMinMdmg();
        heroFourthStats.innerHTML += "<pre>\n</pre>" + "Max magic dmg: " + this._stats.returnMaxMdmg();
        heroFourthStats.innerHTML += "<pre>\n</pre>" + "Crit magic power: " + this._stats.returnCritMPow();
        heroFourthStats.innerHTML += "<pre>\n</pre>" + "Resist: " + this._stats.returnResistM();
        heroFourthStats.innerHTML += "<pre>\n</pre>" + "Magic Crit Chance: " + this._stats.returnMcritChance();
        let heroHp = document.getElementsByClassName('herohp')[0];
        heroHp.innerHTML = "HP: " + this._stats.returnCurrentHp();
        let heroMana = document.getElementsByClassName('heromana')[0];
        heroMana.innerHTML = "Mana: " + this._stats.returnCurrentMana();
    }

    isAlive(){
        return this._stats._currentHp > 0;
    }

    currentLocation(){
        for(let i = 0; i < locations.length; i++)
            if((this._coordinates.returnX() == locations[i].returnCoord().returnX()) && (this._coordinates.returnY() == locations[i].returnCoord().returnY()))
                return locations[i];
    }

    goStraight(){
        this._coordinates.setY(this._coordinates.returnY() - 1);
        this.currentLocation().draw();
        this.draw();
    }

    fight(Enemy){
        
    }
}

class Npc extends AbsObject{
    constructor(name,type,coordinates,story,img,gold){
        super(name,type,coordinates,story,img);
        this._gold = gold;
    }
}

class Enemy extends AbsObject{
    constructor(name,type,coordinates,story,img,stats,gold,expirience,level,skills,log){
        super(name,type,coordinates,story,img);
        this._stats = stats;
        this._gold = gold;
        this._expirience = expirience;
        this._level = level;
        this._skills = skills;
        this._log = log;
    }
    draw(){
        let enemyHp = document.getElementsByClassName('enemyhp')[0];
        enemyHp.innerHTML = "HP: " + this._stats.returnCurrentHp();
        let enemyMana = document.getElementsByClassName('enemymana')[0];
        enemyMana.innerHTML = "Mana: " + this._stats.returnCurrentMana();
        let enemy = document.getElementsByClassName('imgenemy')[0];
        enemy.setAttribute("src",this._img);
        let enemyname = document.getElementsByClassName('EnemyNameStoryLvl')[0];
        enemyname.innerHTML = this._name + "<pre>\n\n\n</pre>" + this._story + "<pre>\n\n\n</pre>" + "Level: " + this._level;
    }
}

class Chest extends AbsObject{
    constructor(name,type,coordinates,story,img,gold){
        super(name,type,coordinates,story,img);
        this._gold = gold;
    }

    openChest(){

    }
}

class Location extends AbsObject{
    constructor(name,type,coordinates,story,img){
        super(name,type,coordinates,story,img);
    }

    returnName(){
        return this._name;
    }

    returnCoord(){
        return this._coordinates;
    }

    returnStory(){
        return this._story;
    }

    returnImg(){
        return this._img;
    }

    draw(){
        let locimg = document.getElementsByClassName('imgloc')[0];
        locimg.setAttribute("src",this._img);
        let locstory = document.getElementsByClassName('storyloc')[0];
        locstory.innerHTML = this._story;
    }
}

class Stats{
    constructor(str,agi,dex,vit,ene,wis){
        this._str = str;
        this._agi = agi;
        this._dex = dex;
        this._vit = vit;
        this._ene = ene;
        this._wis = wis;
        this._minPMdmg = Math.round(10 + str / 3);
        this._maxPMdmg = Math.round(10 + str / 2);
        this._minPRdmg = Math.round(10 + agi / 3);
        this._maxPRdmg = Math.round(10 + agi / 2);
        this._critPMPow = Math.round(str / 2);
        this._critPRPow = Math.round(agi / 2);
        this._defense = Math.round(agi / 5);
        this._PcritChance = dex;
        this._evasion = dex;
        this._maxHp = 50 + vit * 3;
        this._minMdmg = Math.round(10 + ene / 3);
        this._maxMdmg = Math.round(10 + ene / 2);
        this._critMPow = Math.round(ene / 2);
        this._McritChance = ene;
        this._maxMana = 25 + ene * 2 + wis * 2;
        this._resistM = wis;
        this._freeStats = 0;
        this._currentHp = this._maxHp;
        this._currentMana = this._maxMana;
    } 

    addfreeStats(x){
        this._freeStats += x;
    }

    addstr(x){
        if(this._freeStats < x) break;
        else{
            this._str += x;
            this._minPMdmg = Math.round(10 + this._str / 3);
            this._maxPMdmg = Math.round(10 + this._str / 2);
            this._critPMPow = Math.round(this._str / 2);
            this._freeStats -= x;
        }
    }

    addagi(x){
        if(this._freeStats < x) break;
        else{
            this._agi += x;
            this._minPRdmg = Math.round(10 + this._agi / 3);
            this._maxPRdmg = Math.round(10 + this._agi / 2);
            this._critPRPow = Math.round(this._agi / 2);
            this._defense = Math.round(this._agi / 5);
            this._freeStats -= x;
        }
    }

    adddex(x){
        if(this._freeStats < x) break;
        else{
            this._dex += x;
            this._critChance = this._dex;
            this._evasion = this._dex;
            this._freeStats -= x;
        }
    }
    
    addvit(x){
        if(this._freeStats < x) break;
        else{
            this._vit += x;
            this._maxHp = 50 + this._vit * 3;
            this._freeStats -= x;
        }
    }

    addene(x){
        if(this._freeStats < x) break;
        else{
            this._ene += x;
            this._minMdmg = Math.round(10 + this._ene / 3);
            this._maxMdmg = Math.round(10 + this._ene / 2);
            this._critMPow = Math.round(this._ene / 2);
            this._McritChance = this._ene;
            this._maxMana = 25 + this._ene * 2 + this._wis * 2;
            this._freeStats -= x;
        }
    }

    addwis(x){
        if(this._freeStats < x) break;
        else{
            this._wis += x;
            this._maxMana = 25 + this._ene * 2 + this._wis * 2;
            this._resistM = this._wis;
            this._freeStats -= x;
        }
    }

    resetstats(){
        this._freeStats += (this._str + this._agi + this._dex + this._vit + this.ene + this._wis - 30);
        this._str = 5;
        this._agi = 5;
        this._dex = 5;
        this._vit = 5;
        this._ene = 5;
        this._wis = 5;
        this._minPMdmg = Math.round(10 + this._str / 3);
        this._maxPMdmg = Math.round(10 + this._str / 2);
        this._minPRdmg = Math.round(10 + this._agi / 3);
        this._maxPRdmg = Math.round(10 + this._agi / 2);
        this._critPMPow = Math.round(this._str / 2);
        this._critPRPow = Math.round(this._agi / 2);
        this._defense = Math.round(this._agi / 5);
        this._PcritChance = this._dex;
        this._evasion = this._dex;
        this._maxHp = 50 + this._vit * 3;
        this._minMdmg = Math.round(10 + this._ene / 3);
        this._maxMdmg = Math.round(10 + this._ene / 2);
        this._critMPow = Math.round(this._ene / 2);
        this._McritChance = this._ene;
        this._maxMana = 25 + this._ene * 2 + this._wis * 2;
        this._resistM = this._wis;
    }

    returnfreeStats(){
        return this._freeStats;
    }

    returnStr(){
        return this._str;
    }

    returnAgi(){
        return this._agi;
    }

    returnDex(){
        return this._dex;
    }

    returnVit(){
        return this._vit;
    }

    returnEne(){
        return this._ene;
    }

    returnWis(){
        return this._wis;
    }

    returnMinPMdmg(){
        return this._minPMdmg;
    }

    returnMaxPMdmg(){
        return this._maxPMdmg;
    }

    returnMinPRdmg(){
        return this._minPRdmg;
    }

    returnMaxPRdmg(){
        return this._maxPRdmg;
    }

    returnCritPMPow(){
        return this._critPMPow;
    }

    returnCritPRPow(){
        return this._critPRPow;
    }

    returnDefence(){
        return this._defense;
    }

    returnPcritChance(){
        return this._PcritChance;
    }

    returnEvasion(){
        return this._evasion;
    }

    returnHP(){
        return this._maxHp;
    }

    returnMinMdmg(){
        return this._minMdmg;
    }

    returnMaxMdmg(){
        return this._maxMdmg;
    }

    returnCritMPow(){
        return this._critMPow;
    }

    returnMcritChance(){
        return this._McritChance;
    }

    returnMana(){
        return this._maxMana;
    }

    returnResistM(){
        return this._resistM;
    }

    returnCurrentHp(){
        return this._currentHp;
    }

    returnCurrentMana(){
        return this._currentMana;
    }

    plusHP(x){
        (this._currentHp + x) > this._maxHp ? this._currentHp = this._maxHp : this._currentHp += x;
    }

    plusMana(x){
        (this._currentMana + x) > this._maxMana ? this._currentMana = this._maxMana : this._currentMana += x;
    }

    minusHP(x){
        this._currentHp -= x;
    }

    minusMana(x){
        this._currentMana -= x;
    }
}

class Skills{

}

class Level{
    constructor(level,startExp,expForNextLvl){
        this._level = level;
        this._startExp = startExp;
        this._expForNextLvl = expForNextLvl;
    }

    lvlup(){
        this._level += 1;
        this._startExp = expForNextLvl;
        this._expForNextLvl *= 2;
    }

    returnLvl(){
        return this._level;
    }

    returnStartExp(){
        return this._startExp;
    }

    returnExpForNextLvl(){
        return this._expForNextLvl;
    }
}

class Coordinates{
    constructor(x,y){
        this._x = x;
        this._y = y;
    }

    returnX(){
        return this._x;
    }

    returnY(){
        return this._y;
    }

    setX(x){
        this._x = x;
    }

    setY(y){
        this._y = y;
    }

    toString(){
        return `x:${this._x} y:${this._y}`;
    }
}

let loc1C = new Coordinates(50,50);
//let loc1 = new Location("StartLock","Location",loc1C,"You run to the forest","firstlock.jpg");
let loc2C = new Coordinates(50,49);
//let loc2 = new Location("SecondLock","Location",loc2C,"You run deeper","secondlock.jpg");
let loc3C = new Coordinates(50,48);
//let loc3 = new Location("ThirdLock","Location",loc3C,"You find some man","thirdlock.jpg");
let locations = [new Location("StartLock","Location",loc1C,"You run to the forest","firstlock.jpg")
    ,new Location("SecondLock","Location",loc2C,"You run deeper","secondlock.jpg")
    ,new Location("ThirdLock","Location",loc3C,"You find some man","thirdlock.jpg")];
let HeroCoordinates = new Coordinates(50,50);
let HeroStats = new Stats(5,5,5,5,5,5);
let Enemy1Coordinates = new Coordinates(50,50);
let Enemy1Stats= new Stats(5,5,5,5,5,5);
let Hero = new Player("Desertik","Hero",HeroCoordinates,"some story of hero","hero.jpg",HeroStats,0,0,1,null);
//Hero._stats.addfreeStats(5);
let Enemy1 = new Enemy("Soldier","Enemy",Enemy1Coordinates,"some story of enemy","enemy1.jpg",Enemy1Stats,50,50,1,null,"");
Hero.draw();
Hero.currentLocation().draw();
Enemy1.draw();
