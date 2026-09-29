let currentStep=0;
let selections={};
let aromas=[];
let curiosityIndex=0;
let selectorType=null;
let currentWineId=null;

const wineData={

"France":{
flag:"🇫🇷",
regions:[
"Bordeaux","Burgundy","Champagne","Rhône Valley","Loire Valley",
"Alsace","Provence","Languedoc-Roussillon","Beaujolais",
"South West France","Jura","Savoie","Corsica"
]},

"Italy":{
flag:"🇮🇹",
regions:[
"Tuscany","Piedmont","Veneto","Sicily","Lombardy","Campania",
"Friuli-Venezia Giulia","Trentino-Alto Adige","Puglia",
"Emilia-Romagna","Abruzzo","Umbria","Sardinia","Marche"
]},

"Spain":{
flag:"🇪🇸",
regions:[
"Rioja","Ribera del Duero","Priorat","Rías Baixas","Cava",
"Jerez","Rueda","Toro","La Mancha","Penedès","Bierzo",
"Jumilla","Valdeorras"
]},

"Portugal":{
flag:"🇵🇹",
regions:[
"Douro","Vinho Verde","Dão","Alentejo","Bairrada",
"Madeira","Lisboa","Setúbal"
]},

"United States":{
flag:"🇺🇸",
regions:[
"Napa Valley","Sonoma County","Willamette Valley",
"Columbia Valley","Paso Robles","Santa Barbara County",
"Finger Lakes","Walla Walla Valley","Santa Cruz Mountains",
"Russian River Valley","Lodi","Long Island"
]},

"Argentina":{
flag:"🇦🇷",
regions:[
"Mendoza","Salta","Patagonia","San Juan","Uco Valley"
]},

"Chile":{
flag:"🇨🇱",
regions:[
"Maipo Valley","Colchagua Valley","Casablanca Valley",
"Aconcagua Valley","Maule Valley","Leyda Valley",
"Limarí Valley","Itata Valley"
]},

"Australia":{
flag:"🇦🇺",
regions:[
"Barossa Valley","Margaret River","Hunter Valley",
"Yarra Valley","McLaren Vale","Clare Valley",
"Coonawarra","Adelaide Hills","Mornington Peninsula",
"Tasmania"
]},

"New Zealand":{
flag:"🇳🇿",
regions:[
"Marlborough","Central Otago","Hawke's Bay",
"Martinborough","Nelson","Canterbury","Gisborne"
]},

"Germany":{
flag:"🇩🇪",
regions:[
"Mosel","Rheingau","Pfalz","Rheinhessen",
"Nahe","Baden","Franken","Ahr"
]},

"South Africa":{
flag:"🇿🇦",
regions:[
"Stellenbosch","Swartland","Paarl","Constantia",
"Walker Bay","Franschhoek","Robertson"
]},

"Canada":{
flag:"🇨🇦",
regions:[
"Okanagan Valley","Niagara Peninsula",
"Prince Edward County","Similkameen Valley",
"Annapolis Valley"
]},

"Greece":{
flag:"🇬🇷",
regions:[
"Santorini","Nemea","Naoussa","Macedonia",
"Crete","Attica"
]},

"Austria":{
flag:"🇦🇹",
regions:[
"Wachau","Kamptal","Kremstal","Burgenland",
"Weinviertel","Thermenregion"
]},

"Hungary":{
flag:"🇭🇺",
regions:["Tokaj","Eger","Villány","Somló"]
},

"Mexico":{
flag:"🇲🇽",
regions:[
"Valle de Guadalupe","Valle de Santo Tomás",
"Querétaro","Coahuila","Guanajuato"
]},

"Uruguay":{
flag:"🇺🇾",
regions:["Canelones","Maldonado","Montevideo","Colonia"]
},

"Brazil":{
flag:"🇧🇷",
regions:["Serra Gaúcha","Campanha","Vale do São Francisco"]
},

"England":{
flag:"🇬🇧",
regions:["Sussex","Kent","Hampshire","Surrey"]
},

"Georgia":{
flag:"🇬🇪",
regions:["Kakheti","Kartli","Imereti","Racha"]
},

"Lebanon":{
flag:"🇱🇧",
regions:["Bekaa Valley","Batroun"]
},

"Israel":{
flag:"🇮🇱",
regions:["Galilee","Golan Heights","Judean Hills","Negev"]
},

"Switzerland":{
flag:"🇨🇭",
regions:["Valais","Vaud","Geneva","Ticino"]
},

"Croatia":{
flag:"🇭🇷",
regions:["Istria","Dalmatia","Slavonia"]
},

"Slovenia":{
flag:"🇸🇮",
regions:["Primorska","Podravje","Posavje"]
},

"Romania":{
flag:"🇷🇴",
regions:["Dealu Mare","Transylvania","Moldavia"]
},

"Other / Not sure":{
flag:"🌍",
regions:["Other / Not sure"]
}

};

