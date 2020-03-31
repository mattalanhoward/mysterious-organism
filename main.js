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
          // console.log(`Random Index: ${randomInx}`)
          let newBase = '';
              do {
                newbase = returnRandBase();
              } while (newbase === this.dna[randomInx]);
              return this.dna[randomInx] = newbase;
},
        compareDNA(obj) {
          let baseCounter = 0;
          let percentSame = 0;
          for(let i = 0; i<15; i ++) {
            if (this.dna[i] === obj[i]) {
              baseCounter ++;
            }
          }
          percentSame = ((baseCounter/15) * 100).toFixed(2);
          return `The two DNA strands have ${percentSame}% DNA in common.`;
         },
        
      }
  
  };   
  

//run tests.  
let test = pAequorFactory(1, mockUpStrand());
console.log(test.specimenNum);
console.log(test.dna);
console.log(test.compareDNA([
  'A', 'C', 'G', 'T',
  'G', 'A', 'C', 'A',
  'G', 'G', 'A', 'T',
  'T', 'C', 'A'
]))



// create Specimen 1 and show mutation.
  // const specimen1 = pAequorFactory(counter.incrementCounter(),mockUpStrand())
  // console.log(specimen1)
  // specimen1.mutate()
  // console.log(specimen1)
  
  // create Specimen 2 and show mutation
  // const specimen2 = pAequorFactory(counter.incrementCounter(),mockUpStrand())
  // console.log(specimen2)
  // specimen2.mutate()
  // console.log(specimen2)

  // Compare DNA bases of Specimen 1 and Specimen 2
  // const compare = specimen1.compareDNA(specimen2)
  // console.log(compare)
