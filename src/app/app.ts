import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { DashboardLayout } from '@syncfusion/ej2-layouts';
import {
    Grid,
    Selection,
    Page,
    Edit,
    Toolbar,
    Filter,
    Sort
} from '@syncfusion/ej2-grids';
import { DataManager, Query, Predicate } from '@syncfusion/ej2-data';
import { Button } from '@syncfusion/ej2-buttons';
import {
    Chart,
    LineSeries,
    DateTime,
    Legend,
    Tooltip
} from '@syncfusion/ej2-charts';
import { SplineAreaSeries } from '@syncfusion/ej2-charts';
Chart.Inject(SplineAreaSeries, DateTime, Legend);
import {
    AccumulationChart,
    AccumulationLegend,
    PieSeries,
    AccumulationTooltip,
    AccumulationDataLabel
} from '@syncfusion/ej2-charts';
AccumulationChart.Inject(
    AccumulationLegend,
    PieSeries,
    AccumulationTooltip,
    AccumulationDataLabel
);
Chart.Inject(SplineAreaSeries, DateTime, Legend);
Chart.Inject(LineSeries, DateTime, Legend, Tooltip);

Grid.Inject(Selection, Page, Edit, Toolbar, Filter, Sort);

import { ColumnSeries, Category, DataLabel } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, DataLabel, Category, Legend, Tooltip);

import { DropDownList } from '@syncfusion/ej2-dropdowns';

// Json Data
var cricketData: any = [
    { Year: 2010, Result: 'Draw', Count: 10, Type: 'Test', Country: 'India' },
    { Year: 2010, Result: 'Won', Count: 55, Type: 'Test', Country: 'India' },
    { Year: 2010, Result: 'Lose', Count: 25, Type: 'Test', Country: 'India' },
    { Year: 2010, Result: 'No Result', Count: 5, Type: 'Test', Country: 'India' },
    { Year: 2011, Result: 'Draw', Count: 19, Type: 'Test', Country: 'India' },
    { Year: 2011, Result: 'Won', Count: 45, Type: 'Test', Country: 'India' },
    { Year: 2011, Result: 'Lose', Count: 35, Type: 'Test', Country: 'India' },
    { Year: 2011, Result: 'No Result', Count: 1, Type: 'Test', Country: 'India' },

    { Year: 2010, Result: 'Draw', Count: 10, Type: 'Odi', Country: 'India' },
    { Year: 2010, Result: 'Won', Count: 75, Type: 'Odi', Country: 'India' },
    { Year: 2010, Result: 'Lose', Count: 15, Type: 'Odi', Country: 'India' },
    { Year: 2010, Result: 'No Result', Count: 5, Type: 'Odi', Country: 'India' },
    { Year: 2011, Result: 'Draw', Count: 10, Type: 'Odi', Country: 'India' },
    { Year: 2011, Result: 'Won', Count: 55, Type: 'Odi', Country: 'India' },
    { Year: 2011, Result: 'Lose', Count: 25, Type: 'Odi', Country: 'India' },
    { Year: 2011, Result: 'No Result', Count: 5, Type: 'Odi', Country: 'India' },

    { Year: 2010, Result: 'Draw', Count: 1, Type: 'T20', Country: 'India' },
    { Year: 2010, Result: 'Won', Count: 45, Type: 'T20', Country: 'India' },
    { Year: 2010, Result: 'Lose', Count: 52, Type: 'T20', Country: 'India' },
    { Year: 2010, Result: 'No Result', Count: 2, Type: 'T20', Country: 'India' },
    { Year: 2011, Result: 'Draw', Count: 0, Type: 'T20', Country: 'India' },
    { Year: 2011, Result: 'Won', Count: 15, Type: 'T20', Country: 'India' },
    { Year: 2011, Result: 'Lose', Count: 10, Type: 'T20', Country: 'India' },
    { Year: 2011, Result: 'No Result', Count: 2, Type: 'T20', Country: 'India' },

    { Year: 2010, Result: 'Draw', Count: 12, Type: 'Test', Country: 'Australia' },
    { Year: 2010, Result: 'Won', Count: 54, Type: 'Test', Country: 'Australia' },
    { Year: 2010, Result: 'Lose', Count: 22, Type: 'Test', Country: 'Australia' },
    {
        Year: 2010,
        Result: 'No Result',
        Count: 1,
        Type: 'Test',
        Country: 'Australia'
    },
    { Year: 2011, Result: 'Draw', Count: 18, Type: 'Test', Country: 'Australia' },
    { Year: 2011, Result: 'Won', Count: 42, Type: 'Test', Country: 'Australia' },
    { Year: 2011, Result: 'Lose', Count: 32, Type: 'Test', Country: 'Australia' },
    {
        Year: 2011,
        Result: 'No Result',
        Count: 2,
        Type: 'Test',
        Country: 'Australia'
    },

    { Year: 2010, Result: 'Draw', Count: 13, Type: 'Odi', Country: 'Australia' },
    { Year: 2010, Result: 'Won', Count: 45, Type: 'Odi', Country: 'Australia' },
    { Year: 2010, Result: 'Lose', Count: 42, Type: 'Odi', Country: 'Australia' },
    {
        Year: 2010,
        Result: 'No Result',
        Count: 2,
        Type: 'Odi',
        Country: 'Australia'
    },
    { Year: 2011, Result: 'Draw', Count: 14, Type: 'Odi', Country: 'Australia' },
    { Year: 2011, Result: 'Won', Count: 54, Type: 'Odi', Country: 'Australia' },
    { Year: 2011, Result: 'Lose', Count: 24, Type: 'Odi', Country: 'Australia' },
    {
        Year: 2011,
        Result: 'No Result',
        Count: 4,
        Type: 'Odi',
        Country: 'Australia'
    },

    { Year: 2010, Result: 'Draw', Count: 4, Type: 'T20', Country: 'Australia' },
    { Year: 2010, Result: 'Won', Count: 5, Type: 'T20', Country: 'Australia' },
    { Year: 2010, Result: 'Lose', Count: 60, Type: 'T20', Country: 'Australia' },
    {
        Year: 2010,
        Result: 'No Result',
        Count: 2,
        Type: 'T20',
        Country: 'Australia'
    },
    { Year: 2011, Result: 'Draw', Count: 0, Type: 'T20', Country: 'Australia' },
    { Year: 2011, Result: 'Won', Count: 17, Type: 'T20', Country: 'Australia' },
    { Year: 2011, Result: 'Lose', Count: 16, Type: 'T20', Country: 'Australia' },
    {
        Year: 2011,
        Result: 'No Result',
        Count: 4,
        Type: 'T20',
        Country: 'Australia'
    }
];

