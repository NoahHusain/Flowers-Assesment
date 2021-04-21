const flowers = [
    {
    id: 1,
    color: 'White',
    species: 'Rose',
    price: .90,
    },

    {
    id: 2,
    color: 'Red',
    species: 'Tulip',
    price: 1.10,
    }

]

const addFlower = (flowerObject) => {
    // counts the number of flowers currently in the array then adds +1 to that value and assigns it to the new flower object
   const lastindex = flowers.length - 1
   const currentFlower = flowers[lastindex]
   const maxId = currentFlower.id 
   const newFlowerID = maxId + 1

   flowerObject.id = newFlowerID

    flowers.push(flowerObject)
}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code
    // Iterates through the array Flowers and adds any flowers whose price is above $1 into the empty expensive flowers array
    for (const flowerObject of flowers) {
        if (flowerObject.price >= 1) {
            expensiveFlowers.push(flowerObject)
        }
    }



    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

