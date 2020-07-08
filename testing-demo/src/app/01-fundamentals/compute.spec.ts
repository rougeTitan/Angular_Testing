import {compute} from './compute'

//test suite
describe('compute',()=>{

    //individual test
    it('should return 0 if input is negative',()=>{
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it('should increment input if it is positive',()=>{
        const result = compute(1);
        expect(result).toBe(2);
    })

})