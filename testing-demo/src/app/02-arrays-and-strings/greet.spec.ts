import { greet } from "./greet"

describe('greet',()=>{

    it('should include the name in the message',()=>{
        //exact test
        expect(greet('mosh')).toBe('welcome mosh');
        //while checking for strings you can use toContain
        expect(greet('mosh')).toContain('mosh');

    })

})