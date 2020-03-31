// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
};



const counter = {
  count: 0,
  incrementCounter() {
    this.count ++
    return this.count
  }

}

const pAequorFactory = (specNum, dnaArr) => {
  return {
      specimenNum:specNum,
        dna:dnaArr,
        mutate() {
          const randomInx = Math.floor(Math.random() * 15)
          console.log(`Random Index: ${randomInx}`)
          let newBase = '';
              do {
                newbase = returnRandBase();
              } while (newbase === this.dna[randomInx]);
              return this.dna[randomInx] = newbase;
             }
          }
  };
        



const specimen1 = pAequorFactory(counter.incrementCounter(),mockUpStrand())
console.log(specimen1)
specimen1.mutate()
console.log(specimen1)


const specimen2 = pAequorFactory(counter.incrementCounter(),mockUpStrand())
console.log(specimen2)
specimen2.mutate()
console.log(specimen2)