const grapeOptions=[
"Albariño",
"Assyrtiko",
"Barbera",
"Cabernet Franc",
"Cabernet Sauvignon",
"Carignan",
"Carménère",
"Chardonnay",
"Chenin Blanc",
"Corvina",
"Gamay",
"Garnacha / Grenache",
"Gewürztraminer",
"Grüner Veltliner",
"Malbec",
"Merlot",
"Montepulciano",
"Mourvèdre",
"Muscat",
"Nebbiolo",
"Nero d'Avola",
"Petit Verdot",
"Pinot Grigio / Pinot Gris",
"Pinot Noir",
"Riesling",
"Sangiovese",
"Sauvignon Blanc",
"Semillon",
"Syrah / Shiraz",
"Tempranillo",
"Touriga Nacional",
"Verdejo",
"Viognier",
"Zinfandel / Primitivo",
"Blend",
"Other / Not sure"
];

const curiosityCards=[
{
type:"Understand Your Wine",
title:"Why does acidity matter?",
text:"Acidity gives wine freshness and structure. One clue is simple: notice how much your mouth waters after a sip."
},
{
type:"Taste Better",
title:"Why do we swirl wine?",
text:"Swirling increases contact with air and helps aromatic compounds reach your nose more easily."
},
{
type:"Taste Better",
title:"Smell before you swirl.",
text:"Your first quiet sniff can reveal delicate aromas. Smell once before swirling, then compare."
},
{
type:"Understand Your Wine",
title:"What exactly is tannin?",
text:"Tannin is the drying, gripping sensation you may feel on your gums, tongue and cheeks."
},
{
type:"Understand Your Wine",
title:"What does body mean?",
text:"Body describes the weight and texture of wine. Think skim milk, whole milk and cream."
},
{
type:"Discover a Grape",
title:"Meet Pinot Noir.",
text:"Pinot Noir is known for red-fruit aromas, relatively high acidity and the ability to express subtle differences in place."
},
{
type:"Discover a Grape",
title:"Meet Riesling.",
text:"Riesling can range from bone-dry to intensely sweet while often retaining vibrant acidity."
},
{
type:"Discover a Grape",
title:"Meet Chardonnay.",
text:"Chardonnay can taste dramatically different depending on climate, winemaking and oak."
},
{
type:"Discover the World",
title:"Champagne is a place.",
text:"Champagne is a wine region in France. Its name is protected for wines produced according to its rules."
},
{
type:"Taste Better",
title:"The finish tells a story.",
text:"After swallowing or spitting, notice how long pleasant flavours remain. That persistence is the finish."
},
{
type:"Understand Your Wine",
title:"Dry doesn't mean drying.",
text:"Dry describes sweetness. A drying sensation is usually associated with tannin — two very different things."
},
{
type:"Taste Better",
title:"Compare two wines.",
text:"Side-by-side tasting makes differences in acidity, body, tannin and aroma much easier to recognize."
},
{
type:"Discover the World",
title:"Place changes flavour.",
text:"Climate, soil, altitude and exposure influence how grapes ripen and how a wine can express itself."
}
];

const palateOptions={
Sweetness:["Dry","Off-dry","Medium","Sweet","Not sure"],
Acidity:["Low","Medium-","Medium","Medium+","High","Not sure"],
Tannin:["Low","Medium-","Medium","Medium+","High","Not sure"],
Alcohol:["Low","Medium","High","Not sure"],
Body:["Light","Medium-","Medium","Medium+","Full","Not sure"],
"Flavor Intensity":["Light","Medium","Pronounced","Not sure"],
Finish:["Short","Medium","Long","Not sure"]
};

