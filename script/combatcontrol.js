var combatKeys = {
    'stab' : {
        'keyCode' : 113,
        'text' : '[Q]'
    },
    'swing' : {
        'keyCode' : 119,
        'text' : '[W]'
    },
    'slash' : {
        'keyCode' : 101,
        'text' : '[E]'
    },
    'thrust' : {
        'keyCode' : 114,
        'text' : '[R]'
    },
    'eat': {
        'keyCode': 49,
        'text': '[1]'
    },
    'meds': {
        'keyCode': 50,
        'text': '[2]'
    },
    'shoot': {
        'keyCode': 97,
        'text': '[A]'
    },
    'blast': {
        'keyCode': 115,
        'text': '[S]'
    },
    'lob': {
        'keyCode': 100,
        'text': '[D]'
    },
    'tangle': {
        'keyCode': 102,
        'text': '[F]'
    }
}

function bindCombatKeys() {
    $('body').bind('keypress.combat', function(e) {
        switch(e.keyCode){
            case combatKeys.stab.keyCode:
                console.log("Button " + combatKeys.stab.text + " pressed");
                $("#attack_bone-spear").trigger("click");
                break;
            case combatKeys.swing.keyCode:
                console.log("Button " + combatKeys.swing.text + " pressed");
                $("#attack_iron-sword").trigger("click");
                break;
            case combatKeys.slash.keyCode:
                console.log("Button " + combatKeys.slash.text + " pressed");
                $("#attack_steel-sword").trigger("click");
                break;
            case combatKeys.thrust.keyCode:
                console.log("Button " + combatKeys.thrust.text + " pressed");
                $("#attack_bayonet").trigger("click");
                break;
            case combatKeys.eat.keyCode:
                $("#eat").trigger("click");
                break;
            case combatKeys.meds.keyCode:
                $("#meds").trigger("click");
                break;
            case combatKeys.shoot.keyCode:
                $("#attack_rifle").trigger("click");
                break;
            case combatKeys.blast.keyCode:
                $("#attack_laser-rifle").trigger("click");
                break;
            case combatKeys.lob.keyCode:
                $("#attack_grenade").trigger("click");
                break;
            case combatKeys.tangle.keyCode:
                $("#attack_bolas").trigger("click");
                break;
        }
    })
}

function unbindCombatKeys() {
    $('body').unbind('keypress.combat');
}