// Initailazation of Dashboard control

let dashboard: DashboardLayout = new DashboardLayout({
    columns: 6,
    cellSpacing: [5, 5],
    cellAspectRatio: 100 / 85,
    allowDragging: true,
    panels: [
        {
            sizeX: 2,
            sizeY: 1,
            row: 0,
            col: 0,
            header: '<div><b>Test Cricket</b></div>',
            content: '#card1'
        },
        {
            sizeX: 2,
            sizeY: 1,
            row: 0,
            col: 2,
            header: '<div><b>ODI Cricket</b></div>',
            content: '#card2'
        },
        {
            sizeX: 2,
            sizeY: 1,
            row: 0,
            col: 4,
            header: '<div><b>T20 Cricket</b></div>',
            content: '#card3'
        },
        {
            sizeX: 2,
            sizeY: 2,
            row: 1,
            col: 0,
            header: '<div><b>Result Table</b></div>',
            content: '<div id="table_stats"></div>'
        },
        {
            sizeX: 2,
            sizeY: 2,
            row: 1,
            col: 2,
            header: '<div><b>ODI Statistics</b></div>',
            content: '<div id="odi_stats"></div>'
        },
        {
            sizeX: 2,
            sizeY: 2,
            row: 1,
            col: 4,
            header: '<div><b>T20 Statistics</b></div>',
            content: '<div id="t20_stats"></div>'
        },
        {
            sizeX: 2,
            sizeY: 2,
            row: 3,
            col: 0,
            header: '<div><b>Test Statistics</b></div>',
            content: '<div id="test_stats"></div>'
        },
        {
            sizeX: 4,
            sizeY: 2,
            row: 3,
            col: 2,
            header: '<div><b>Complete Statistics</b></div>',
            content: '<div id="colChart"></div>'
        }
    ]
});

// Initialized dashboared is rednered.
dashboard.appendTo('#editLayout');

