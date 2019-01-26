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
        'text': '[num 1]'
    },
    'meds': {
        'keyCode': 50,
        'text': '[num 2]'
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
                $("#attack_bone-spear").trigger("click");
                break;
            case combatKeys.swing.keyCode:
                $("#attack_iron-sword").trigger("click");
                break;
            case combatKeys.slash.keyCode:
                $("#attack_steel-sword").trigger("click");
                break;
            case combatKeys.thrust.keyCode:
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