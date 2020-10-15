function typeColor(type, attr) {
    if (type == "fire") {
        document.getElementById(attr).style.backgroundColor = "#EE8130";
        document.getElementById(attr).style.color = "#FFFFFF";
    }
    else if (type == "normal") {
        document.getElementById(attr).style.backgroundColor = "#A8A77A";
        document.getElementById(attr).style.color = "#000000";
    }
    else if (type == "water") {
        document.getElementById(attr).style.backgroundColor = "#6390F0";
        document.getElementById(attr).style.color = "#FFFFFF";
    }
    else if (type == "electric") {
        document.getElementById(attr).style.backgroundColor = "#F7D02C";
        document.getElementById(attr).style.color = "#000000";
    }
    else if (type == "grass") {
        document.getElementById(attr).style.backgroundColor = "#7AC74C";
        document.getElementById(attr).style.color = "#FFFFFF";
    }
    else if (type == "bug") {
        document.getElementById(attr).style.backgroundColor = "#A6B91A";
        document.getElementById(attr).style.color = "#000000";
    }
    else if (type == "psychic") {
        document.getElementById(attr).style.backgroundColor = "#F95587";
        document.getElementById(attr).style.color = "#FFFFFF";
    }
    else if (type == "ground") {
        document.getElementById(attr).style.backgroundColor = "#E2BF65";
        document.getElementById(attr).style.color = "#000000";
    }
    else if (type == "poison") {
        document.getElementById(attr).style.backgroundColor = "#A33EA1";
        document.getElementById(attr).style.color = "#FFFFFF";
    }
    else if (type == "ice") {
        document.getElementById(attr).style.backgroundColor = "#96D9D6";
        document.getElementById(attr).style.color = "#000000";
    }
    else if (type == "rock") {
        document.getElementById(attr).style.backgroundColor = "#B6A136";
        document.getElementById(attr).style.color = "#000000";
    }
    else if (type == "fighting") {
        document.getElementById(attr).style.backgroundColor = "#C22E28";
        document.getElementById(attr).style.color = "#FFFFFF";
    }
    else if (type == "flying") {
        document.getElementById(attr).style.backgroundColor = "#A98FF3";
        document.getElementById(attr).style.color = "#000000";
    }
    else if (type == "ghost") {
        document.getElementById(attr).style.backgroundColor = "#735797";
        document.getElementById(attr).style.color = "#000000";
    }
    else if (type == "dragon") {
        document.getElementById(attr).style.backgroundColor = "#6F35FC";
        document.getElementById(attr).style.color = "#FFFFFF";
    }
    else if (type == "dark") {
        document.getElementById(attr).style.backgroundColor = "#705746";
        document.getElementById(attr).style.color = "#FFFFFF";
    }
    else if (type == "steel") {
        document.getElementById(attr).style.backgroundColor = "#B7B7CE";
        document.getElementById(attr).style.color = "#000000";
    }
    else if (type == "fairy") {
        document.getElementById(attr).style.backgroundColor = "#D685AD";
        document.getElementById(attr).style.color = "#000000";
    }
}

function getForm1(formName) {
    $.getJSON("./data/forms.json", function(json) {
        for (var i = 0; i < json.length; ++i) {
            if (formName == json[i].name) {
                
                //NAME--------------------------------------------------------------------------------------------------------
                document.getElementById("form1name").innerHTML = json[i].name;
                if (json[i].id != "NONE") {
                    addIcon(json[i].id, "form1icon");
                }
                else {
                    clearIcon("form1icon");
                }      
                //TYPE--------------------------------------------------------------------------------------------------------
                if (json[i].type.length == 2) {
                    document.getElementById("form1type1").innerHTML = json[i].type[0];
                    document.getElementById("form1type2").innerHTML = json[i].type[1];
                    typeColor(json[i].type[0], "form1type1")
                    typeColor(json[i].type[1], "form1type2")
                }
                else {
                    document.getElementById("form1type1").innerHTML = json[i].type;
                    document.getElementById("form1type2").innerHTML = "";
                    document.getElementById("form1type2").style.backgroundColor = "";
                    typeColor(json[i].type[0], "form1type1")
                }

                //ABILITIES-----------------------------------------------------------------------------------------------------
                if (json[i].ability.length == 2) {
                    document.getElementById("form1abil1").innerHTML = json[i].ability[0];
                    abilDesc(json[i].ability[0], "form1abil1");
                    document.getElementById("form1abil2").innerHTML = json[i].ability[1];
                    abilDesc(json[i].ability[1], "form1abil2");
                }
                else {
                    document.getElementById("form1abil1").innerHTML = json[i].ability;
                    abilDesc(json[i].ability, "form1abil1");
                    document.getElementById("form1abil2").innerHTML = "-";
                    clearAbilDesc("form1abil2");
                }

                if (json[i].hiddenability != "NONE") {
                    document.getElementById("form1ha").innerHTML = "HA: " + json[i].hiddenability;
                    abilDesc(json[i].hiddenability, "form1ha");
                }
                else {
                    
                    document.getElementById("form1ha").innerHTML = "HA: -";
                    clearAbilDesc("form1ha");
                }
                //STATS-------------------------------------------------------------------------------------------------------
                document.getElementById("form1hp").innerHTML = "HP: " + json[i].stats[0];
                document.getElementById("form1atk").innerHTML = "ATK: " + json[i].stats[1];
                document.getElementById("form1def").innerHTML = "DEF: " + json[i].stats[2];
                document.getElementById("form1spa").innerHTML = "SpA: " + json[i].stats[3];
                document.getElementById("form1spd").innerHTML = "SpD: " + json[i].stats[4];
                document.getElementById("form1spe").innerHTML = "SPE: " + json[i].stats[5];
            }
        }
    });
}

