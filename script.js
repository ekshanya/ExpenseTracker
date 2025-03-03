// Initialize transactions and budgets from localStorage
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let budgets = JSON.parse(localStorage.getItem('budgets')) || [];

// Save transactions to localStorage
function saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Save budgets to localStorage
function saveBudgets() {
    localStorage.setItem('budgets', JSON.stringify(budgets));
}

// Update dashboard totals (for index.html)
function updateDashboard() {
    const income = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + parseFloat(t.amount), 0);
    const expenses = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + parseFloat(t.amount), 0);
    const balance = income - expenses;

    if (document.getElementById('total-income')) {
        document.getElementById('total-income').textContent = `$${income.toFixed(2)}`;
        document.getElementById('total-expenses').textContent = `$${expenses.toFixed(2)}`;
        document.getElementById('balance').textContent = `$${balance.toFixed(2)}`;
    }
}

// Calculate spent amount for a category
function getSpentAmount(category) {
    return transactions
        .filter(t => t.type === 'expense' && t.category.toLowerCase() === category.toLowerCase())
        .reduce((sum, t) => sum + parseFloat(t.amount), 0);
}

// Render budget table (for budget.html)
function renderBudgets() {
    const tbody = document.getElementById('budget-table');
    if (tbody) {
        tbody.innerHTML = '';
        budgets.forEach((b, index) => {
            const spent = getSpentAmount(b.category);
            const remaining = b.amount - spent;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${b.category}</td>
                <td>$${b.amount.toFixed(2)}</td>
                <td>$${spent.toFixed(2)}</td>
                <td class="${remaining < 0 ? 'text-danger' : ''}">$${remaining.toFixed(2)}</td>
                <td><button class="btn btn-sm btn-danger" onclick="deleteBudget(${index})">Delete</button></td>
            `;
            tbody.appendChild(tr);
        });
    }
}

// Delete budget
function deleteBudget(index) {
    if (confirm('Are you sure you want to delete this budget?')) {
        budgets.splice(index, 1);
        saveBudgets();
        renderBudgets();
    }
}

// Card Click Navigation (for index.html)
function setupCardNavigation() {
    document.querySelectorAll('.main-page-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            if (title === 'Add Transaction') window.location.href = 'add-transaction.html';
            else if (title === 'Transaction History') window.location.href = 'transactions.html';
            else if (title === 'Manage Budget') window.location.href = 'budget.html';
            else if (title === 'Reports & Analytics') window.location.href = 'analytics.html';
        });
    });
}

// Dark Mode Logic
function setupDarkMode() {
    const toggle = document.getElementById('toggle');
    if (!toggle) return; // Exit if toggle not found (unlikely but safe)

    // Set initial state from LocalStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        toggle.checked = true;
    }

    // Toggle event listener
    toggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        const darkModeEnabled = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', darkModeEnabled);
    });
}

// Page-specific logic on load
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    // Setup dark mode on all pages
    setupDarkMode();

    // Setup card navigation on index.html
    if (path.endsWith('index.html') || path === '/') {
        updateDashboard();
        setupCardNavigation();
    } 
    // Budget page logic
    else if (path.endsWith('budget.html')) {
        renderBudgets();
        const budgetForm = document.getElementById('budget-form');
        if (budgetForm) {
            budgetForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const budget = {
                    category: document.getElementById('budget-category').value,
                    amount: parseFloat(document.getElementById('budget-amount').value)
                };
                budgets.push(budget);
                saveBudgets();
                renderBudgets();
                alert('Budget saved successfully!');
                this.reset();
            });
        }
    }
});