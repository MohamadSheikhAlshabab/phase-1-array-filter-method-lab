function findMatching(arrayOfNames, name){
    return arrayOfNames.filter(element => element.slice(1) === name.slice(1));
}

function fuzzyMatch(arrayOfNames, name){
    return arrayOfNames.filter(element => element.slice(0,2) === name);
}

function matchName(arrayOfNames, name){
    return arrayOfNames.filter(element => element.name === name);
}