let d2= 42;
let pickup;

function distanceFromHqInBlocks(pickup){
    if (pickup>d2)return pickup-d2
    return d2-pickup
} 
function distanceFromHqInFeet (pickup){
    return distanceFromHqInBlocks(pickup)*264
}
function distanceTravelledInFeet(d1,d2){
    return distanceFromHqInFeet(d2)-distanceFromHqInFeet(d1)
}
function calculatesFarePrice(d1,d2){
    let distance= distanceTravelledInFeet(d1,d2)
if(distance<400){
   return 0; 
}else if(distance>400 && distance<2000){
    return(distance-400)*0.02
}else if(distance>2000 && distance<2500){
    return 25;
}else if(distance>2500){
    return "cannot travel that far"
}
    
}
