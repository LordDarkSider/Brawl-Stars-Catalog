// Function to remove spaces in string
function remSpaceInStr(string) {
    return string.replace(/\s/g, '');
}

// Hide all sorts
var bsort = document.getElementById("brawlers-sort");
var tsort = document.getElementById("themes-sort");
var rsort = document.getElementById("rarities-sort");
bsort.style.display = "none";
tsort.style.display = "none";
rsort.style.display = "none";

// Selection of sort
var sortSlct = document.getElementById("sort");
sortSlct.addEventListener("change", selectSort);
function selectSort(){
    let sort = sortSlct.value;
    if(sort=="brawler"){
        tsort.style.display = "none";
        rsort.style.display = "none";
        bsort.style.display = "block";
        skinsElements.forEach(skin => {
            document.getElementById("field-"+skin.brawler).appendChild(skin);
        })
    }
    else if(sort=="theme"){
        bsort.style.display = "none";
        rsort.style.display = "none";
        tsort.style.display = "block";
        skinsElements.forEach(skin => {
            if(skin.theme != ""){
                document.getElementById("field-"+skin.theme).appendChild(skin);
            }
        })
    }
    else if(sort=="rarity"){
        bsort.style.display = "none";
        tsort.style.display = "none";
        rsort.style.display = "block";
        skinsElements.forEach(skin => {
            if(skin.rarity != "Default" && skin.rarity != ""){
                document.getElementById("field-"+skin.rarity).appendChild(skin);
            }
        })
    }
}


// Selection of view
var viewSlct = document.getElementById("view");
viewSlct.addEventListener("change", selectView);
var total = document.getElementById("total");
function selectView(){
    let view = viewSlct.value;
    if(view=="all"){
        skinsElements.forEach( skin => {
            skin.style.display = "inline-block";
        });
        total.innerHTML = skinsElements.length;
    }
    else{
        let x = ["possession", "purchase", "favorites"].indexOf(view);
        let t = 0;
        skinsElements.forEach( skin => {
            if(skinsStates.get(skin.id)[x]){
                skin.style.display = "inline-block";
                t++;
            }
            else{
                skin.style.display = "none";
            }
        });
        total.innerHTML = t;
    }
}


// Change of skin states
var changesSaved = true;
function changeState(refreshView = true){
    // "this" get the element which have called the function
    let category = this.id.substring(0,3);
    let skin = this.id.substring(4);
    let x = ["pos", "pur", "fav"].indexOf(category);
    skinsStates.get(skin)[x] = +this.checked;
    // uncheck and disabled purchase if we check possession (and enabled else)
    if(x==0 && skinsStates.get(skin)[1] != null){
        let pur = this.parentNode.getElementsByClassName("check-purchase")[0];
        if(this.checked){
            pur.checked = false;
            pur.disabled = true;
            skinsStates.get(skin)[1] = 0;
        }
        else{
            pur.disabled = false;
        }
    }
    if(refreshView && viewSlct.value != "all"){
        selectView();
    }
    changesSaved = false;
}


// Display skin prices
var tab = document.getElementById("skin-prices");
rarities.forEach((info, r) => {
    line = document.createElement('tr');
    rarity = document.createElement('td');
    rarity.innerHTML = "<img class='small-icon' src='"+info.get('icon')+"' alt='"+r+" icon'> " + r;
    rarity.style.color = info.get('color');
    line.appendChild(rarity);
    price = document.createElement('td');
    price.innerHTML = info.get('price');
    line.appendChild(price);
    tab.appendChild(line);
});


// Display gem icons
var gemImg = document.createElement('img');
gemImg.src = 'https://static.wikia.nocookie.net/brawlstars/images/7/7d/Icon-Gem.png';
gemImg.alt = 'gem';
gemImg.title = "gem";
gemImg.className = "small-icon";
var gemSpn = document.querySelectorAll('span.gem');
gemSpn.forEach(function(g){
    g.appendChild(gemImg.cloneNode(true));
});

// Display bling icons
var blingImg = document.createElement('img');
blingImg.src = 'https://static.wikia.nocookie.net/brawlstars/images/1/12/Icon-Bling.png';
blingImg.alt = 'bling';
blingImg.title = "bling";
blingImg.className = "small-icon";
var blingSpn = document.querySelectorAll('span.bling');
blingSpn.forEach(function(b){
    b.appendChild(blingImg.cloneNode(true));
});

// Display coin icons
var coinImg = document.createElement('img');
coinImg.src = 'https://static.wikia.nocookie.net/brawlstars/images/1/1a/Icon-Coin.png';
coinImg.alt = 'coin';
coinImg.title = "coin";
coinImg.className = "small-icon";
var coinSpn = document.querySelectorAll('span.coin');
coinSpn.forEach(function(c){
    c.appendChild(coinImg.cloneNode(true));
});



// Creation of brawlers fieldsets
brawlers.forEach((info, b) => {
    field = document.createElement('fieldset');
    field.className = "field-B"+info.get('rarity');
    field.id = "field-"+b;
    legend = document.createElement('legend');
    legend.innerHTML = "<img class='large-icon' src='"+info.get('img')+"' alt='"+b+" icon'> " + b;
    field.appendChild(legend);
    bsort.appendChild(field);
});

// Creation of themes fieldsets
themes.forEach((info, t) => {
    field = document.createElement('fieldset');
    field.id = "field-"+t;
    legend = document.createElement('legend');
    legend.innerHTML = "<img class='large-icon' src='"+info.get('icon')+"' alt='"+t+" icon'> " + t;
    field.appendChild(legend);
    tsort.appendChild(field);
});