function getForm2(formName) {
    $.getJSON("./data/forms.json", function(json) {
        for (var i = 0; i < json.length; ++i) {
            if (formName == json[i].name) {
                
                //NAME--------------------------------------------------------------------------------------------------------
                document.getElementById("form2name").innerHTML = json[i].name;
                if (json[i].id != "NONE") {
                    addIcon(json[i].id, "form2icon");
                }
                else {
                    clearIcon("form2icon");
                }     
                //TYPE--------------------------------------------------------------------------------------------------------
                if (json[i].type.length == 2) {
                    document.getElementById("form2type1").innerHTML = json[i].type[0];
                    document.getElementById("form2type2").innerHTML = json[i].type[1];
                    typeColor(json[i].type[0], "form2type1")
                    typeColor(json[i].type[1], "form2type2")
                }
                else {
                    document.getElementById("form2type1").innerHTML = json[i].type;
                    document.getElementById("form2type2").innerHTML = "";
                    document.getElementById("form2type2").style.backgroundColor = "";
                    typeColor(json[i].type[0], "form2type1")
                }

                //ABILITIES-----------------------------------------------------------------------------------------------------
                if (json[i].ability.length == 2) {
                    document.getElementById("form2abil1").innerHTML = json[i].ability[0];
                    abilDesc(json[i].ability[0], "form2abil1");
                    document.getElementById("form2abil2").innerHTML = json[i].ability[1];
                    abilDesc(json[i].ability[1], "form2abil2");
                }
                else {
                    document.getElementById("form2abil1").innerHTML = json[i].ability;
                    abilDesc(json[i].ability, "form2abil1");
                    document.getElementById("form2abil2").innerHTML = "-";
                    clearAbilDesc("form2abil2");
                }

                if (json[i].hiddenability != "NONE") {
                    document.getElementById("form2ha").innerHTML = "HA: " + json[i].hiddenability;
                    abilDesc(json[i].hiddenability, "form2ha");
                }
                else {
                    
                    document.getElementById("form2ha").innerHTML = "HA: -";
                    clearAbilDesc("form2ha");
                }
                //STATS-------------------------------------------------------------------------------------------------------
                document.getElementById("form2hp").innerHTML = "HP: " + json[i].stats[0];
                document.getElementById("form2atk").innerHTML = "ATK: " + json[i].stats[1];
                document.getElementById("form2def").innerHTML = "DEF: " + json[i].stats[2];
                document.getElementById("form2spa").innerHTML = "SpA: " + json[i].stats[3];
                document.getElementById("form2spd").innerHTML = "SpD: " + json[i].stats[4];
                document.getElementById("form2spe").innerHTML = "SPE: " + json[i].stats[5];
            }
        }
    });
}

