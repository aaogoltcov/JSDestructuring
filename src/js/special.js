'use strict'

export function getSpecialAttacks(dict) {
    let specialObject = []
    if ( dict.hasOwnProperty('special') ) {
        for (let item of dict['special'] ) {
            const {id, name, icon, description = "Description is unavailable..."} = item
            specialObject.push({'id': id, 'name': name, 'icon': icon, 'description': description});
        }
        return specialObject
    } else { return "Hero doesn't have any special attacks..." }

}