// ODI Statistics AccumulationChart creation
let pie: AccumulationChart = new AccumulationChart({
    enableSmartLabels: true,
    selectionMode: 'Point',
    series: [
        {
            dataSource: new DataManager(cricketData).executeLocal(
                new Query().where(
                    new Predicate('Year', 'equal', 2010).and('Type', 'equal', 'Odi')
                )
            ),
            xName: 'Result',
            yName: 'Count',
            startAngle: 0,
            endAngle: 360,
            innerRadius: '35%',
            radius: '100%',
            dataLabel: {
                visible: true,
                position: 'Inside',
                name: 'text',
                font: { color: 'white', fontWeight: '600', size: '14px' }
            },
            name: 'Revenue',
            palettes: ['#357cd2', '#00bdae', '#e36593']
        }
    ],
    legendSettings: {
        visible: false,
        toggleVisibility: false,
        position: 'Right',
        height: '28%',
        width: '44%'
    },
    textRender: (args: any) => {
        pie.animateSeries = true;
    },
    tooltip: {
        enable: true,
        header: '<b>${point.x}</b>',
        format: 'Composition : <b>${point.y}%</b>'
    },
    title: 'Odi Results',
    width: '100%',
    height: '100%'
});
pie.appendTo('#odi_stats');
pie.refresh();

// T20 Statistics AccumulationChart creation
let linechartObj: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: new DataManager(cricketData).executeLocal(
                new Query().where(
                    new Predicate('Year', 'equal', 2010)
                        .and('Type', 'equal', 'T20')
                        .and('Country', 'equal', 'India')
                )
            ),
            animation: { enable: true },
            name: 'T20',
            explode: true,
            dataLabel: {
                visible: true,
                position: 'Outside',
                connectorStyle: { type: 'Line', length: '5%' },
                font: {
                    size: '14px'
                }
            },
            radius: '70%',
            xName: 'Result',
            yName: 'Count',
            startAngle: 0,
            endAngle: 360,
            innerRadius: '0%'
        }
    ],
    textRender: (args: any) => {
        args.text = args.point.x + ' ' + args.point.y;
    },
    //Initializing tooltip
    tooltip: { enable: true },
    //Initializing title
    title: 'T20 Results'
});
linechartObj.appendTo('#t20_stats');
linechartObj.refresh();


// Complete Statistics Chart creation
let columnChartObj: Chart = new Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: 'Category',
        interval: 1,
        majorGridLines: { width: 0 }
    },
    chartArea: { border: { width: 0 } },
    width: '100%',
    height: '100%',
    margin: { top: 30 },
    //Initializing Primary X Axis
    primaryYAxis: {
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { color: 'transparent' }
    },
    //Initializing Chart Series
    series: [
        {
            type: 'Column',
            xName: 'Result',
            width: 2,
            yName: 'Count',
            name: 'T20',
            dataSource: new DataManager(cricketData).executeLocal(
                new Query().where(
                    new Predicate('Year', 'equal', 2010)
                        .and('Type', 'equal', 'T20')
                        .and('Country', 'equal', 'India')
                )
            ),
            marker: {
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: { fontWeight: '600', color: '#ffffff' }
                }
            }
        },
        {
            type: 'Column',
            xName: 'Result',
            width: 2,
            yName: 'Count',
            name: 'Test',
            dataSource: new DataManager(cricketData).executeLocal(
                new Query().where(
                    new Predicate('Year', 'equal', 2010)
                        .and('Type', 'equal', 'Test')
                        .and('Country', 'equal', 'India')
                )
            ),
            marker: {
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: { fontWeight: '600', color: '#ffffff' }
                }
            }
        },
        {
            type: 'Column',
            xName: 'Result',
            width: 2,
            yName: 'Count',
            name: 'Odi',
            dataSource: new DataManager(cricketData).executeLocal(
                new Query().where(
                    new Predicate('Year', 'equal', 2010)
                        .and('Type', 'equal', 'Odi')
                        .and('Country', 'equal', 'India')
                )
            ),
            marker: {
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: { fontWeight: '600', color: '#ffffff' }
                }
            }
        }
    ],
    legendSettings: { visible: true }
});
columnChartObj.appendTo('#colChart');
columnChartObj.refresh();

// Grid Creation
let grid: Grid = new Grid({
    // Filtered data assigned to the Grid DataSource.
    dataSource: new DataManager(cricketData).executeLocal(
        new Query().where(new Predicate('Country', 'equal', 'India'))
    ),
    gridLines: 'Both',
    height: '100%',
    allowPaging: true,
    allowFiltering: true,
    allowSorting: true,
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Normal',
        newRowPosition: 'Top'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search']
});
grid.appendTo('#table_stats');