function getForm3(formName) {
    $.getJSON("./data/forms.json", function(json) {
        for (var i = 0; i < json.length; ++i) {
            if (formName == json[i].name) {
                
                //NAME--------------------------------------------------------------------------------------------------------
                document.getElementById("form3name").innerHTML = json[i].name;
                if (json[i].id != "NONE") {
                    addIcon(json[i].id, "form3icon");
                }
                else {
                    clearIcon("form3icon");
                }        
                //TYPE--------------------------------------------------------------------------------------------------------
                if (json[i].type.length == 2) {
                    document.getElementById("form3type1").innerHTML = json[i].type[0];
                    document.getElementById("form3type2").innerHTML = json[i].type[1];
                    typeColor(json[i].type[0], "form3type1")
                    typeColor(json[i].type[1], "form3type2")
                }
                else {
                    document.getElementById("form3type1").innerHTML = json[i].type;
                    document.getElementById("form3type2").innerHTML = "";
                    document.getElementById("form3type2").style.backgroundColor = "";
                    typeColor(json[i].type[0], "form3type1")
                }

                //ABILITIES-----------------------------------------------------------------------------------------------------
                if (json[i].ability.length == 2) {
                    document.getElementById("form3abil1").innerHTML = json[i].ability[0];
                    abilDesc(json[i].ability[0], "form3abil1");
                    document.getElementById("form3abil2").innerHTML = json[i].ability[1];
                    abilDesc(json[i].ability[1], "form3abil2");
                }
                else {
                    document.getElementById("form3abil1").innerHTML = json[i].ability;
                    abilDesc(json[i].ability, "form3abil1");
                    document.getElementById("form3abil2").innerHTML = "-";
                    clearAbilDesc("form3abil2");
                }

                if (json[i].hiddenability != "NONE") {
                    document.getElementById("form3ha").innerHTML = "HA: " + json[i].hiddenability;
                    abilDesc(json[i].hiddenability, "form3ha");
                }
                else {
                    
                    document.getElementById("form3ha").innerHTML = "HA: -";
                    clearAbilDesc("form3ha");
                }
                //STATS-------------------------------------------------------------------------------------------------------
                document.getElementById("form3hp").innerHTML = "HP: " + json[i].stats[0];
                document.getElementById("form3atk").innerHTML = "ATK: " + json[i].stats[1];
                document.getElementById("form3def").innerHTML = "DEF: " + json[i].stats[2];
                document.getElementById("form3spa").innerHTML = "SpA: " + json[i].stats[3];
                document.getElementById("form3spd").innerHTML = "SpD: " + json[i].stats[4];
                document.getElementById("form3spe").innerHTML = "SPE: " + json[i].stats[5];
            }
        }
    });
}

function addIcon(idNum, form) {
    var pkm = "https://www.serebii.net/pokedex-swsh/icon/" + idNum + ".png";

    document.getElementById(form).attributes[2].value = pkm;
}

function abilDesc(abilName, idName) {
    $.getJSON("/abilities.json", function(json) {
        for (var i = 0; i < json.length; ++i) {
            if (abilName == json[i].name) {
                document.getElementById(idName).attributes[3].value = json[i].description;
            }
        }
    });
}

function clearIcon(place) {
    document.getElementById(place).attributes[2].value = "";
}

function clearAllForms() {
    document.getElementById("pokename").innerHTML = "";
    clearIcon("pokeicon");
    document.getElementById("type1").innerHTML = "";
    document.getElementById("type2").innerHTML = "";
    document.getElementById("type1").style.backgroundColor = "";
    document.getElementById("type2").style.backgroundColor = "";
    document.getElementById("pokeabil1").innerHTML = "";
    document.getElementById("pokeabil2").innerHTML = "";
    document.getElementById("hiddenabil").innerHTML = "";
    document.getElementById("hp").innerHTML = "";
    document.getElementById("atk").innerHTML = "";
    document.getElementById("def").innerHTML = "";
    document.getElementById("spa").innerHTML = "";
    document.getElementById("spd").innerHTML = "";
    document.getElementById("spe").innerHTML = "";
    
    document.getElementById("form1name").innerHTML = "";
    clearIcon("form1icon");
    document.getElementById("form1type1").innerHTML = "";
    document.getElementById("form1type2").innerHTML = "";
    document.getElementById("form1type1").style.backgroundColor = "";
    document.getElementById("form1type2").style.backgroundColor = "";
    document.getElementById("form1abil1").innerHTML = "";
    document.getElementById("form1abil2").innerHTML = "";
    document.getElementById("form1ha").innerHTML = "";
    document.getElementById("form1hp").innerHTML = "";
    document.getElementById("form1atk").innerHTML = "";
    document.getElementById("form1def").innerHTML = "";
    document.getElementById("form1spa").innerHTML = "";
    document.getElementById("form1spd").innerHTML = "";
    document.getElementById("form1spe").innerHTML = "";

    document.getElementById("form2name").innerHTML = "";
    clearIcon("form2icon");
    document.getElementById("form2type1").innerHTML = "";
    document.getElementById("form2type2").innerHTML = "";
    document.getElementById("form2type1").style.backgroundColor = "";
    document.getElementById("form2type2").style.backgroundColor = "";
    document.getElementById("form2abil1").innerHTML = "";
    document.getElementById("form2abil2").innerHTML = "";
    document.getElementById("form2ha").innerHTML = "";
    document.getElementById("form2hp").innerHTML = "";
    document.getElementById("form2atk").innerHTML = "";
    document.getElementById("form2def").innerHTML = "";
    document.getElementById("form2spa").innerHTML = "";
    document.getElementById("form2spd").innerHTML = "";
    document.getElementById("form2spe").innerHTML = "";

    document.getElementById("form3name").innerHTML = "";
    clearIcon("form3icon");
    document.getElementById("form3type1").innerHTML = "";
    document.getElementById("form3type2").innerHTML = "";
    document.getElementById("form3type1").style.backgroundColor = "";
    document.getElementById("form3type2").style.backgroundColor = "";
    document.getElementById("form3abil1").innerHTML = "";
    document.getElementById("form3abil2").innerHTML = "";
    document.getElementById("form3ha").innerHTML = "";
    document.getElementById("form3hp").innerHTML = "";
    document.getElementById("form3atk").innerHTML = "";
    document.getElementById("form3def").innerHTML = "";
    document.getElementById("form3spa").innerHTML = "";
    document.getElementById("form3spd").innerHTML = "";
    document.getElementById("form3spe").innerHTML = "";
}

