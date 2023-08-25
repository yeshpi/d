namespace testtv{
    //%blockId="testOn"
    //%block="plot $x ,$y"
    //%x.min=0 x.max=5
    //%$y.min=0 $y.max=5
    export function ledOn(x:number,y:number):void{
        
        led.plot(x, y)

    }
    
}
