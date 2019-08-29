class AbsObject{
    constructor(name,type,coordinates,story,img){
        this._name = name;
        this._type = type;
        this._coordinates = coordinates;
        this._story = story;
        this._img = img;
    }

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

}

class Npc extends AbsObject{
    constructor(name,type,coordinates,story,img,gold){
        super(name,type,coordinates,story,img);
        this._gold = gold;
    }
}

class Enemy extends AbsObject{
    constructor(name,type,coordinates,story,img,stats,gold,expirience,level,skills){
        super(name,type,coordinates,story,img);
        this._stats = stats;
        this._gold = gold;
        this._expirience = expirience;
        this._level = level;
        this._skills = skills;
    }
}

class Chest extends AbsObject{
    constructor(name,type,coordinates,story,img,gold){
        super(name,type,coordinates,story,img);
        this._gold = gold;
    }
}

class Location extends AbsObject{
    constructor(name,type,coordinates,story,img){
        super(name,type,coordinates,story,img);
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
        this._critChance = dex;
        this._evasion = dex;
        this._hp = 50 + vit * 3;
        this._minMdmg = Math.round(10 + ene / 3);
        this._maxMdmg = Math.round(10 + ene / 2);
        this._critMPow = Math.round(ene / 2);
        this._McritChance = ene;
        this._mana = 25 + ene * 2 + wis * 2;
        this._resistM = wis;
        this._freeStats = 0;
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
            this._hp = 50 + this._vit * 3;
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
            this._mana = 25 + this._ene * 2 + this._wis * 2;
            this._freeStats -= x;
        }
    }

    addwis(x){
        if(this._freeStats < x) break;
        else{
            this._wis += x;
            this._mana = 25 + this._ene * 2 + this._wis * 2;
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
        this._hp = 50 + this._vit * 3;
        this._minMdmg = Math.round(10 + this._ene / 3);
        this._maxMdmg = Math.round(10 + this._ene / 2);
        this._critMPow = Math.round(this._ene / 2);
        this._McritChance = this._ene;
        this._mana = 25 + this._ene * 2 + this._wis * 2;
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
        return this._hp;
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
        return this._mana;
    }

    returnResistM(){
        return this._resistM;
    }
}

class Skills{

}