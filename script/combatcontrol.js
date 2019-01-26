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
        }
    })
}

function unbindCombatKeys() {
    $('body').unbind('keypress.combat');
}