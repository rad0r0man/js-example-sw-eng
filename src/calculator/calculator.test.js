import { Calculator } from './calculator';

test('adding tow integers', () =>{
    const calculator = new Calculator();
    expect(calculator.add(1,1)).toBe(2);

});