const helpText={
Sweetness:"Is there perceptible sugar, or does the wine finish dry? Dry means little or no noticeable sweetness.",
Acidity:"Notice how much your mouth waters after the wine. More salivation usually suggests higher acidity.",
Tannin:"Tannin creates a drying or gripping feeling, especially on your gums, tongue and cheeks.",
Alcohol:"Notice warmth, particularly toward the back of your throat. More warmth can suggest higher alcohol.",
Body:"Body is the overall weight and texture of the wine. Think skim milk versus whole milk versus cream.",
"Flavor Intensity":"How strongly do the flavours present themselves while the wine is in your mouth?",
Finish:"After swallowing or spitting, notice how long pleasant flavours remain. That persistence is the finish."
};

function getWines(){
  try{
    return JSON.parse(localStorage.getItem("sommelierWines")||"[]");
  }catch(e){
    return [];
  }
}

function saveWines(wines){
  localStorage.setItem("sommelierWines",JSON.stringify(wines));
}

function normalize(value){
  return (value||"").trim();
}

function uniqueValues(values){

  const map=new Map();

  values.filter(Boolean).forEach(value=>{
    const clean=normalize(value);
    const key=clean.toLowerCase();

    if(clean && !map.has(key)){
      map.set(key,clean);
    }
  });

  return [...map.values()];
}

function getNavButton(name){
  return document.querySelector('[data-nav="'+name+'"]');
}

/* PALATE */

function buildPalate(){

  const container=document.getElementById("palateFields");
  container.innerHTML="";

  Object.entries(palateOptions).forEach(([field,options])=>{

    const label=document.createElement("label");

    label.innerHTML=
      escapeHTML(field)+
      ' <button class="help" type="button" onclick="showHelp(\''+
      field.replace(/'/g,"\\'")+
      '\')">?</button>';

    const chips=document.createElement("div");
    chips.className="chips";
    chips.dataset.field=field;

    options.forEach(option=>{
      const button=document.createElement("button");
      button.className="chip";
      button.textContent=option;
      chips.appendChild(button);
    });

    container.appendChild(label);
    container.appendChild(chips);
  });
}

function showHelp(field){
  showHelpText(field,helpText[field]||"A standard wine tasting term.");
}

function showHelpText(title,text){
  alert(title+"\n\n"+text);
}

buildPalate();

/* CHIP SELECTION */

document.addEventListener("click",function(e){

  if(e.target.classList.contains("help")){
    e.stopPropagation();
    return;
  }

  if(!e.target.classList.contains("chip")) return;

  e.preventDefault();

  const chip=e.target;
  const group=chip.parentElement;

  if(group.classList.contains("multi")){

    chip.classList.toggle("selected");

    const selectedValue=chip.textContent;

    if(chip.classList.contains("selected")){

      if(!aromas.includes(selectedValue)){
        aromas.push(selectedValue);
      }

    }else{

      aromas=aromas.filter(a=>a!==selectedValue);

    }

  }else{

    group.querySelectorAll(".chip").forEach(c=>{
      c.classList.remove("selected");
    });

    chip.classList.add("selected");

    if(group.dataset.field){
      selections[group.dataset.field]=chip.textContent;
    }
  }
});

/* COLOUR */

document.getElementById("colourChoices").addEventListener("click",function(e){

  const button=e.target.closest(".colourChoice");

  if(!button) return;

  e.preventDefault();

  document.querySelectorAll(".colourChoice").forEach(b=>{
    b.classList.remove("selected");
  });

  button.classList.add("selected");

  document.getElementById("colour").value=button.dataset.colour;
});

/* PRICE */

document.getElementById("price").addEventListener("focus",function(){

  this.value=this.value.replace(/[^\d.]/g,"");

});

document.getElementById("price").addEventListener("blur",function(){

  let clean=this.value.replace(/[^\d.]/g,"").trim();

  if(!clean){
    this.value="";
    return;
  }

  const number=parseFloat(clean);

  if(!isNaN(number)){
    this.value="$"+number.toFixed(
      Number.isInteger(number)?0:2
    );
  }
});

/* PAGE */

function showPage(id,button){

  closeActionMenus();

  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
  });

  const page=document.getElementById(id);

  if(page){
    page.classList.add("active");
  }

  document.querySelectorAll(".bottomNav button").forEach(b=>{
    b.classList.remove("active");
  });

  if(button){
    button.classList.add("active");
  }

  if(id==="home") updateDashboard();
  if(id==="wines") renderWines();
  if(id==="world") renderWorld();
  if(id==="grapes") renderGrapes();
  if(id==="profile") renderProfile();

  window.scrollTo(0,0);
}

