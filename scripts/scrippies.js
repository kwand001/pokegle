// Changes how the type looks depending on what type the Pokemon is.
function typeColor(type, attr) {
    removeType(attr);
    $("#" + attr).addClass(type);
}

function removeType(attr) {
    $("#" + attr).removeClass("fire water normal electric grass bug psychic flying poison fighting ghost ice ground rock dragon dark steel fairy");
}

function getForm(formName, formNum) {
    $("#form" + (formNum +1)).css("display", "block");
    $.getJSON("./data/forms.json", function(json) {
        for (var i = 0; i < json.length; ++i) {
            if (formName == json[i].name) {
                //NAME
                $("#form" + (formNum+1)).text(json[i].name);
                // $("#form" + formNum + "name").text(json[i].name);
                if (json[i].id != "NONE") {
                    addIcon(json[i].id, "form" + formNum + "icon");
                }
                else {
                    clearIcon("form" + formNum + "icon");
                }
                //TYPE
                if (json[i].type.length == 2) {
                    $("#form" + formNum + "type1").text(json[i].type[0]);
                    $("#form" + formNum + "type2").text(json[i].type[1]);
                    typeColor(json[i].type[0], "form" + formNum + "type1");
                    typeColor(json[i].type[1], "form" + formNum + "type2");
                }
                else {
                    $("#form" + formNum + "type1").text(json[i].type);
                    $("#form" + formNum + "type2").text("");
                    removeType("form" + formNum + "type2");
                    typeColor(json[i].type[0], "form" + formNum + "type1");
                }
                //ABILITIES
                if (json[i].ability.length == 2) {
                    $("#form" + formNum + "abil1").text(json[i].ability[0]);
                    abilDesc(json[i].ability[0], "form" + formNum + "abil1");
                    $("#form" + formNum + "abil2").text(json[i].ability[1]);
                    abilDesc(json[i].ability[1], "form" + formNum + "abil2");
                }
                else {
                    $("#form" + formNum + "abil1").text(json[i].ability);
                    abilDesc(json[i].ability, "form" + formNum + "abil1");
                    $("#form" + formNum + "abil2").text("");
                    clearAbilDesc("form" + formNum + "abil2");
                }

                if (json[i].hiddenability != "NONE") {
                    $("#form" + formNum + "ha").text(json[i].hiddenability);
                    abilDesc(json[i].hiddenability, "form" + formNum + "ha");
                }
                else {
                    $("#form" + formNum + "ha").text("");
                    clearAbilDesc("form" + formNum + "ha");
                }
                //STATS
                $("#form" + formNum + "hp").text("HP: " + json[i].stats[0]);
                setStats("form" + formNum + "hp", json[i].stats[0]);
                $("#form" + formNum + "atk").text("ATK: " + json[i].stats[1]);
                setStats("form" + formNum + "atk", json[i].stats[1]);
                $("#form" + formNum + "def").text("DEF: " + json[i].stats[2]);
                setStats("form" + formNum + "def", json[i].stats[2]);
                $("#form" + formNum + "spa").text("SpA: " + json[i].stats[3]);
                setStats("form" + formNum + "spa", json[i].stats[3]);
                $("#form" + formNum + "spd").text("SpD: " + json[i].stats[4]);
                setStats("form" + formNum + "spd", json[i].stats[4]);
                $("#form" + formNum + "spe").text("SPE: " + json[i].stats[5]);
                setStats("form" + formNum + "spe", json[i].stats[5]);
            }
        }
    })
}

//Get icon from Serebii's site
function addIcon(idNum, form) {
    var pkm = "https://www.serebii.net/pokedex-swsh/icon/" + idNum + ".png";

    document.getElementById(form).attributes[2].value = pkm;
}
//Add in ability description tooltips
function abilDesc(abilName, idName) {
    $.getJSON("./data/abilities.json", function(json) {
        for (var i = 0; i < json.length; ++i) {
            if (abilName == json[i].name) {
                document.getElementById(idName).attributes[3].value = json[i].description;
            }
        }
    });
}
//Clear icons
function clearIcon(place) {
    document.getElementById(place).attributes[2].value =  "./imgs/dot.png";
}
//Clear forms
function clearAllForms() {
    for (var i = 1; i < 7; ++i) {
        $("#form" + i).attr("style", "display:none");
    }
}
//Clear ability descriptions
function clearAbilDesc(idName) {
    document.getElementById(idName).attributes[3].value = "";
}

