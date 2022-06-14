function drawChart() {
  // Define the chart to be drawn.
  var table = new google.visualization.DataTable();

  // PIE CHART
  table.addColumn("string", "Categorias");
  table.addColumn("number", "Valores");
  table.addRows([
    ["Educação", 2000],
    ["Transporte", 500],
    ["Lazer", 250],
    ["Saúde", 100],
    ["Cartão de Crédito", 900],
    ["Alimentação", 260.75],
  ]);

  var options = {
    title: "Tipos de Gastos",
    height: 400,
    width: 920,
    is3D: true,
    legend: "labeled",
    pieSliceText: "value",
    slices: {
      0: {}, // gera cor por padrão
      1: { color: "#990033" }, // aceita o valor hexadécimal da cor
      2: { color: "#005221" },
      3: { color: "yellow" }, // aceita o valor pelo nome da cor
      4: { offset: 0.3 }, // distância entre o raio das fatias de pizza
      5: { color: "#ff7b00" },
    },
  };

  // Instantiate and draw the chart.
  var chart = new google.visualization.PieChart(
    document.getElementById("myPieChart")
  );
  chart.draw(table, options);

  // LINE CHART
  table = new google.visualization.DataTable();
  table.addColumn("string", "Mês");
  table.addColumn("number", "Gastos");
  table.addRows([
    ["jan", 800],
    ["fev", 400],
    ["mar", 1100],
    ["abr", 400],
    ["mai", 500],
    ["jun", 750],
    ["jul", 1500],
    ["ago", 650],
    ["set", 850],
    ["out", 400],
    ["nov", 1000],
    ["dez", 720],
  ]);

  var options = {
    title: "Gastos por Mês",
    height: 400,
    width: 920,
    vAxis: {
      format: "currency", // define o formato do valor (eixo vertical)
      gridlines: {
        // define a quantidade e a cor de linhas de grade
        count: 5,
        color: "transparent",
      },
    },
    curveType: "function", // define a curva da linha principal
    legend: "none",
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("myLineChart")
  );

  chart.draw(table, options);

  // CHART COLUMN
  var table = google.visualization.arrayToDataTable([
    ["Mês", "Entrada", "Saída"],
    ["jan", 2500, 1000],
    ["fev", 2000, 500],
    ["mar", 3000, 1300],
    ["abr", 1500, 1700],
    ["mai", 5000, 2250],
    ["jun", 3567, 3000],
    ["jul", 3452, 1468],
    ["ago", 1833, 5250],
    ["set", 3803, 5500],
    ["out", 1800, 1000],
    ["nov", 3569, 1500],
    ["dez", 3000, 1740],
  ]);

  var options = {
    title: "Entradas e saídas da conta",
    width: 920,
    height: 600,
    vAxis: {
      gridlines: { color: "transparent" },
      format: "currency",
      title: "Valores",
    },
    hAxis: {
      title: "Mês",
    },
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("myColumnChart")
  );
  chart.draw(table, options);

  // SURPRISE COLUMN
  var table = new google.visualization.DataTable();
  table.addColumn("string", "Categorias");
  table.addColumn("number", "Valores");
  table.addColumn({
    type: "number",
    role: "annotation",
  });
  table.addColumn({
    type: "string", 
    role:"style"
  });

  table.addRows([
    ["Educação", 2000, 2000, "blue"],
    ["Transporte", 500, 500, "#990033"],
    ["Lazer", 250, 250, "#005221"],
    ["Saúde", 100, 100, "#999999"],
    ["Cartão de Crédito", 900, 900, "purple"],
    ["Alimentação", 260.5, 260.5, "#ff7b00"],
  ]);

  var options = {
    title: "Tipos de Gastos",
    weidht: 920,
    height: 600,
    vAxis: {
      gridlines: { count: 0 },
      textPosition: "none",
    },
    legend: "none",
  };

  var chart = new google.visualization.BarChart(
    document.getElementById("mySurpriseColumnChart")
  );
  chart.draw(table, options);
}