// Creation of rarities fieldsets
rarities.forEach((info, r) => {
    field = document.createElement('fieldset');
    field.id = "field-"+r;
    field.style.borderColor = info.get('color')
    legend = document.createElement('legend');
    legend.innerHTML = "<img class='large-icon' src='"+info.get('icon')+"' alt='"+r+" icon'> " + r;
    field.appendChild(legend);
    rsort.appendChild(field);
});




// Checkboxes for possession, purchase & favorite
var divOpt = document.createElement('div');
var checkClass = ["check-possession", "check-purchase", "check-favorite"];
var checkSymb = ["✔️", "🛒", "⭐"];
var checkDesc = ["in my possession", "to purchase", "favorite"];
for(var i = 0; i <3; i++){
    check = document.createElement('input');
    check.type = "checkbox";
    check.className = "check, " + checkClass[i];
    lbl = document.createElement('label');
    lbl.innerHTML = checkSymb[i];
    lbl.title = checkDesc[i];
    divOpt.appendChild(check);
    divOpt.appendChild(lbl);
}


// Creation of skins
var skinsElements = [];
var skinsStates = new Map();

skins.forEach((info, s) => {

    states = [0,0,0]; // possession, purchase, favorite
    
    skin = document.createElement('div');
    skin.className = "skin";
    skin.id = s;
    skin.brawler = info.get("brawler");
    skin.theme = info.get("theme");
    skin.rarity = info.get("rarity");
    
    img = document.createElement('img');
    img.src = info.get("img");
    img.title = s;
    skin.appendChild(img);

    skinName = document.createElement('div');
    label = document.createElement('h2');
    label.innerHTML = s;
    skinName.appendChild(label);
    skin.appendChild(skinName);

    opt = divOpt.cloneNode(true);
    
    pos = opt.getElementsByClassName("check-possession")[0];
    pos.name = "pos-"+s;
    pos.id = "pos-"+s;
    pos.addEventListener('change', changeState);
    opt.getElementsByTagName("label")[0].setAttribute("for", "pos-"+s);
    
    pur = opt.getElementsByClassName("check-purchase")[0];
    pur.name = "pur-"+s;
    pur.id = "pur-"+s;
    pur.addEventListener('change', changeState);
    opt.getElementsByTagName("label")[1].setAttribute("for", "pur-"+s);

    fav = opt.getElementsByClassName("check-favorite")[0];
    fav.name = "fav-"+s;
    fav.id = "fav-"+s;
    fav.addEventListener('change', changeState);
    opt.getElementsByTagName("label")[2].setAttribute("for", "fav-"+s);
    
    if(skin.rarity == "Default"){
        /* The brawler may not have been unlocked
        opt.getElementsByClassName("check-possession")[0].checked = true;
        opt.getElementsByClassName("check-possession")[0].disabled = true;
        states[0] = 1;
        */
        opt.getElementsByClassName("check-purchase")[0].remove();
        opt.getElementsByTagName("label")[1].remove();
        states[1] = null;
    }
    else if(skin.rarity == ""){
        opt.getElementsByClassName("check-purchase")[0].remove();
        opt.getElementsByTagName("label")[1].remove();
        states[1] = null;
    }
    else{
        img.style.borderColor = rarities.get(skin.rarity).get("color");
    }
    skin.appendChild(opt);

    skinsElements.push(skin);
    skinsStates.set(s, states);

});



// Load data

var reader = new FileReader();
reader.onload = function(event) {
    loadData(event.target.result);
};

var inptLoadFile = document.getElementById("inptLoadFile");
var btnLoadFile = document.getElementById("btnLoadFile");

btnLoadFile.addEventListener('click', function(){
    inptLoadFile.click();
});;

inptLoadFile.addEventListener('click', function(){
    inptLoadFile.value = null;
})

inptLoadFile.addEventListener('change', function(){
    if(inptLoadFile.files.length == 1){
        file = inptLoadFile.files[0];
        if(file.type != "application/json"){
            alert("Unsupported file type. Choose a JSON file.");
            return;
        }
        reader.readAsText(file);
    }
});

function loadData(data){
    try {
        objData = JSON.parse(data);
        for (skin in objData) {
            if(skinsStates.has(skin)){
                states = objData[skin];
                for(i=0; i<3; i++){
                    if(states[i] == 0 || states[i] == 1){
                        check = document.getElementById(["pos", "pur", "fav"][i]+"-"+skin);
                        if(!check.disabled){
                            check.checked = states[i];
                            changeState.call(check, false);
                        }
                    }
                }
            }
        }
        changesSaved = true;
        selectView();
    }
    catch (error) {
        console.log(error);
        alert("Invalid data !");
    }
}



// Save data

document.getElementById("btnSaveData").addEventListener('click', function(){
    saveData();
});;

function saveData() {

    const file_name = "BS catalog data";

    var data = JSON.stringify(Object.fromEntries(skinsStates));

    var file = new Blob([data], {type: "application/json"});
    
    // Creation of download anchor tag
    var a = document.createElement('a');
    var url = URL.createObjectURL(file);
    a.href = url;
    a.download = file_name;
    a.click();
    setTimeout(function() {
        window.URL.revokeObjectURL(url);
    }, 0);

    changesSaved = true;

}


// No save warning
window.addEventListener('beforeunload', function (event) {
    if(!changesSaved){
        var message = "Your data has not been saved. Are you sure you want to leave this page?";
        event.returnValue = message;
        return message;
    }
});


total.innerHTML = skinsElements.length;
selectSort()