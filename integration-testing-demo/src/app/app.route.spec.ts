import { routes } from "./app.routes"
import { UsersComponent } from "./users/users.component"

//this test basically checkes whether routes working properly or not
// from outside of the angular env
describe('routes',()=>{
    it('should contain a route for /users',()=>{
        expect(routes).toContain({path: 'users', component:UsersComponent});
    })
})