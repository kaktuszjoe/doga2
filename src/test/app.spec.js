//JakabosÁbel 2023.05.18 , sz/i/n

describe("szamitasteszt1", () => {
    it('szamitas1', () => {
        let actual  =  getUnsuccessPercent(100,100)
        expect(actual).toEqual(100)})


    it('szamitas2', () => {
            let actual  =  getUnsuccessPercent(10,10)
            expect(actual).toEqual(100)})


            it('szamitas3', () => {
                let actual  =  getUnsuccessPercent(10,0)
                 expect(actual).toEqual(0)})


         it('kivonas', () => {
         let actual  =  getUnsuccessCount(45,12)
             expect(actual).toEqual(33)})

         });
                       
 