function startTasting(button){

  showPage("tasting",button||getNavButton("taste"));

  currentStep=0;
  showStep();
}

function showStep(){

  document.querySelectorAll(".step").forEach(s=>{
    s.classList.remove("active");
  });

  const step=document.getElementById("step"+currentStep);

  if(step){
    step.classList.add("active");
  }

  for(let i=0;i<5;i++){

    const p=document.getElementById("p"+i);

    if(p){
      p.classList.remove("current");
    }
  }

  const current=document.getElementById("p"+currentStep);

  if(current){
    current.classList.add("current");
  }

  window.scrollTo(0,0);
}

function nextStep(){

  if(currentStep<4){
    currentStep++;
    showStep();
  }
}

function previousStep(){

  if(currentStep>0){
    currentStep--;
    showStep();
  }
}

function value(id){
  return document.getElementById(id)?.value||"";
}

/* SELECTORS */

function openSelector(type){

  selectorType=type;

  if(type==="region"&&!value("country")){

    showHelpText(
      "Choose a country first",
      "Select the wine's country before choosing its region."
    );

    return;
  }

  const titles={
    country:"Choose Country",
    region:"Choose Region",
    grape:"Choose Grape"
  };

  document.getElementById("selectorTitle").textContent=titles[type];
  document.getElementById("selectorSearch").value="";

  document.getElementById("selectorSearch").placeholder=
    type==="country"?"Search countries...":
    type==="region"?"Search regions...":
    "Search grapes...";

  renderSelectorOptions();

  document.getElementById("selectorBackdrop").classList.add("open");

  setTimeout(()=>{
    document.getElementById("selectorSearch").focus();
  },100);
}

function closeSelector(){
  document.getElementById("selectorBackdrop").classList.remove("open");
}

function backdropClose(event){

  if(event.target.id==="selectorBackdrop"){
    closeSelector();
  }
}

function getSelectorOptions(){

  if(selectorType==="country"){

    return Object.entries(wineData).map(([name,data])=>({
      value:name,
      label:data.flag+" "+name
    }));
  }

  if(selectorType==="region"){

    const country=value("country");
    let regions=wineData[country]?.regions||[];

    if(!regions.includes("Other / Not sure")){
      regions=[...regions,"Other / Not sure"];
    }

    return regions.map(region=>({
      value:region,
      label:region
    }));
  }

  return grapeOptions.map(grape=>({
    value:grape,
    label:grape
  }));
}

function renderSelectorOptions(){

  const search=
    (document.getElementById("selectorSearch").value||"")
    .toLowerCase()
    .trim();

  const options=getSelectorOptions().filter(option=>
    option.label.toLowerCase().includes(search)
  );

  const container=document.getElementById("selectorResults");

  if(!options.length){

    container.innerHTML=
      '<div class="emptyState">No match found.</div>';

    return;
  }

  container.innerHTML=options.map(option=>`

    <button class="selectorOption"
      onclick='chooseSelectorValue(${JSON.stringify(option.value)})'>
      ${escapeHTML(option.label)}
    </button>

  `).join("");
}

function chooseSelectorValue(selected){

  if(selectorType==="country"){

    document.getElementById("country").value=selected;

    const flag=wineData[selected]?.flag||"";

    setSelectorButton(
      "countryButton",
      flag+" "+selected
    );

    document.getElementById("region").value="";
    setSelectorButton("regionButton","Choose region",true);
  }

  if(selectorType==="region"){

    document.getElementById("region").value=selected;
    setSelectorButton("regionButton",selected);
  }

  if(selectorType==="grape"){

    document.getElementById("grape").value=selected;
    setSelectorButton("grapeButton",selected);
  }

  closeSelector();
}

function setSelectorButton(id,text,placeholder=false){

  const button=document.getElementById(id);

  button.innerHTML=
    '<span class="'+
    (placeholder?"selectorPlaceholder":"")+
    '">'+
    escapeHTML(text)+
    '</span><span>⌄</span>';
}

/* SAVE */

function saveTasting(){

  const wine={

    id:Date.now(),

    wine:value("wineName"),
    producer:value("producer"),
    vintage:value("vintage"),
    country:value("country"),
    region:value("region"),
    grape:value("grape"),
    price:value("price"),

    type:selections.type||"",
    clarity:selections.clarity||"",
    appearanceIntensity:selections.appearanceIntensity||"",
    colour:value("colour"),
    lookNotes:value("lookNotes"),

    condition:selections.condition||"",
    noseIntensity:selections.noseIntensity||"",
    aromas:[...aromas],
    customAromas:value("customAromas"),

    sweetness:selections.Sweetness||"",
    acidity:selections.Acidity||"",
    tannin:selections.Tannin||"",
    alcohol:selections.Alcohol||"",
    body:selections.Body||"",
    flavorIntensity:selections["Flavor Intensity"]||"",
    finish:selections.Finish||"",
    palateNotes:value("palateNotes"),

    pairing:value("pairing"),
    pairingWhy:value("pairingWhy"),
    memory:value("memoryClues"),

    rating:selections.rating||"",
    buyAgain:selections.buyAgain||"",
    notes:value("finalNotes"),

    date:value("date")||
      new Date().toISOString().slice(0,10)
  };

  const wines=getWines();

  wines.unshift(wine);

  saveWines(wines);

  alert("🍷 Tasting saved to your Sommora journey.");

  resetTasting();
  updateDashboard();
  showPage("wines",getNavButton("journal"));
}

function resetTasting(){

  document.querySelectorAll("#tasting input,#tasting textarea")
    .forEach(i=>{
      i.value="";
    });

  document.querySelectorAll("#tasting .chip")
    .forEach(c=>{
      c.classList.remove("selected");
    });

  document.querySelectorAll(".colourChoice")
    .forEach(c=>{
      c.classList.remove("selected");
    });

  selections={};
  aromas=[];

  setSelectorButton("countryButton","Choose country",true);
  setSelectorButton("regionButton","Choose region",true);
  setSelectorButton("grapeButton","Choose grape",true);

  const date=document.getElementById("date");

  if(date){
    date.value=new Date().toISOString().slice(0,10);
  }
}

/* JOURNAL */

function renderWines(){

  const wines=getWines();

  const search=
    (document.getElementById("searchWine")?.value||"")
    .toLowerCase();

  const filtered=wines.filter(w=>
    JSON.stringify(w).toLowerCase().includes(search)
  );

  const list=document.getElementById("wineList");

  if(!filtered.length){

    list.innerHTML=
      '<div class="emptyState">'+
      (wines.length
        ?"No wines match your search."
        :"No wines recorded yet. Your journey begins with your first tasting.")+
      '</div>';

    return;
  }

  list.innerHTML=filtered.map(w=>{

    const flag=getCountryFlag(w.country);

    return `

      <div class="journalCard">

        <div class="journalMain"
          onclick="openWineDetail(${Number(w.id)})">

          <div class="journalTitle">
            ${escapeHTML(w.wine||"Unnamed Wine")}
          </div>

          <div class="small">
            ${escapeHTML(w.producer||"")}
            ${w.vintage?" • "+escapeHTML(w.vintage):""}
          </div>

          <div class="small" style="margin-top:5px">
            ${flag?flag+" ":""}
            ${escapeHTML(w.country||"")}
            ${w.region?" · "+escapeHTML(w.region):""}
          </div>

          <div class="small">
            ${escapeHTML(w.grape||"")}
          </div>

          <div class="rating">
            ${"★".repeat(Number(w.rating)||0)}
          </div>

        </div>

        <button class="moreButton"
          onclick="toggleWineMenu(event,${Number(w.id)})">
          ⋮
        </button>

        <div id="menu-${Number(w.id)}" class="actionMenu">

          <button onclick="openWineDetail(${Number(w.id)})">
            View tasting
          </button>

          <button class="deleteAction"
            onclick="deleteWine(${Number(w.id)})">
            Delete
          </button>

        </div>

      </div>
    `;

  }).join("");
}

function toggleWineMenu(event,id){

  event.stopPropagation();

  const menu=document.getElementById("menu-"+id);
  const wasOpen=menu.classList.contains("open");

  closeActionMenus();

  if(!wasOpen){
    menu.classList.add("open");
  }
}

function closeActionMenus(){

  document.querySelectorAll(".actionMenu").forEach(menu=>{
    menu.classList.remove("open");
  });
}

function openWineDetail(id){

  const wine=getWines().find(w=>Number(w.id)===Number(id));

  if(!wine) return;

  currentWineId=id;

  const flag=getCountryFlag(wine.country);

  const wineAromas=[
    ...(Array.isArray(wine.aromas)?wine.aromas:[]),
    ...(wine.customAromas?[wine.customAromas]:[])
  ].filter(Boolean);

  const content=document.getElementById("wineDetailContent");

  content.innerHTML=`

    <div class="card detailHero">

      <div class="eyebrow">
        ${escapeHTML(wine.date||"Tasting record")}
      </div>

      <h2>${escapeHTML(wine.wine||"Unnamed Wine")}</h2>

      <div class="small">
        ${escapeHTML(wine.producer||"")}
        ${wine.vintage?" • "+escapeHTML(wine.vintage):""}
      </div>

      <div style="margin-top:9px">
        ${flag?flag+" ":""}
        ${escapeHTML(wine.country||"")}
        ${wine.region?" · "+escapeHTML(wine.region):""}
      </div>

      <div class="small" style="margin-top:5px">
        ${escapeHTML(wine.grape||"")}
      </div>

      <div class="rating" style="margin-top:10px">
        ${"★".repeat(Number(wine.rating)||0)}
      </div>

    </div>

    ${detailSection("Bottle",[
      ["Wine type",wine.type],
      ["Price",wine.price],
      ["Buy again?",wine.buyAgain]
    ])}

    ${detailSection("Appearance",[
      ["Clarity",wine.clarity],
      ["Intensity",wine.appearanceIntensity],
      ["Colour",wine.colour],
      ["Observations",wine.lookNotes]
    ])}

    ${detailSection("Nose",[
      ["Condition",wine.condition],
      ["Intensity",wine.noseIntensity],
      ["Aromas",wineAromas.join(", ")]
    ])}

    ${detailSection("Palate",[
      ["Sweetness",wine.sweetness],
      ["Acidity",wine.acidity],
      ["Tannin",wine.tannin],
      ["Alcohol",wine.alcohol],
      ["Body",wine.body],
      ["Flavor intensity",wine.flavorIntensity],
      ["Finish",wine.finish],
      ["Flavours / notes",wine.palateNotes]
    ])}

    ${detailSection("Conclusion",[
      ["Food pairing",wine.pairing],
      ["Why it works",wine.pairingWhy],
      ["Recognition clues",wine.memory],
      ["Final notes",wine.notes]
    ])}

    <div class="card">

      <div class="small">
        This tasting is a snapshot of what you experienced at the time.
        Journal entries are read-only.
      </div>

      <button class="danger"
        onclick="deleteWine(${Number(wine.id)},true)">
        Delete tasting
      </button>

    </div>
  `;

  showPage("wineDetail");
}

function detailSection(title,items){

  const available=items.filter(item=>
    item[1]!==undefined &&
    item[1]!==null &&
    String(item[1]).trim()!==""
  );

  if(!available.length) return "";

  return `

    <div class="detailSection">

      <h3>${escapeHTML(title)}</h3>

      <div class="detailGrid">

        ${available.map(item=>`

          <div class="detailItem">

            <span class="detailLabel">
              ${escapeHTML(item[0])}
            </span>

            <span class="detailValue">
              ${escapeHTML(item[1])}
            </span>

          </div>

        `).join("")}

      </div>

    </div>
  `;
}

function deleteWine(id,fromDetail=false){

  const wine=getWines().find(w=>Number(w.id)===Number(id));

  if(!wine) return;

  const name=wine.wine||"this tasting";

  if(!confirm(
    'Delete "'+name+'"?\n\nThis cannot be undone.'
  )){
    return;
  }

  const wines=getWines().filter(w=>
    Number(w.id)!==Number(id)
  );

  saveWines(wines);

  updateDashboard();

  if(fromDetail){
    showPage("wines",getNavButton("journal"));
  }else{
    renderWines();
  }
}

/* JOURNEY */

function getJourneyData(){

  const wines=getWines();

  const grapes=uniqueValues(
    wines.map(w=>w.grape)
    .filter(g=>g && g!=="Other / Not sure")
  );

  const countries=uniqueValues(
    wines.map(w=>w.country)
    .filter(c=>c && c!=="Other / Not sure")
  );

  const regions=uniqueValues(
    wines.map(w=>w.region)
    .filter(r=>r && r!=="Other / Not sure")
  );

  const exploration=
    wines.length+
    (grapes.length*2)+
    countries.length+
    regions.length;

  let percent=Math.min(99,Math.round(exploration*3));

  if(exploration===0){
    percent=0;
  }

  let level="Wine Explorer";

  if(exploration>=12) level="Curious Palate";
  if(exploration>=30) level="Wine Voyager";
  if(exploration>=60) level="Palate Explorer";
  if(exploration>=100) level="Wine Connoisseur";

  return{
    wines,
    grapes,
    countries,
    regions,
    exploration,
    percent,
    level
  };
}

/* HOME */

function updateDashboard(){

  const journey=getJourneyData();

  document.getElementById("wineCount").textContent=
    journey.wines.length;

  document.getElementById("countryCount").textContent=
    journey.countries.length;

  document.getElementById("grapeCount").textContent=
    journey.grapes.length;

  document.getElementById("journeyPercent").textContent=
    journey.percent+"%";

  document.getElementById("journeyProgress").style.width=
    journey.percent+"%";

  document.getElementById("levelName").textContent=
    journey.level;

  const recent=journey.wines.slice(0,3);
  const container=document.getElementById("recentWines");

  if(!recent.length){

    container.innerHTML=
      '<div class="emptyState">'+
      'Your first tasting will appear here.'+
      '</div>';

  }else{

    container.innerHTML=

      recent.map(w=>{

        const place=[
          w.region,
          w.country
        ].filter(Boolean).join(", ");

        const stars=
          Number(w.rating)
          ? " · "+"★".repeat(Number(w.rating))
          : "";

        return `

          <div class="recentWine"
            onclick="openWineDetail(${Number(w.id)})">

            <div class="recentWineTitle">
              ${escapeHTML(w.wine||"Unnamed Wine")}
              ${w.vintage?" · "+escapeHTML(w.vintage):""}
            </div>

            <div class="recentWineMeta">
              ${getCountryFlag(w.country)}
              ${escapeHTML(place)}
              ${stars}
            </div>

          </div>

        `;

      }).join("")+

      `<button class="viewJournal"
        onclick="showPage('wines',getNavButton('journal'))">
        View journal →
      </button>`;
  }

  renderProfile();
}

/* WORLD */

function renderWorld(){

  const wines=getWines();
  const container=document.getElementById("worldList");

  const countries={};

  wines.forEach(w=>{

    const country=normalize(w.country);
    const region=normalize(w.region);

    if(!country) return;

    const key=country.toLowerCase();

    if(!countries[key]){

      countries[key]={
        name:country,
        wines:0,
        regions:{}
      };
    }

    countries[key].wines++;

    if(region){

      const regionKey=region.toLowerCase();

      if(!countries[key].regions[regionKey]){

        countries[key].regions[regionKey]={
          name:region,
          count:0
        };
      }

      countries[key].regions[regionKey].count++;
    }
  });

  const entries=Object.values(countries);

  if(!entries.length){

    container.innerHTML=
      '<div class="emptyState">'+
      'Your Wine World will grow as you record wines from different countries and regions.'+
      '</div>';

    return;
  }

  container.innerHTML=entries.map(country=>{

    const regionList=Object.values(country.regions)
      .map(region=>

        '<div class="small" style="margin-top:6px;">'+
        escapeHTML(region.name)+
        " · "+
        region.count+
        (region.count===1?" wine":" wines")+
        "</div>"

      ).join("");

    return `

      <div class="journalCard" style="padding-right:3px">

        <div class="journalTitle">
          ${getCountryFlag(country.name)}
          ${escapeHTML(country.name)}
        </div>

        <div class="small">
          ${country.wines}
          ${country.wines===1?" wine":" wines"}
        </div>

        ${regionList}

      </div>
    `;

  }).join("");
}

/* GRAPES */

