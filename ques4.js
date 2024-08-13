function unflattenObject(flatObj) {
    const outcome = {};

    for (const key in flatObj) {
        if (flatObj.hasOwnProperty(key)) {
            const value = flatObj[key];
            const keys = key.split('.');
            keys.reduce((acc, part, index) => {
                if (index === keys.length - 1) {
                    acc[part] = value;
                } else {
                    if (!acc[part]) {
                        acc[part] = {};
                    }
                    return acc[part];
                }
            }, outcome);
        }
    }
    return  outcome;
}
