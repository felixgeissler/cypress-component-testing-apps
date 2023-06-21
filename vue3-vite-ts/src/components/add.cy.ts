import add from './add'

describe('add', () => {

  beforeEach(() => {
    cleanUp()
  })
  it('adds two positive numbers', () => {
    const result = add(1, 4)
    expect(result).to.eq(5)

    const otherResult = add(10, 4)
    expect(otherResult).to.eq(14)
  })

  it('refuses to add with a negative number as the first argument', () => {
    const result = add(-1, 4)
    expect(result).to.eq('I refuse to add negative numbers')    
  })

  it('refuses to add with a negative number as the first argument', () => {
    const result = add(1, -4)
    expect(result).to.eq('I refuse to add negative numbers')
    
    writeResult(result)

  })

  it('throws an error when receiving no arguments', () => {
    // ts-expect-error
    expect(() => add()).to.throw('Add what though?')
  })
})


function cleanUp() {
  cy.window().then((win) => {
    win.document.querySelector('[data-cy-root]')!.innerHTML = ``})
}

function writeResult(text: string | number) {
  cy.window({log: false}).then((win) => {
    win.document.querySelector('[data-cy-root]')!.innerHTML = `
    <div>${text}</div>
    `})
    cy.log('result')
}