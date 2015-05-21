Ext.define('Tienda.view.grafico.Tarta', {
    extend: 'Ext.chart.Chart', 
    alias: 'widget.graficoTarta', 

    width: 800,
    height: 600,
    animate: true,
    shadow: true,

    title: 'Gráfico',

    store: 'CompraElementos',

    legend: {
        position: 'right'
    },
    insetPadding: 25,
    theme: 'Base:gradients',

    series: [{
        type: 'pie',
        field: 'cantidad',
        showInLegend: true,
        highlight: {
          segment: {
            margin: 20
          }
        },
        label: {
            field: 'nombre',
            display: 'rotate',
            contrast: true,
            font: '18px Arial'
        }
    }]
});