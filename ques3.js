function flatten(obj,prefix='') {
let result = {};

for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        const newKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            Object.assign(result, flatten(value, newKey));
        } else {
            result[newKey] = value;
        }
    }
}

return result;
}



