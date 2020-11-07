'use strict'

export function getSpecialAttacks(dict, destructor, property) {
    if (dict.hasOwnProperty(destructor)) {
        for (let key in dict[destructor]) {
            if (!dict[destructor][key].hasOwnProperty(property)) {
                dict[destructor][key][property] = 'Description is unavailable'
            }

        }
        return dict[destructor]
    } else {
        return ["Hero doesn't have any special attacks..."]
    }
}
