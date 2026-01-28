const rawInput = '[{"first":"Imran","last":"Endris"},{"name":{"first":"Ava","last":"Li"}},{"first":"Jo"}]';

function parseData(jsonString) {
    let data = [];
    try {
        data = JSON.parse(jsonString);
    } catch (err) {
        console.error("Invalid JSON provided:", err.message);
        return [];
    }
    return data
        .map(user => {
            const first = user.first || (user.name && user.name.first);
            const last = user.last || (user.name && user.name.last);
            return first && last ? `${first} ${last}` : null;
        })
        .filter(Boolean); 
}
console.log(parseData(rawInput)); 
console.log(parseData('Bad JSON string')); 
