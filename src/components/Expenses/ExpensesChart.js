import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Janeiro', value: 0 },
    { label: 'Fevereiro', value: 0 },
    { label: 'Março', value: 0 },
    { label: 'Abril', value: 0 },
    { label: 'Maio', value: 0 },
    { label: 'Junho', value: 0 },
    { label: 'Julho', value: 0 },
    { label: 'Agosto', value: 0 },
    { label: 'Novembro', value: 0 },
    { label: 'Dezembro', value: 0 }
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // Janeiro = 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart;