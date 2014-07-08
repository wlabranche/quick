var list = "Mikkeller:Tenderloin IPA,Alpine:Hoppy Birthday,Mikkeller:Tenderloin Wit,Vapeur:Saison de Pipaix,Anchorage:Galaxy White,8 Wired:Saison Sauvin,8 Wired:Chardonnay Saison,Fort Point Brewing:Villager,Cellarmaker:Equinox,Blaugies Saison d’Epeautre,Monarchy/Kissmeyer:Viking Gose,Mikkeller:Årh Hvad?!,Hill Farmstead/Brasserie:Blaugies La Vermontoise,Off Color Scurry:Köttbusser/Alt Bier w/ honey & Molasses,De Ranke:XXX Bitter,Tahoe Mountain:Saphir du Bois,Tahoe Mountain:Higashino Farmhouse,Berryessa:Common Sense,Jolly Pumpkin/Anchorage:Calabaza Boreal,Cellarmaker:Rye Be Bitter".split(',');
var list2 = "Mikkeller:Tenderloin Pils,Fort Point:Brewing Tosca,Firestone Walker:Pivo Hoppy Pils,Tahoe Mountain:French Pils,Firestone Walker:Easy Jack".split(',')
var list3 = "Mikkeller:Orange Yuzu Glad I Said Porter BA,De La Senne:Jambe-de-Bois,Tahoe Mountain:Auld Bitch,Mikkeller:Big Worster Malaga,Mikkeller:Rauch Geek Breakfast,Mikkeller:Monk’s Elixir,Birra del Borgo:Caos,Nøgne Ø:Imperial Stout,AleSmith:Horny Devill,Malmgard Huvila:Arctic Circle,Dieu du Ciel:Péché Mortel,Stillwater:A Saison Darkly,AleSmith:Old Numbskull,Alvinne:Melchior BA,Mikkeller:Beer Geek Breakfast".split(','); 
var list4 = "FreeWheel:London Calling,FreeWheel/Iron Bridge:Wenlock Stout".split(',')
var test = function(arr){
  var result = [];
  for (var i = 0; i < arr.length; i++){
    result.push(arr[i].split(':'));
  }
  return result;
};
var build = function(pairs){
  var result = [];
  for (var i = 0; i < pairs.length; i++){
    result.push({ brewery: pairs[i][0], name: pairs[i][1] })
  }
  return result;
};
var mikkeller = build(test(list.concat(list2).concat(list3).concat(list4)));