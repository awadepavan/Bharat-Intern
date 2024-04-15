let expenses = []
let totalAmount = 0;
const categorySelect = document.querySelector("#category_select")
const amountInput = document.querySelector("#amount_input")
const InfoInput = document.querySelector("#info")
const dateInput = document.querySelector("#date_input")
const addBtn = document.querySelector("#add_btn")
const expenseTableBody = document.querySelector("#expense-table-body")
const totalAmountCell = document.querySelector("#total-amount")

addBtn.addEventListener("click", () => {
    const category = categorySelect.value;
    const info = InfoInput.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category == " ") {
        alert("please Select a Category");
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert("please Enter Valid Amount ");
        return;
    }
    if (info == " ") {
        alert("please Enter Valid  Amount Info");
        return;
    }
    if (date == " ") {
        alert("please Select a Date");
        return;
    }
    expenses.push({ category, amount, info, date })
    if (category === "Income") {
        totalAmount += amount;
    }
    if (category === "Expense") {
        totalAmount -= amount;
    }
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const InfoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deletCell = newRow.insertCell();

    const deletBtn = document.createElement("button");


    deletBtn.textContent = "Delete"
    deletBtn.classList.add("delete-btn");
    deletBtn.addEventListener("click", () => {
        expenses.splice(expenses.indexOf(expense), 1);
        if (category === "Income") {
            totalAmount -= amount;
        }
        if (category === "Expense") {
            totalAmount += amount;
        }

        totalAmountCell.textContent = totalAmount;
        expenseTableBody.removeChild(new Row);

    })

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    AmountCell.textContent = expense.amount;
    InfoCell.textContent = expense.info;
    dateCell.textContent = expense.date;
    deletCell.appendChild(deletBtn);

});
for (const expense of expenses) {
    if (category === "Income") {
        totalAmount += amount;
    }
    if (category === "Expense") {
        totalAmount -= amount;
    }
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const InfoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deletCell = newRow.insertCell();

    const deletBtn = document.createElement("button");


    deletBtn.textContent = "Delete"
    deletBtn.classList.add("delete-btn");
    deletBtn.addEventListener("click", () => {
        expenses.splice(expenses.indexOf(expense), 1);
        if (category === "Income") {
            totalAmount -= amount;
        }
        if (category === "Expense") {
            totalAmount += amount;
        }

        totalAmountCell.textContent = totalAmount;
        expenseTableBody.removeChild(new Row);

    })

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    AmountCell.textContent = expense.amount;
    InfoCell.textContent = expense.info;
    dateCell.textContent = expense.date;
    deletCell.appendChild(deletBtn);
}
