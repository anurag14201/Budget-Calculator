// const incomeTotal = document.getElementById('income-total');
// const incomeValue = incomeTotal.value;
// console.log('wfn'incomeValue);

function totalCost(costAmount) {
    const allItemsCost = document.getElementById(costAmount);
    const allItemsValue = allItemsCost.value;
    const allItemsAmount = parseInt(allItemsValue);
    return allItemsAmount;
    // console.log(allItemsAmount);
}

document.getElementById('total-veraity').addEventListener('click', function () {

    let allCost = totalCost('veraity-budget-rent');
    let allCost1 = totalCost('veraity-budget-food');
    let allCost2 = totalCost('veraity-budget-other');
    const totalCostAll = allCost + allCost1 + allCost2;
    console.log(totalCostAll);


    // const allItemsCost = document.getElementById('veraity-budget-rent');
    // const allItemsValue = allItemsCost.value;
    // allItemsCost.value = allItemsCost;
    // console.log(allItemsValue);

    // const allItemsCost = document.getElementById('veraity-budget-food');
    // const allItemsValue = allItemsCost.value;
    // console.log(allItemsValue);


    // const allItemsCost = document.getElementById('veraity-budget-other');
    // const allItemsValue = allItemsCost.value;
    // console.log(allItemsValue);
})

