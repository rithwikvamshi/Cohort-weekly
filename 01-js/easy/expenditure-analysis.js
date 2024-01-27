/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let out=[];
  for(let i=0;i<transactions.length;i++){
    let cat = transactions[i]['category'];
    let spent= transactions[i]['price'];
    let index=out.indexOf(cat);
    console.log("index of "+cat+" = "+index);
    if(index==-1){
      out.push({ category: cat, totalSpent: spent })
    }
    else{
      out[index]={ category: cat, totalSpent: out[index][totalSpent]+spent };
    }
  }
  return out;
}

module.exports = calculateTotalSpentByCategory;
