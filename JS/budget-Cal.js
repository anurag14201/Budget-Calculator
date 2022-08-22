// const incomeTotal = document.getElementById('income-total');
// const incomeValue = incomeTotal.value;
// console.log('wfn'incomeValue);

// income section





function totalCost(costAmount) {
    const allItemsCost = document.getElementById(costAmount);
    const allItemsValue = allItemsCost.value;
    const allItemsAmount = parseInt(allItemsValue);
    return allItemsAmount;
    // console.log(allItemsAmount);
}

document.getElementById('total-veraity').addEventListener('click', function () {
    let incomeAmount = totalCost('income-total');
    let allCost = totalCost('veraity-budget-rent');
    let allCost1 = totalCost('veraity-budget-food');
    let allCost2 = totalCost('veraity-budget-other');
    const totalCostAll = allCost + allCost1 + allCost2;
    console.log(totalCostAll);
    console.log(incomeAmount);


    const ExpensesCost = document.getElementById('expenses');
    const perExpenses = ExpensesCost.innerText;
    const ExpensesCostValue = parseInt(perExpenses);
    const newExpenses = ExpensesCostValue + parseInt(totalCostAll);
    ExpensesCost.innerText = newExpenses;
    // console.log(newExpenses);



    const balanceCost = document.getElementById('balance');
    const perBalance = balanceCost.innerText;
    const balanceCostValue = parseInt(perBalance);
    const newBalance = balanceCostValue - parseInt(totalCostAll);
    balanceCost.innerText = newBalance;
    // console.log(newExpenses);




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