// Test Statistics AccumulationChart creation
let pieChart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: new DataManager(cricketData).executeLocal(
                new Query().where(
                    new Predicate('Year', 'equal', 2010)
                        .and('Type', 'equal', 'Test')
                        .and('Country', 'equal', 'India')
                )
            ),
            animation: { enable: true },
            name: 'Test',
            explode: true,
            dataLabel: {
                visible: true,
                position: 'Outside',
                connectorStyle: { type: 'Line', length: '5%' },
                font: {
                    size: '14px'
                }
            },
            radius: '70%',
            xName: 'Result',
            yName: 'Count',
            startAngle: 0,
            endAngle: 360,
            innerRadius: '0%'
        }
    ],
    textRender: (args: any) => {
        args.text = args.point.x + ' ' + args.point.y;
    },
    //Initializing tooltip
    tooltip: { enable: true },
    //Initializing title
    title: 'Test Results'
});
pieChart.appendTo('#test_stats');
pieChart.refresh();

// define the array of data
let sportsData: string[] = ['India', 'Australia'];

// initialize DropDownList component
let dropDownListObject: DropDownList = new DropDownList({
    //set the data to dataSource property
    dataSource: sportsData,
    placeholder: 'Select a Country',
    floatLabelType: 'Always',
    index: 0,
    change: function (args) {
        // Changed DataSource assigned to the Grid based on dropdown's selected value
        var table = ((document.getElementById('table_stats') as any).ej2_instances[0].dataSource =
            new DataManager(cricketData).executeLocal(
                new Query().where(new Predicate('Country', 'equal', args.value))
            ));
    }
});
// render initialized DropDownList
dropDownListObject.appendTo('#country');



//Button Component creation.
let button_2010: Button = new Button({ isPrimary: true });
button_2010.appendTo('#stats_2010');

button_2010.element.onclick = (args): void => {
    updateDashBoard(args);
};

let button_2011: Button = new Button({ isPrimary: true });
button_2011.appendTo('#stats_2011');

button_2011.element.onclick = (args: any): void => {
    updateDashBoard(args);
};


// Based on button click, statistics modified by changing the DataSource of the requried Compoenents
function updateDashBoard(args: any) {
    var dropValue = (document.getElementById('country') as any).ej2_instances[0]
        .value;
    var table = ((document.getElementById(
        'table_stats'
    ) as any).ej2_instances[0].dataSource = new DataManager(
        cricketData
    ).executeLocal(
        new Query().where(
            new Predicate(
                'Year',
                'equal',
                parseInt((args.currentTarget as any).innerText)
            ).and('Country', 'equal', dropValue)
        )
    ));
    var odiStats = ((document.getElementById(
        'odi_stats'
    ) as any).ej2_instances[0].series[0].dataSource = new DataManager(
        cricketData
    ).executeLocal(
        new Query().where(
            new Predicate(
                'Year',
                'equal',
                parseInt((args.currentTarget as any).innerText)
            )
                .and('Type', 'equal', 'Odi')
                .and('Country', 'equal', dropValue)
        )
    ));
    var t20Stats = ((document.getElementById(
        't20_stats'
    ) as any).ej2_instances[0].series[0].dataSource = new DataManager(
        cricketData
    ).executeLocal(
        new Query().where(
            new Predicate(
                'Year',
                'equal',
                parseInt((args.currentTarget as any).innerText)
            )
                .and('Type', 'equal', 'T20')
                .and('Country', 'equal', dropValue)
        )
    ));

    var testStats = ((document.getElementById(
        'test_stats'
    ) as any).ej2_instances[0].series[0].dataSource = new DataManager(
        cricketData
    ).executeLocal(
        new Query().where(
            new Predicate(
                'Year',
                'equal',
                parseInt((args.currentTarget as any).innerText)
            )
                .and('Type', 'equal', 'Test')
                .and('Country', 'equal', dropValue)
        )
    ));

    // complete Statistics

    var comStats = (document.getElementById('colChart') as any).ej2_instances[0];
    comStats.series[0].dataSource = new DataManager(cricketData).executeLocal(
        new Query().where(
            new Predicate(
                'Year',
                'equal',
                parseInt((args.currentTarget as any).innerText)
            )
                .and('Type', 'equal', 'T20')
                .and('Country', 'equal', dropValue)
        )
    );

    comStats.series[1].dataSource = new DataManager(cricketData).executeLocal(
        new Query().where(
            new Predicate(
                'Year',
                'equal',
                parseInt((args.currentTarget as any).innerText)
            )
                .and('Type', 'equal', 'Test')
                .and('Country', 'equal', dropValue)
        )
    );

    comStats.series[2].dataSource = new DataManager(cricketData).executeLocal(
        new Query().where(
            new Predicate(
                'Year',
                'equal',
                parseInt((args.currentTarget as any).innerText)
            )
                .and('Type', 'equal', 'Odi')
                .and('Country', 'equal', dropValue)
        )
    );
}