function clearAbilDesc(idName) {
    document.getElementById(idName).attributes[3].value = "";
}

function saveVar() {
    var pkmn = document.getElementById("myInput").value;
    $.getJSON("./data/pokemon.json", function(json) {
        for (var i = 0; i < json.length; ++i) {
            if (pkmn == json[i].name) {
                clearAllForms();
                
                if (json[i].forms[0] == "NONE") {
                     //NAME--------------------------------------------------------------------------------------------------------
                     document.getElementById("maincols").attributes[1].value = "row row-cols-1 row-cols-sm-2 row-cols-md-3";
                     document.getElementById("form1name").innerHTML = json[i].name;
                    if (json[i].id != "NONE") {
                        addIcon(json[i].id, "form1icon");
                    }
                    else {
                        clearIcon("form1icon");
                    }
                    //TYPE--------------------------------------------------------------------------------------------------------
                    if (json[i].type.length == 2) {
                        document.getElementById("form1type1").innerHTML = json[i].type[0];
                        document.getElementById("form1type2").innerHTML = json[i].type[1];
                        typeColor(json[i].type[0], "form1type1")
                        typeColor(json[i].type[1], "form1type2")
                    }
                    else {
                        document.getElementById("form1type1").innerHTML = json[i].type;
                        document.getElementById("form1type2").innerHTML = "";
                        document.getElementById("form1type2").style.backgroundColor = "";
                        typeColor(json[i].type[0], "form1type1")
                    }

                    //ABILITIES-----------------------------------------------------------------------------------------------------
                    if (json[i].ability.length == 2) {
                        document.getElementById("form1abil1").innerHTML = json[i].ability[0];
                        abilDesc(json[i].ability[0], "form1abil1");
                        document.getElementById("form1abil2").innerHTML = json[i].ability[1];
                        abilDesc(json[i].ability[1], "form1abil2");
                    }
                    else {
                        document.getElementById("form1abil1").innerHTML = json[i].ability;
                        abilDesc(json[i].ability, "form1abil1");
                        document.getElementById("form1abil2").innerHTML = "-";
                        clearAbilDesc("form1abil2");
                    }

                    if (json[i].hiddenability != "NONE") {
                        document.getElementById("form1ha").innerHTML = "HA: " + json[i].hiddenability;
                        abilDesc(json[i].hiddenability, "form1ha");
                    }
                    else {
                        document.getElementById("form1ha").innerHTML = "HA: -";
                        clearAbilDesc("form1ha");
                    }
                    //STATS-------------------------------------------------------------------------------------------------------
                    document.getElementById("form1hp").innerHTML = "HP: " + json[i].stats[0];
                    document.getElementById("form1atk").innerHTML = "ATK: " + json[i].stats[1];
                    document.getElementById("form1def").innerHTML = "DEF: " + json[i].stats[2];
                    document.getElementById("form1spa").innerHTML = "SpA: " + json[i].stats[3];
                    document.getElementById("form1spd").innerHTML = "SpD: " + json[i].stats[4];
                    document.getElementById("form1spe").innerHTML = "SPE: " + json[i].stats[5];
                }
                else {
                    //NAME--------------------------------------------------------------------------------------------------------
                    
                    if (json[i].altname != "NONE") {
                        document.getElementById("pokename").innerHTML = json[i].altname;
                    }
                    else {
                        document.getElementById("pokename").innerHTML = json[i].name;
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
                        document.getElementById("type2").style.backgroundColor = "";
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
                        document.getElementById("hiddenabil").innerHTML = "HA: " + json[i].hiddenability;
                        abilDesc(json[i].hiddenability, "hiddenabil");
                    }
                    else {
                        document.getElementById("hiddenabil").innerHTML = "HA: -";
                        clearAbilDesc("hiddenabil");
                    }
                    //STATS-------------------------------------------------------------------------------------------------------
                    document.getElementById("hp").innerHTML = "HP: " + json[i].stats[0];
                    document.getElementById("atk").innerHTML = "ATK: " + json[i].stats[1];
                    document.getElementById("def").innerHTML = "DEF: " + json[i].stats[2];
                    document.getElementById("spa").innerHTML = "SpA: " + json[i].stats[3];
                    document.getElementById("spd").innerHTML = "SpD: " + json[i].stats[4];
                    document.getElementById("spe").innerHTML = "SPE: " + json[i].stats[5];

                    //FORMS-------------------------------------------------------------------------------------------------------
                    if (json[i].forms[0] != "NONE") {
                        //alert(document.getElementById("maincols").attributes[1].value);
                        document.getElementById("maincols").attributes[1].value = "row row-cols-1 row-cols-sm-2 row-cols-md-2";
                        getForm1(json[i].forms[0]);
                        //<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3"></div>
                        

                        if (json[i].forms.length == 2) {
                            document.getElementById("maincols").attributes[1].value = "row row-cols-1 row-cols-sm-2 row-cols-md-3";
                            getForm2(json[i].forms[1]);
                        }
                        else if (json[i].forms.length == 3) {
                            document.getElementById("maincols").attributes[1].value = "row row-cols-1 row-cols-sm-2 row-cols-md-4";
                            getForm2(json[i].forms[1]);
                            getForm3(json[i].forms[2]);
                        }
                    }
                }
            
            } 
        }  
    });   
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
            b.innerHTML += "<input type='hidden' value=" + arr[i] + ">";
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
            //if (x) x[currentFocus].click();
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
var arr = ["Abomasnow", "Abra", "Absol", "Accelgor", "Aegislash", "Aerodactyl", "Aggron", "Aipom", "Alakazam", "Alcremie", "Alomomola", "Altaria", "Amaura", "Ambipom", "Amoonguss", "Ampharos", "Anorith", "Appletun", "Applin", "Araquanid", "Arbok", "Arcanine", "Arceus", "Archen", "Archeops", "Arctovish", "Arctozolt", "Ariados", "Armaldo", "Aromatisse", "Aron", "Arrokuda", "Articuno", "Audino", "Aurorus", "Avalugg", "Axew", "Azelf", "Azumarill", "Azurill", "Bagon", "Baltoy", "Banette", "Barbaracle", "Barboach", "Barraskewda", "Basculin", "Bastiodon", "Bayleef", "Beartic", "Beautifly", "Beedrill", "Beheeyem", "Beldum", "Bellossom", "Bellsprout", "Bergmite", "Bewear", "Bibarel", "Bidoof", "Binacle", "Bisharp", "Blacephalon", "Blastoise", "Blaziken", "Blipbug", "Blissey", "Blitzle", "Boldore", "Boltund", "Bonsly", "Bouffalant", "Bounsweet", "Braixen", "Braviary", "Breloom", "Brionne", "Bronzong", "Bronzor", "Bruxish", "Budew", "Buizel", "Bulbasaur", "Buneary", "Bunnelby", "Burmy", "Butterfree", "Buzzwole", "Cacnea", "Cacturne", "Camerupt", "Carbink", "Carkol", "Carnivine", "Carracosta", "Carvanha", "Cascoon", "Castform", "Caterpie", "Celebi", "Celesteela", "Centiskorch", "Chandelure", "Chansey", "Charizard", "Charjabug", "Charmander", "Charmeleon", "Chatot", "Cherrim", "Cherubi", "Chesnaught", "Chespin", "Chewtle", "Chikorita", "Chimchar", "Chimecho", "Chinchou", "Chingling", "Cinccino", "Cinderace", "Clamperl", "Clauncher", "Clawitzer", "Claydol", "Clefable", "Clefairy", "Cleffa", "Clobbopus", "Cloyster", "Coalossal", "Cobalion", "Cofagrigus", "Combee", "Combusken", "Comfey", "Conkeldurr", "Copperajah", "Corphish", "Corsola", "Corviknight", "Corvisquire", "Cosmoem", "Cosmog", "Cottonee", "Crabominable", "Crabrawler", "Cradily", "Cramorant", "Cranidos", "Crawdaunt", "Cresselia", "Croagunk", "Crobat", "Croconaw", "Crustle", "Cryogonal", "Cubchoo", "Cubone", "Cufant", "Cursola", "Cutiefly", "Cyndaquil", "Darkrai", "Darmanitan", "Dartrix", "Darumaka", "Decidueye", "Dedenne", "Deerling", "Deino", "Delcatty", "Delibird", "Delphox", "Deoxys", "Dewgong", "Dewott", "Dewpider", "Dhelmise", "Dialga", "Diancie", "Diggersby", "Diglett", "Ditto", "Dodrio", "Doduo", "Donphan", "Dottler", "Doublade", "Dracovish", "Dracozolt", "Dragalge", "Dragapult", "Dragonair", "Dragonite", "Drakloak", "Drampa", "Drapion", "Dratini", "Drednaw", "Dreepy", "Drifblim", "Drifloon", "Drilbur", "Drizzile", "Drowzee", "Druddigon", "Dubwool", "Ducklett", "Dugtrio", "Dunsparce", "Duosion", "Duraludon", "Durant", "Dusclops", "Dusknoir", "Duskull", "Dustox", "Dwebble", "Eelektrik", "Eelektross", "Eevee", "Eiscue", "Ekans", "Eldegoss", "Electabuzz", "Electivire", "Electrike", "Electrode", "Elekid", "Elgyem", "Emboar", "Emolga", "Empoleon", "Entei", "Escavalier", "Espeon", "Espurr", "Eternatus", "Excadrill", "Exeggcute", "Exeggutor", "Exploud", "Falinks", "Farfetch'd", "Fearow", "Feebas", "Fennekin", "Feraligatr", "Ferroseed", "Ferrothorn", "Finneon", "Flaaffy", "Flabébé", "Flapple", "Flareon", "Fletchinder", "Fletchling", "Floatzel", "Floette", "Florges", "Flygon", "Fomantis", "Foongus", "Forretress", "Fraxure", "Frillish", "Froakie", "Frogadier", "Froslass", "Frosmoth", "Furfrou", "Furret", "Gabite", "Gallade", "Galvantula", "Garbodor", "Garchomp", "Gardevoir", "Gastly", "Gastrodon", "Genesect", "Gengar", "Geodude", "Gible", "Gigalith", "Girafarig", "Giratina", "Glaceon", "Glalie", "Glameow", "Gligar", "Gliscor", "Gloom", "Gogoat", "Golbat", "Goldeen", "Golduck", "Golem", "Golett", "Golisopod", "Golurk", "Goodra", "Goomy", "Gorebyss", "Gossifleur", "Gothita", "Gothitelle", "Gothorita", "Gourgeist", "Granbull", "Grapploct", "Graveler", "Greedent", "Greninja", "Grimer", "Grimmsnarl", "Grookey", "Grotle", "Groudon", "Grovyle", "Growlithe", "Grubbin", "Grumpig", "Gulpin", "Gumshoos", "Gurdurr", "Guzzlord", "Gyarados", "Hakamo-o", "Happiny", "Hariyama", "Hatenna", "Hatterene", "Hattrem", "Haunter", "Hawlucha", "Haxorus", "Heatmor", "Heatran", "Heliolisk", "Helioptile", "Heracross", "Herdier", "Hippopotas", "Hippowdon", "Hitmonchan", "Hitmonlee", "Hitmontop", "Ho-Oh", "Honchkrow", "Honedge", "Hoopa", "Hoothoot", "Hoppip", "Horsea", "Houndoom", "Houndour", "Huntail", "Hydreigon", "Hypno", "Igglybuff", "Illumise", "Impidimp", "Incineroar", "Indeedee", "Infernape", "Inkay", "Inteleon", "Ivysaur", "Jangmo-o", "Jellicent", "Jigglypuff", "Jirachi", "Jolteon", "Joltik", "Jumpluff", "Jynx", "Kabuto", "Kabutops", "Kadabra", "Kakuna", "Kangaskhan", "Karrablast", "Kartana", "Kecleon", "Keldeo", "Kingdra", "Kingler", "Kirlia", "Klang", "Klefki", "Klink", "Klinklang", "Koffing", "Komala", "Kommo-o", "Krabby", "Kricketot", "Kricketune", "Krokorok", "Krookodile", "Kubfu", "Kyogre", "Kyurem", "Lairon", "Lampent", "Landorus", "Lanturn", "Lapras", "Larvesta", "Larvitar", "Latias", "Latios", "Leafeon", "Leavanny", "Ledian", "Ledyba", "Lickilicky", "Lickitung", "Liepard", "Lileep", "Lilligant", "Lillipup", "Linoone", "Litleo", "Litten", "Litwick", "Lombre", "Lopunny", "Lotad", "Loudred", "Lucario", "Ludicolo", "Lugia", "Lumineon", "Lunala", "Lunatone", "Lurantis", "Luvdisc", "Luxio", "Luxray", "Lycanroc", "Machamp", "Machoke", "Machop", "Magby", "Magcargo", "Magearna", "Magikarp", "Magmar", "Magmortar", "Magnemite", "Magneton", "Magnezone", "Makuhita", "Malamar", "Mamoswine", "Manaphy", "Mandibuzz", "Manectric", "Mankey", "Mantine", "Mantyke", "Maractus", "Mareanie", "Mareep", "Marill", "Marowak", "Marshadow", "Marshtomp", "Masquerain", "Mawile", "Medicham", "Meditite", "Meganium", "Melmetal", "Meloetta", "Meltan", "Meowstic", "Meowth", "Mesprit", "Metagross", "Metang", "Metapod", "Mew", "Mewtwo", "Mienfoo", "Mienshao", "Mightyena", "Milcery", "Milotic", "Miltank", "Mime Jr.", "Mimikyu", "Minccino", "Minior", "Minun", "Misdreavus", "Mismagius", "Moltres", "Monferno", "Morelull", "Morgrem", "Morpeko", "Mothim", "Mr. Mime", "Mr. Rime", "Mudbray", "Mudkip", "Mudsdale", "Muk", "Munchlax", "Munna", "Murkrow", "Musharna", "Naganadel", "Natu", "Necrozma", "Nickit", "Nidoking", "Nidoqueen", "Nidoran♀", "Nidoran♂", "Nidorina", "Nidorino", "Nihilego", "Nincada", "Ninetales", "Ninjask", "Noctowl", "Noibat", "Noivern", "Nosepass", "Numel", "Nuzleaf", "Obstagoon", "Octillery", "Oddish", "Omanyte", "Omastar", "Onix", "Oranguru", "Orbeetle", "Oricorio", "Oshawott", "Pachirisu", "Palkia", "Palossand", "Palpitoad", "Pancham", "Pangoro", "Panpour", "Pansage", "Pansear", "Paras", "Parasect", "Passimian", "Patrat", "Pawniard", "Pelipper", "Perrserker", "Persian", "Petilil", "Phanpy", "Phantump", "Pheromosa", "Phione", "Pichu", "Pidgeot", "Pidgeotto", "Pidgey", "Pidove", "Pignite", "Pikachu", "Pikipek", "Piloswine", "Pincurchin", "Pineco", "Pinsir", "Piplup", "Plusle", "Poipole", "Politoed", "Poliwag", "Poliwhirl", "Poliwrath", "Polteageist", "Ponyta", "Poochyena", "Popplio", "Porygon", "Porygon-Z", "Porygon2", "Primarina", "Primeape", "Prinplup", "Probopass", "Psyduck", "Pumpkaboo", "Pupitar", "Purrloin", "Purugly", "Pyroar", "Pyukumuku", "Quagsire", "Quilava", "Quilladin", "Qwilfish", "Raboot", "Raichu", "Raikou", "Ralts", "Rampardos", "Rapidash", "Raticate", "Rattata", "Rayquaza", "Regice", "Regigigas", "Regirock", "Registeel", "Relicanth", "Remoraid", "Reshiram", "Reuniclus", "Rhydon", "Rhyhorn", "Rhyperior", "Ribombee", "Rillaboom", "Riolu", "Rockruff", "Roggenrola", "Rolycoly", "Rookidee", "Roselia", "Roserade", "Rotom", "Rowlet", "Rufflet", "Runerigus", "Sableye", "Salamence", "Salandit", "Salazzle", "Samurott", "Sandaconda", "Sandile", "Sandshrew", "Sandslash", "Sandygast", "Sawk", "Sawsbuck", "Scatterbug", "Sceptile", "Scizor", "Scolipede", "Scorbunny", "Scrafty", "Scraggy", "Scyther", "Seadra", "Seaking", "Sealeo", "Seedot", "Seel", "Seismitoad", "Sentret", "Serperior", "Servine", "Seviper", "Sewaddle", "Sharpedo", "Shaymin", "Shedinja", "Shelgon", "Shellder", "Shellos", "Shelmet", "Shieldon", "Shiftry", "Shiinotic", "Shinx", "Shroomish", "Shuckle", "Shuppet", "Sigilyph", "Silcoon", "Silicobra", "Silvally", "Simipour", "Simisage", "Simisear", "Sinistea", "Sirfetch\'d", "Sizzlipede", "Skarmory", "Skiddo", "Skiploom", "Skitty", "Skorupi", "Skrelp", "Skuntank", "Skwovet", "Slaking", "Slakoth", "Sliggoo", "Slowbro", "Slowking", "Slowpoke", "Slugma", "Slurpuff", "Smeargle", "Smoochum", "Sneasel", "Snivy", "Snom", "Snorlax", "Snorunt", "Snover", "Snubbull", "Sobble", "Solgaleo", "Solosis", "Solrock", "Spearow", "Spewpa", "Spheal", "Spinarak", "Spinda", "Spiritomb", "Spoink", "Spritzee", "Squirtle", "Stakataka", "Stantler", "Staraptor", "Staravia", "Starly", "Starmie", "Staryu", "Steelix", "Steenee", "Stonjourner", "Stoutland", "Stufful", "Stunfisk", "Stunky", "Sudowoodo", "Suicune", "Sunflora", "Sunkern", "Surskit", "Swablu", "Swadloon", "Swalot", "Swampert", "Swanna", "Swellow", "Swinub", "Swirlix", "Swoobat", "Sylveon", "Taillow", "Talonflame", "Tangela", "Tangrowth", "Tapu Bulu", "Tapu Fini", "Tapu Koko", "Tapu Lele", "Tauros", "Teddiursa", "Tentacool", "Tentacruel", "Tepig", "Terrakion", "Thievul", "Throh", "Thundurus", "Thwackey", "Timburr", "Tirtouga", "Togedemaru", "Togekiss", "Togepi", "Togetic", "Torchic", "Torkoal", "Tornadus", "Torracat", "Torterra", "Totodile", "Toucannon", "Toxapex", "Toxel", "Toxicroak", "Toxtricity", "Tranquill", "Trapinch", "Treecko", "Trevenant", "Tropius", "Trubbish", "Trumbeak", "Tsareena", "Turtonator", "Turtwig", "Tympole", "Tynamo", "Type: Null", "Typhlosion", "Tyranitar", "Tyrantrum", "Tyrogue", "Tyrunt", "Umbreon", "Unfezant", "Unown", "Ursaring", "Urshifu", "Uxie", "Vanillish", "Vanillite", "Vanilluxe", "Vaporeon", "Venipede", "Venomoth", "Venonat", "Venusaur", "Vespiquen", "Vibrava", "Victini", "Victreebel", "Vigoroth", "Vikavolt", "Vileplume", "Virizion", "Vivillon", "Volbeat", "Volcanion", "Volcarona", "Voltorb", "Vullaby", "Vulpix", "Wailmer", "Wailord", "Walrein", "Wartortle", "Watchog", "Weavile", "Weedle", "Weepinbell", "Weezing", "Whimsicott", "Whirlipede", "Whiscash", "Whismur", "Wigglytuff", "Wimpod", "Wingull", "Wishiwashi", "Wobbuffet", "Woobat", "Wooloo", "Wooper", "Wormadam", "Wurmple", "Wynaut", "Xatu", "Xerneas", "Xurkitree", "Yamask", "Yamper", "Yanma", "Yanmega", "Yungoos", "Yveltal", "Zacian", "Zamazenta", "Zangoose", "Zapdos", "Zarude", "Zebstrika", "Zekrom", "Zeraora", "Zigzagoon", "Zoroark", "Zorua", "Zubat", "Zweilous", "Zygarde", ];
autocomplete(document.getElementById("myInput"), arr);
