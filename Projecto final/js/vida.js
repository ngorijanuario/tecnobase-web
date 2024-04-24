let expenses = [];
let balance = 0;

function saveExpense() {
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    expenses.push({ category, amount });
    updateExpensesList();
    updateBalance();
}

function updateExpensesList() {
    const expensesList = document.getElementById('expenses-list');
    expensesList.innerHTML = '';
    expenses.forEach(expense => {
        const expenseElement = document.createElement('div');
        expenseElement.classList.add('expense');
        expenseElement.textContent = `${expense.category}: ${expense.amount.toFixed(2)} Kz`;
        expensesList.appendChild(expenseElement);
    });
}

function updateBalance() {
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    balance -= totalExpenses;
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = `Saldo disponível: ${balance.toFixed(2)} Kz`;
}




function showExpenses() {
    document.getElementById('main-container').style.display = 'block';
    document.getElementById('expenses-container').style.display = 'block';
    document.getElementById('expenses-list').style.display = 'block';
    document.getElementById('balance').style.display = 'none';
}

function showBalance() {
    document.getElementById('main-container').style.display = 'block';
    document.getElementById('expenses-container').style.display = 'none';
    document.getElementById('expenses-list').style.display = 'none';
    document.getElementById('balance').style.display = 'block';
}
// Função para exibir o saldo disponível
function showBalance() {
    document.getElementById('main-container').style.display = 'block';
    document.getElementById('expenses-container').style.display = 'none';
    document.getElementById('expenses-list').style.display = 'none';
    document.getElementById('balance').style.display = 'block';
    document.getElementById('goals').style.display = 'none';
    document.getElementById('reports').style.display = 'none';
    
    // Atualiza o saldo disponível
    updateBalance();
}

// Atualiza o saldo disponível
function updateBalance() {
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    balance = totalExpenses;
    const balanceElement = document.getElementById('balance-amount');
    balanceElement.textContent = `Total de gastos: ${balance.toFixed(2)} Kz`;
}


// Função para exibir a seção de metas

// Variáveis globais para armazenar a meta e o progresso
let goalAmount = 0;
let expensesTotal = 0;

// Função para exibir a seção de metas
function showGoals() {
    document.getElementById('main-container').style.display = 'block';
    document.getElementById('expenses-container').style.display = 'none';
    document.getElementById('expenses-list').style.display = 'none';
    document.getElementById('balance').style.display = 'none';
    document.getElementById('goals').style.display = 'block';
    document.getElementById('reports').style.display = 'none';

    // Preenche o campo de meta com o valor atual, se existir
    document.getElementById('goal-amount').value = goalAmount.toFixed(2);
    // Atualiza o progresso em relação à meta
    updateGoalProgress();
}

// Lidar com o envio do formulário de metas
document.getElementById('goals-form').addEventListener('submit', function(event) {
    event.preventDefault();
    goalAmount = parseFloat(document.getElementById('goal-amount').value);
    
    if (isNaN(goalAmount) || goalAmount <= 0) {
        alert('Por favor, insira um valor válido para a meta.');
        return;
    }

    // Atualiza o progresso em relação à nova meta
    updateGoalProgress();
});

// Função para atualizar o progresso em relação à meta
function updateGoalProgress() {
    // Calcula o total de gastos
    expensesTotal = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    
    // Calcula o progresso em relação à meta
    const progress = (expensesTotal / goalAmount) * 100;

    // Atualiza o texto do elemento HTML
    const progressElement = document.getElementById('goal-progress');
    progressElement.textContent = `Progresso em relação à meta: ${progress.toFixed(2)}%`;

    // Altera o estilo do elemento para indicar se a meta foi alcançada ou não
    if (progress >= 100) {
        progressElement.style.color = 'green';
    } else {
        progressElement.style.color = 'black';
    }
}

// Função para exibir a seção de relatórios
function showReports() {
    document.getElementById('main-container').style.display = 'block';
    document.getElementById('expenses-container').style.display = 'none';
    document.getElementById('expenses-list').style.display = 'none';
    document.getElementById('balance').style.display = 'none';
    document.getElementById('goals').style.display = 'none';
    document.getElementById('reports').style.display = 'block';

    // Chama a função para gerar o relatório semanal
    generateWeeklyReport();
}

// Função para gerar o relatório semanal
function generateWeeklyReport() {
    const weeklyReportElement = document.getElementById('weekly-report');
    // Implemente a lógica para gerar o relatório
    // Por enquanto, vamos apenas exibir um texto simples
    weeklyReportElement.innerHTML = "<p>Aqui está o relatório semanal dos gastos.</p>";
}

// Função para exportar o relatório em formato CSV
function exportReport() {
    // Verifica se há dados para gerar o relatório
    if (expenses.length === 0) {
        alert("Não há dados para gerar o relatório.");
        return;
    }

    // Cria o conteúdo do CSV
    let csvContent = "Categoria,Valor\n";
    expenses.forEach(expense => {
        csvContent += `${expense.category},${expense.amount.toFixed(2)}\n`;
    });

    // Cria um elemento <a> temporário para fazer o download do arquivo
    const downloadLink = document.createElement("a");
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = 'relatorio_semanal.csv';

    // Simula o clique no link para iniciar o download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove o elemento <a> temporário
    document.body.removeChild(downloadLink);
}
