class SeededRandom{
    constructor(str = "12345678"){
        this.seed = str * 16807 % 2147483647;
    }

    makeStatic(){
        this.seed = Date.now() * 1680 % 2147483647;
    }

    nextInt(){
        return this.seed = Math.floor(this.seed * 16807 % 2147483647);
    }

    nextFloat(){
        return ((this.nextInt() - 1) / 2147483646);
    }

    nextRange(min = 0, max = 10000, returnFloat = false){
        if (min == max){
            throw new Error("Minimum and maximum cannot be the same!")
        }
        if (returnFloat){
            return min + this.nextFloat() * (max - min);
        } else {
            return min + (this.nextInt() % (max - min + 1));
        }
    }

    returnSeed(){
        return this.seed;
    }

}

const STATIC_RNG = new SeededRandom();
STATIC_RNG.makeStatic();