function setStats(place, statValue) {

    pct = (statValue / 255) * 100;
    // if (pct < 5) {
    //     pct = 5;
    // }
    var statStat = "width: " + pct + "%;";
    document.getElementById(place).attributes[2].value = statStat; 
}

function searchPkmn() {
    saveVar(false);
}

function randomPkmn() {
    saveVar(true);
}

//Fill in main form. Runs when a Pokemon is selected.
function saveVar(searchOrRand) {
    $(".pokeinfo").attr("style", "display: block");
    var pkmn = document.getElementById("myInput").value.toUpperCase();
    if (searchOrRand) {
        var num = Math.floor(Math.random() * arr.length);
        pkmn = (arr[num]).toUpperCase();
    }
    $.getJSON("./data/pokemon.json", function(json) {
        for (var i = 0; i < json.length; ++i) {
            if (pkmn == json[i].name.toUpperCase()) {
                $("#form1").attr("aria-selected","true");
                $("#form1").addClass("active");
                $("#form1tab").addClass("show active");
            
                for (var j = 2; j < 7; ++j) {
                    $("#form" + j).attr("aria-selected", "false");
                    $("#form" + j).removeClass("active");
                    $("#form" + j + "tab").removeClass("show active");
                }
                clearAllForms();
                //NAME--------------------------------------------------------------------------------------------------------
                document.getElementById("form1").attributes[2].value = "display: block;";
                if (json[i].altname != "NONE") {
                    document.getElementById("pokename").innerHTML = json[i].name;
                    $("#form1").text(json[i].altname);
                }
                else {
                    document.getElementById("pokename").innerHTML = json[i].name;
                    $("#form1").text(json[i].name);
                }

                if (json[i].id != "NONE") {
                    addIcon(json[i].id, "pokeicon");
                }
                else {
                    clearIcon("pokeicon");
                }
                //TYPE--------------------------------------------------------------------------------------------------------
                if (json[i].type.length == 2) {
                    document.getElementById("type1").innerHTML = json[i].type[0];
                    document.getElementById("type2").innerHTML = json[i].type[1];
                    typeColor(json[i].type[0], "type1")
                    typeColor(json[i].type[1], "type2")
                }
                else {
                    document.getElementById("type1").innerHTML = json[i].type;
                    document.getElementById("type2").innerHTML = "";
                    removeType("type2");
                    
                    typeColor(json[i].type[0], "type1")
                }

                //ABILITIES-----------------------------------------------------------------------------------------------------
                if (json[i].ability.length == 2) {
                    document.getElementById("pokeabil1").innerHTML = json[i].ability[0];
                    abilDesc(json[i].ability[0], "pokeabil1");
                    document.getElementById("pokeabil2").innerHTML = json[i].ability[1];
                    abilDesc(json[i].ability[1], "pokeabil2");
                }
                else {
                    document.getElementById("pokeabil1").innerHTML = json[i].ability;
                    abilDesc(json[i].ability, "pokeabil1");
                    document.getElementById("pokeabil2").innerHTML = "-";
                    clearAbilDesc("pokeabil2");
                }

                if (json[i].hiddenability != "NONE") {
                    document.getElementById("hiddenabil").innerHTML = json[i].hiddenability;
                    abilDesc(json[i].hiddenability, "hiddenabil");
                }
                else {
                    document.getElementById("hiddenabil").innerHTML = "-";
                    clearAbilDesc("hiddenabil");
                }
                //STATS-------------------------------------------------------------------------------------------------------
                document.getElementById("hp").innerHTML = "HP: " + json[i].stats[0];
                setStats("hp", json[i].stats[0]);
                document.getElementById("atk").innerHTML = "ATK: " + json[i].stats[1];
                setStats("atk", json[i].stats[1]);
                document.getElementById("def").innerHTML = "DEF: " + json[i].stats[2];
                setStats("def", json[i].stats[2]);
                document.getElementById("spa").innerHTML = "SpA: " + json[i].stats[3];
                setStats("spa", json[i].stats[3]);
                document.getElementById("spd").innerHTML = "SpD: " + json[i].stats[4];
                setStats("spd", json[i].stats[4]);
                document.getElementById("spe").innerHTML = "SPE: " + json[i].stats[5];
                setStats("spe", json[i].stats[5]);
                
                //FORMS-------------------------------------------------------------------------------------------------------
                if (json[i].forms[0] != "NONE") {
                    getForm(json[i].forms[0], 1);
                    $("#form1name").text(json[i].name);

                    if (json[i].forms.length == 2) {
                        getForm(json[i].forms[1], 2);
                        $("#form2name").text(json[i].name);
                    }
                    else if (json[i].forms.length == 3) {
                        getForm(json[i].forms[1], 2);
                        $("#form2name").text(json[i].name);
                        getForm(json[i].forms[2], 3);
                        $("#form3name").text(json[i].name);
                    }
                    else if (json[i].forms.length == 5) {
                        for (var k = 1; k < 5; ++k) {
                            getForm(json[i].forms[k], k+1);
                            $("#form" + (k+1) + "name").text(json[i].name);
                        }
                    }
                }
            }
        }
    });
    document.getElementById("myInput").value = "";
}

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        var numSuggestions = 0;
        for (i = 0; i < arr.length && numSuggestions < 3; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += '<input type="hidden" value="' + arr[i] + '">';
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
            numSuggestions++;
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {

            //If the ENTER key is pressed, prevent the form from being submitted,
            if (x) x[currentFocus].click();
            //e.preventDefault();
            if (currentFocus > -1) {
            //and simulate a click on the "active" item:
            if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
        }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
var arr = ["Abomasnow", "Abra", "Absol", "Accelgor", "Aegislash", "Aerodactyl", "Aggron", "Aipom", "Alakazam", "Alcremie", "Alomomola", "Altaria", "Amaura", "Ambipom", "Amoonguss", "Ampharos", "Anorith", "Appletun", "Applin", "Araquanid", "Arbok", "Arcanine", "Arceus", "Archen", "Archeops", "Arctovish", "Arctozolt", "Ariados", "Armaldo", "Aromatisse", "Aron", "Arrokuda", "Articuno", "Audino", "Aurorus", "Avalugg", "Axew", "Azelf", "Azumarill", "Azurill", "Bagon", "Baltoy", "Banette", "Barbaracle", "Barboach", "Barraskewda", "Basculin", "Bastiodon", "Bayleef", "Beartic", "Beautifly", "Beedrill", "Beheeyem", "Beldum", "Bellossom", "Bellsprout", "Bergmite", "Bewear", "Bibarel", "Bidoof", "Binacle", "Bisharp", "Blacephalon", "Blastoise", "Blaziken", "Blipbug", "Blissey", "Blitzle", "Boldore", "Boltund", "Bonsly", "Bouffalant", "Bounsweet", "Braixen", "Braviary", "Breloom", "Brionne", "Bronzong", "Bronzor", "Bruxish", "Budew", "Buizel", "Bulbasaur", "Buneary", "Bunnelby", "Burmy", "Butterfree", "Buzzwole", "Cacnea", "Cacturne", "Calyrex", "Camerupt", "Carbink", "Carkol", "Carnivine", "Carracosta", "Carvanha", "Cascoon", "Castform", "Caterpie", "Celebi", "Celesteela", "Centiskorch", "Chandelure", "Chansey", "Charizard", "Charjabug", "Charmander", "Charmeleon", "Chatot", "Cherrim", "Cherubi", "Chesnaught", "Chespin", "Chewtle", "Chikorita", "Chimchar", "Chimecho", "Chinchou", "Chingling", "Cinccino", "Cinderace", "Clamperl", "Clauncher", "Clawitzer", "Claydol", "Clefable", "Clefairy", "Cleffa", "Clobbopus", "Cloyster", "Coalossal", "Cobalion", "Cofagrigus", "Combee", "Combusken", "Comfey", "Conkeldurr", "Copperajah", "Corphish", "Corsola", "Corviknight", "Corvisquire", "Cosmoem", "Cosmog", "Cottonee", "Crabominable", "Crabrawler", "Cradily", "Cramorant", "Cranidos", "Crawdaunt", "Cresselia", "Croagunk", "Crobat", "Croconaw", "Crustle", "Cryogonal", "Cubchoo", "Cubone", "Cufant", "Cursola", "Cutiefly", "Cyndaquil", "Darkrai", "Darmanitan", "Dartrix", "Darumaka", "Decidueye", "Dedenne", "Deerling", "Deino", "Delcatty", "Delibird", "Delphox", "Deoxys", "Dewgong", "Dewott", "Dewpider", "Dhelmise", "Dialga", "Diancie", "Diggersby", "Diglett", "Ditto", "Dodrio", "Doduo", "Donphan", "Dottler", "Doublade", "Dracovish", "Dracozolt", "Dragalge", "Dragapult", "Dragonair", "Dragonite", "Drakloak", "Drampa", "Drapion", "Dratini", "Drednaw", "Dreepy", "Drifblim", "Drifloon", "Drilbur", "Drizzile", "Drowzee", "Druddigon", "Dubwool", "Ducklett", "Dugtrio", "Dunsparce", "Duosion", "Duraludon", "Durant", "Dusclops", "Dusknoir", "Duskull", "Dustox", "Dwebble", "Eelektrik", "Eelektross", "Eevee", "Eiscue", "Ekans", "Eldegoss", "Electabuzz", "Electivire", "Electrike", "Electrode", "Elekid", "Elgyem", "Emboar", "Emolga", "Empoleon", "Entei", "Escavalier", "Espeon", "Espurr", "Eternatus", "Excadrill", "Exeggcute", "Exeggutor", "Exploud", "Falinks", "Farfetch'd", "Fearow", "Feebas", "Fennekin", "Feraligatr", "Ferroseed", "Ferrothorn", "Finneon", "Flaaffy", "Flabébé", "Flapple", "Flareon", "Fletchinder", "Fletchling", "Floatzel", "Floette", "Florges", "Flygon", "Fomantis", "Foongus", "Forretress", "Fraxure", "Frillish", "Froakie", "Frogadier", "Froslass", "Frosmoth", "Furfrou", "Furret", "Gabite", "Gallade", "Galvantula", "Garbodor", "Garchomp", "Gardevoir", "Gastly", "Gastrodon", "Genesect", "Gengar", "Geodude", "Gible", "Gigalith", "Girafarig", "Giratina", "Glaceon", "Glalie", "Glameow", "Glastrier", "Gligar", "Gliscor", "Gloom", "Gogoat", "Golbat", "Goldeen", "Golduck", "Golem", "Golett", "Golisopod", "Golurk", "Goodra", "Goomy", "Gorebyss", "Gossifleur", "Gothita", "Gothitelle", "Gothorita", "Gourgeist", "Granbull", "Grapploct", "Graveler", "Greedent", "Greninja", "Grimer", "Grimmsnarl", "Grookey", "Grotle", "Groudon", "Grovyle", "Growlithe", "Grubbin", "Grumpig", "Gulpin", "Gumshoos", "Gurdurr", "Guzzlord", "Gyarados", "Hakamo-o", "Happiny", "Hariyama", "Hatenna", "Hatterene", "Hattrem", "Haunter", "Hawlucha", "Haxorus", "Heatmor", "Heatran", "Heliolisk", "Helioptile", "Heracross", "Herdier", "Hippopotas", "Hippowdon", "Hitmonchan", "Hitmonlee", "Hitmontop", "Ho-Oh", "Honchkrow", "Honedge", "Hoopa", "Hoothoot", "Hoppip", "Horsea", "Houndoom", "Houndour", "Huntail", "Hydreigon", "Hypno", "Igglybuff", "Illumise", "Impidimp", "Incineroar", "Indeedee", "Infernape", "Inkay", "Inteleon", "Ivysaur", "Jangmo-o", "Jellicent", "Jigglypuff", "Jirachi", "Jolteon", "Joltik", "Jumpluff", "Jynx", "Kabuto", "Kabutops", "Kadabra", "Kakuna", "Kangaskhan", "Karrablast", "Kartana", "Kecleon", "Keldeo", "Kingdra", "Kingler", "Kirlia", "Klang", "Klefki", "Klink", "Klinklang", "Koffing", "Komala", "Kommo-o", "Krabby", "Kricketot", "Kricketune", "Krokorok", "Krookodile", "Kubfu", "Kyogre", "Kyurem", "Lairon", "Lampent", "Landorus", "Lanturn", "Lapras", "Larvesta", "Larvitar", "Latias", "Latios", "Leafeon", "Leavanny", "Ledian", "Ledyba", "Lickilicky", "Lickitung", "Liepard", "Lileep", "Lilligant", "Lillipup", "Linoone", "Litleo", "Litten", "Litwick", "Lombre", "Lopunny", "Lotad", "Loudred", "Lucario", "Ludicolo", "Lugia", "Lumineon", "Lunala", "Lunatone", "Lurantis", "Luvdisc", "Luxio", "Luxray", "Lycanroc", "Machamp", "Machoke", "Machop", "Magby", "Magcargo", "Magearna", "Magikarp", "Magmar", "Magmortar", "Magnemite", "Magneton", "Magnezone", "Makuhita", "Malamar", "Mamoswine", "Manaphy", "Mandibuzz", "Manectric", "Mankey", "Mantine", "Mantyke", "Maractus", "Mareanie", "Mareep", "Marill", "Marowak", "Marshadow", "Marshtomp", "Masquerain", "Mawile", "Medicham", "Meditite", "Meganium", "Melmetal", "Meloetta", "Meltan", "Meowstic", "Meowth", "Mesprit", "Metagross", "Metang", "Metapod", "Mew", "Mewtwo", "Mienfoo", "Mienshao", "Mightyena", "Milcery", "Milotic", "Miltank", "Mime Jr.", "Mimikyu", "Minccino", "Minior", "Minun", "Misdreavus", "Mismagius", "Moltres", "Monferno", "Morelull", "Morgrem", "Morpeko", "Mothim", "Mr. Mime", "Mr. Rime", "Mudbray", "Mudkip", "Mudsdale", "Muk", "Munchlax", "Munna", "Murkrow", "Musharna", "Naganadel", "Natu", "Necrozma", "Nickit", "Nidoking", "Nidoqueen", "Nidoran♀", "Nidoran♂", "Nidorina", "Nidorino", "Nihilego", "Nincada", "Ninetales", "Ninjask", "Noctowl", "Noibat", "Noivern", "Nosepass", "Numel", "Nuzleaf", "Obstagoon", "Octillery", "Oddish", "Omanyte", "Omastar", "Onix", "Oranguru", "Orbeetle", "Oricorio", "Oshawott", "Pachirisu", "Palkia", "Palossand", "Palpitoad", "Pancham", "Pangoro", "Panpour", "Pansage", "Pansear", "Paras", "Parasect", "Passimian", "Patrat", "Pawniard", "Pelipper", "Perrserker", "Persian", "Petilil", "Phanpy", "Phantump", "Pheromosa", "Phione", "Pichu", "Pidgeot", "Pidgeotto", "Pidgey", "Pidove", "Pignite", "Pikachu", "Pikipek", "Piloswine", "Pincurchin", "Pineco", "Pinsir", "Piplup", "Plusle", "Poipole", "Politoed", "Poliwag", "Poliwhirl", "Poliwrath", "Polteageist", "Ponyta", "Poochyena", "Popplio", "Porygon", "Porygon-Z", "Porygon2", "Primarina", "Primeape", "Prinplup", "Probopass", "Psyduck", "Pumpkaboo", "Pupitar", "Purrloin", "Purugly", "Pyroar", "Pyukumuku", "Quagsire", "Quilava", "Quilladin", "Qwilfish", "Raboot", "Raichu", "Raikou", "Ralts", "Rampardos", "Rapidash", "Raticate", "Rattata", "Rayquaza", "Regice", "Regidrago", "Regieleki", "Regigigas", "Regirock", "Registeel", "Relicanth", "Remoraid", "Reshiram", "Reuniclus", "Rhydon", "Rhyhorn", "Rhyperior", "Ribombee", "Rillaboom", "Riolu", "Rockruff", "Roggenrola", "Rolycoly", "Rookidee", "Roselia", "Roserade", "Rotom", "Rowlet", "Rufflet", "Runerigus", "Sableye", "Salamence", "Salandit", "Salazzle", "Samurott", "Sandaconda", "Sandile", "Sandshrew", "Sandslash", "Sandygast", "Sawk", "Sawsbuck", "Scatterbug", "Sceptile", "Scizor", "Scolipede", "Scorbunny", "Scrafty", "Scraggy", "Scyther", "Seadra", "Seaking", "Sealeo", "Seedot", "Seel", "Seismitoad", "Sentret", "Serperior", "Servine", "Seviper", "Sewaddle", "Sharpedo", "Shaymin", "Shedinja", "Shelgon", "Shellder", "Shellos", "Shelmet", "Shieldon", "Shiftry", "Shiinotic", "Shinx", "Shroomish", "Shuckle", "Shuppet", "Sigilyph", "Silcoon", "Silicobra", "Silvally", "Simipour", "Simisage", "Simisear", "Sinistea", "Sirfetch\'d", "Sizzlipede", "Skarmory", "Skiddo", "Skiploom", "Skitty", "Skorupi", "Skrelp", "Skuntank", "Skwovet", "Slaking", "Slakoth", "Sliggoo", "Slowbro", "Slowking", "Slowpoke", "Slugma", "Slurpuff", "Smeargle", "Smoochum", "Sneasel", "Snivy", "Snom", "Snorlax", "Snorunt", "Snover", "Snubbull", "Sobble", "Solgaleo", "Solosis", "Solrock", "Spearow", "Spectrier", "Spewpa", "Spheal", "Spinarak", "Spinda", "Spiritomb", "Spoink", "Spritzee", "Squirtle", "Stakataka", "Stantler", "Staraptor", "Staravia", "Starly", "Starmie", "Staryu", "Steelix", "Steenee", "Stonjourner", "Stoutland", "Stufful", "Stunfisk", "Stunky", "Sudowoodo", "Suicune", "Sunflora", "Sunkern", "Surskit", "Swablu", "Swadloon", "Swalot", "Swampert", "Swanna", "Swellow", "Swinub", "Swirlix", "Swoobat", "Sylveon", "Taillow", "Talonflame", "Tangela", "Tangrowth", "Tapu Bulu", "Tapu Fini", "Tapu Koko", "Tapu Lele", "Tauros", "Teddiursa", "Tentacool", "Tentacruel", "Tepig", "Terrakion", "Thievul", "Throh", "Thundurus", "Thwackey", "Timburr", "Tirtouga", "Togedemaru", "Togekiss", "Togepi", "Togetic", "Torchic", "Torkoal", "Tornadus", "Torracat", "Torterra", "Totodile", "Toucannon", "Toxapex", "Toxel", "Toxicroak", "Toxtricity", "Tranquill", "Trapinch", "Treecko", "Trevenant", "Tropius", "Trubbish", "Trumbeak", "Tsareena", "Turtonator", "Turtwig", "Tympole", "Tynamo", "Type: Null", "Typhlosion", "Tyranitar", "Tyrantrum", "Tyrogue", "Tyrunt", "Umbreon", "Unfezant", "Unown", "Ursaring", "Urshifu", "Uxie", "Vanillish", "Vanillite", "Vanilluxe", "Vaporeon", "Venipede", "Venomoth", "Venonat", "Venusaur", "Vespiquen", "Vibrava", "Victini", "Victreebel", "Vigoroth", "Vikavolt", "Vileplume", "Virizion", "Vivillon", "Volbeat", "Volcanion", "Volcarona", "Voltorb", "Vullaby", "Vulpix", "Wailmer", "Wailord", "Walrein", "Wartortle", "Watchog", "Weavile", "Weedle", "Weepinbell", "Weezing", "Whimsicott", "Whirlipede", "Whiscash", "Whismur", "Wigglytuff", "Wimpod", "Wingull", "Wishiwashi", "Wobbuffet", "Woobat", "Wooloo", "Wooper", "Wormadam", "Wurmple", "Wynaut", "Xatu", "Xerneas", "Xurkitree", "Yamask", "Yamper", "Yanma", "Yanmega", "Yungoos", "Yveltal", "Zacian", "Zamazenta", "Zangoose", "Zapdos", "Zarude", "Zebstrika", "Zekrom", "Zeraora", "Zigzagoon", "Zoroark", "Zorua", "Zubat", "Zweilous", "Zygarde", ];
autocomplete(document.getElementById("myInput"), arr);
