import { charachterHealth } from '../src/js/app.js'

test('indicate healthyChar', () => {
    const char =
        {
            id:2,
            name: 'Dwarf',
            health: 60
        }
    const result = charachterHealth(char);
    expect(result).toBe("healthy");
})

test('indicate woundedChar', () => {
    const char =
        {
            id:5,
            name: 'Elf',
            health: 42
        }
    const result = charachterHealth(char);
    expect(result).toBe("wounded");
})

test('indicate criticalChar', () => {
    const char =
        {
            id:24,
            name: 'King',
            health: 14
        }
    const result = charachterHealth(char);
    expect(result).toBe("critical");
})
