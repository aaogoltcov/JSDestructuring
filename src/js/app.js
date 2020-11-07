'use strict'

import { getSpecialAttacks } from './special'

const character = Object.defineProperty(
    {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
                // <- обратите внимание, описание "засекречено"
            }
        ]
    },
    "special",
    { enumerable: false },
)

console.log(character)

console.log(getSpecialAttacks(character, 'special', 'description'))


