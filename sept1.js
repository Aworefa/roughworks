function Fighter(name,strongHand,punchPower,manager){
    this.name = name;
    this.strongHand = strongHand;
    this.power = punchPower;
    this.manager = manager;
    this.fasthand = function(hand){
        console.log('the fastest hand is ' + hand)
    }
    this.nameInSentence = function(name){
        return 'my name is' + name
    }
    this.shout = function(){
        return `hey you ${name}`
    }
    this.strenght = function(power){
        return 'show me you power' + power
    } 
}

var fela = new Fighter('ade','right', 150, 'alex')
var dayo = new Fighter('dayo','left', 200, 'flex')
var josh = new Fighter('joshua','right', 150, 'vee') 
