
function totalCost(costAmount) {
    const allItemsCost = document.getElementById(costAmount);
    const allItemsValue = allItemsCost.value;
    const allItemsAmount = parseInt(allItemsValue);
    return allItemsAmount;
    // console.log(allItemsAmount);
}

document.getElementById('total-veraity').addEventListener('click', function () {
    // if (costAmount > 0) {
    //     let incomeAmount = totalCost('income-total');
    //     let allCost = totalCost('veraity-budget-rent');
    //     let allCost1 = totalCost('veraity-budget-food');
    //     let allCost2 = totalCost('veraity-budget-other');
    // }
    let incomeAmount = totalCost('income-total');
    let allCost = totalCost('veraity-budget-rent');
    let allCost1 = totalCost('veraity-budget-food');
    let allCost2 = totalCost('veraity-budget-other');
    const totalCostAll = allCost + allCost1 + allCost2;



    const ExpensesCost = document.getElementById('expenses');
    const perExpenses = ExpensesCost.innerText;
    const ExpensesCostValue = parseInt(perExpenses);
    const newExpenses = ExpensesCostValue + parseInt(totalCostAll);
    ExpensesCost.innerText = newExpenses;


    const balanceCost = document.getElementById('balance');
    const perBalance = balanceCost.innerText;
    const balanceCostValue = parseInt(perBalance);
    const newBalance = incomeAmount - newExpenses;
    balanceCost.innerText = newBalance;
})

// saving Section

function saveAmount(cost) {
    const saving = document.getElementById(cost);
    const saveValue = saving.value;
    const saveingCost = parseFloat(saveValue);
    return saveingCost;
}

function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
}

// document.getElementById('save-btn').addEventListener('click', function () {
//     const saveCost = saveAmount('save-input');
//     var parCen =
// })
