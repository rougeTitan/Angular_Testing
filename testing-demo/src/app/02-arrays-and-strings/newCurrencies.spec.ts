import { getCurrencies } from "./getCurrencies";

describe('getCurrencies',()=>{

    it('should return the supported currencies',()=>{
        const result = getCurrencies();

        //exact test
        expect(result).toBe('USD');

    })

})