export default function add(a: number, b: number) {
    if (arguments.length === 0) {
        throw new Error('Add what though?')
    }
    if (a < 0 || b < 0) {
        return "I refuse to add negative numbers"
    }
    return a + b
}