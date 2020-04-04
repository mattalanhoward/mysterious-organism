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
          for(let i = 0; i<this.dna.length; i ++) {
            if (this.dna[i] === obj[i]) {
              baseCounter ++;
            }
          }
          percentSame = ((baseCounter/15) * 100).toFixed(2);
          return `The two DNA strands have ${percentSame}% DNA in common.`;
          },
          willLikelySurvive() {
              //returns true if this.dna contains at least 60% 'C' or 'G' otherwise returns false. 
              let cCounter = 0;
              let gCounter = 0;
              let percentCG = 0;
              let totalCG = 0;
              let survive = true;

              for(i = 0; i < this.dna.length; i++){
                  if(this.dna[i] == 'C')
                      cCounter++;
              }
              for(j = 0; j < this.dna.length; j++){
                if(this.dna[j] == 'G')
                    gCounter++;
            }
              totalCG = (cCounter + gCounter);
              percentCG = ((totalCG/15) * 100).toFixed(2);
              console.log(percentCG + '%')
              
              if (percentCG >= 60) {
                survive = true;
              } else {
                survive = false;
              }
              return survive;
            },
            complimentStrand() {
              const compliment = [];
              for(i = 0;i <= this.dna.length; i ++){
              switch (this.dna[i]) {
                case 'A':
                  compliment.push('T');
                  break;

                  case 'T':
                    compliment.push('A');
                    break;

                    case 'C':
                  compliment.push('G');
                  break;

                  case 'G':
                  compliment.push('C');
                  break;
            }
          }
          return compliment;
      }
    }
  
  };   

  //Create an Array of 30 possible DNA strands that will survive in the wild. 
  const organismArr = [];
do {
  const specimen = pAequorFactory(counter.incrementCounter(),mockUpStrand())
  organismArr.push(specimen.dna);
} while (organismArr.length < 30)
console.log(organismArr)


//Create complimentary DNA
let complimentTest = pAequorFactory(1,mockUpStrand());
// console.log (complimentTest.dna);
// console.log(complimentTest.complimentStrand());


// run tests.  
let test = pAequorFactory(1, mockUpStrand());
// console.log(test.specimenNum);
// console.log(test.dna);
// console.log(test.compareDNA([
//   'A', 'C', 'G', 'T',
//   'G', 'A', 'C', 'A',
//   'G', 'G', 'A', 'T',
//   'T', 'C', 'A'
// ]))

// console.log(test.willLikelySurvive())





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