function renderGrapes(){

  const wines=getWines();
  const container=document.getElementById("grapeList");

  const grapes={};

  wines.forEach(w=>{

    const grape=normalize(w.grape);

    if(!grape) return;

    const key=grape.toLowerCase();

    if(!grapes[key]){

      grapes[key]={
        name:grape,
        count:0,
        countries:new Set()
      };
    }

    grapes[key].count++;

    if(normalize(w.country)){
      grapes[key].countries.add(normalize(w.country));
    }
  });

  const entries=Object.values(grapes)
    .sort((a,b)=>b.count-a.count);

  if(!entries.length){

    container.innerHTML=
      '<div class="emptyState">'+
      'Your grape journey will appear here after you record your first wine.'+
      '</div>';

    return;
  }

  container.innerHTML=entries.map(grape=>`

    <div class="journalCard" style="padding-right:3px">

      <div class="journalTitle">
        🍇 ${escapeHTML(grape.name)}
      </div>

      <div class="small">
        Tasted ${grape.count}
        ${grape.count===1?"time":"times"}
        · ${grape.countries.size}
        ${grape.countries.size===1?"country":"countries"}
      </div>

    </div>

  `).join("");
}

/* PROFILE */

function getProfile(){

  let profile;

  try{

    profile=JSON.parse(
      localStorage.getItem("sommoraProfile")||"null"
    );

  }catch(e){

    profile=null;
  }

  if(!profile){

    profile={
      name:"",
      memberSince:new Date().toISOString().slice(0,10)
    };

    localStorage.setItem(
      "sommoraProfile",
      JSON.stringify(profile)
    );
  }

  return profile;
}

function saveProfile(){

  const profile=getProfile();

  profile.name=
    document.getElementById("profileNameInput").value.trim();

  localStorage.setItem(
    "sommoraProfile",
    JSON.stringify(profile)
  );

  renderProfile();
}

function getFavoriteStyle(wines){

  const styles={};

  wines.forEach(w=>{

    const type=normalize(w.type);

    if(!type || type==="Not sure") return;

    styles[type]=(styles[type]||0)+1;
  });

  const entries=Object.entries(styles)
    .sort((a,b)=>b[1]-a[1]);

  return entries.length?entries[0][0]:"—";
}

function renderProfile(){

  const profile=getProfile();
  const journey=getJourneyData();

  const name=profile.name||"Sommora Explorer";

  const initial=
    (profile.name||"S")
    .trim()
    .charAt(0)
    .toUpperCase()||"S";

  document.getElementById("headerInitial").textContent=initial;
  document.getElementById("profileAvatar").textContent=initial;
  document.getElementById("profileDisplayName").textContent=name;

  const input=document.getElementById("profileNameInput");

  if(input && document.activeElement!==input){
    input.value=profile.name||"";
  }

  document.getElementById("profileWineCount").textContent=
    journey.wines.length;

  document.getElementById("profileCountryCount").textContent=
    journey.countries.length;

  document.getElementById("profileGrapeCount").textContent=
    journey.grapes.length;

  document.getElementById("memberSince").textContent=
    formatDate(profile.memberSince);

  document.getElementById("favoriteStyle").textContent=
    getFavoriteStyle(journey.wines);

  document.getElementById("profileLevel").textContent=
    journey.level;

  document.getElementById("profileJourneyLevel").textContent=
    journey.level;

  document.getElementById("profileJourneyPercent").textContent=
    journey.percent+"%";

  document.getElementById("profileJourneyProgress").style.width=
    journey.percent+"%";
}

function formatDate(date){

  if(!date) return "";

  const parsed=new Date(date+"T12:00:00");

  return parsed.toLocaleDateString(undefined,{
    month:"short",
    year:"numeric"
  });
}

/* CURIOSITY */

function renderCuriosity(){

  const card=curiosityCards[curiosityIndex];

  document.getElementById("curiosityType").textContent=
    card.type;

  document.getElementById("curiosityTitle").textContent=
    card.title;

  document.getElementById("curiosityText").textContent=
    card.text;
}

function nextCuriosity(){

  curiosityIndex=
    (curiosityIndex+1)%curiosityCards.length;

  renderCuriosity();
}

/* HELPERS */

function getCountryFlag(country){

  if(!country) return "";

  if(wineData[country]){
    return wineData[country].flag;
  }

  return "";
}

function escapeHTML(value){

  return String(value||"")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}

/* START */

renderCuriosity();
updateDashboard();

const dateInput=document.getElementById("date");

if(dateInput){

  dateInput.value=
    new Date().toISOString().slice(0,10);
}

document.addEventListener("click",function(e){

  if(!e.target.closest(".moreButton") &&
     !e.target.closest(".actionMenu")){

    closeActionMenus();
  }
});
