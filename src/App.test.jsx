/* eslint-disable no-undef */
import operacion from './operaciones';


describe('Given a number', () => {
    it('div', () => {
      expect(operacion('3/3', false)).toBe('1')
    })
    it('mult', () => {
      expect(operacion('3*3', false)).toBe('9')
    })
    it('sum', () => {
      expect(operacion('3+3', false)).toBe('6')
    })
    it('subs', () => {
      expect(operacion('3-3', false)).toBe('0')
    })
    it('mod', () => {
      expect(operacion('3%3', false)).toBe('0')
    })
    it('negativoERROR**', () => {
        expect(operacion('3-4', false)).toBe('ERROR**')
    })
    it('max#valores', () => {
        expect(operacion('9999999999+9999999999999', false)).toBe('ERROR')
    })
    it('negativo2', () => {
        expect(operacion('-3-3', true)).toBe('-6')
    })
})