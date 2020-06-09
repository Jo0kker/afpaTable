$(document).ready(function() {

    var dataSet = [
        [1,"Tiger Nixon", "System Architect", "Edinburgh", "2011/04/25", "$320,800"],
        [2,"Garrett Winters", "Accountant", "Tokyo", "2011/07/25", "$170,750"],
        [3,"Ashton Cox", "Junior Technical Author", "San Francisco", "2009/01/12", "$86,000"],
        [4,"Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "2012/03/29", "$433,060"],
        [5,"Airi Satou", "Accountant", "Tokyo", "2008/11/28", "$162,700"],
        [6,"Brielle Williamson", "Integration Specialist", "New York", "2012/12/02", "$372,000"],
        [7,"Herrod Chandler", "Sales Assistant", "San Francisco", "2012/08/06", "$137,500"],
        [8,"Rhona Davidson", "Integration Specialist", "Tokyo", "2010/10/14", "$327,900"],
        [9,"Colleen Hurst", "Javascript Developer", "San Francisco", "2009/09/15", "$205,500"],
        [10,"Sonya Frost", "Software Engineer", "Edinburgh", "2008/12/13", "$103,600"],
        [11,"Jena Gaines", "Office Manager", "London", "2008/12/19", "$90,560"],
        [12,"Quinn Flynn", "Support Lead", "Edinburgh", "2013/03/03", "$342,000"],
        [13,"Charde Marshall", "Regional Director", "San Francisco", "2008/10/16", "$470,600"],
        [14,"Haley Kennedy", "Senior Marketing Designer", "London", "2012/12/18", "$313,500"],
        [15,"Tatyana Fitzpatrick", "Regional Director", "London", "2010/03/17", "$385,750"],
        [16,"Michael Silva", "Marketing Designer", "London", "2012/11/27", "$198,500"],
        [17,"Paul Byrd", "Chief Financial Officer (CFO)", "New York", "2010/06/09", "$725,000"],
        [18,"Gloria Little", "Systems Administrator", "New York", "2009/04/10", "$237,500"],
        [19,"Bradley Greer", "Software Engineer", "London", "2012/10/13", "$132,000"],
        [20,"Dai Rios", "Personnel Lead", "Edinburgh", "2012/09/26", "$217,500"],
        [21,"Jenette Caldwell", "Development Lead", "New York", "2011/09/03", "$345,000"],
        [22,"Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "2009/06/25", "$675,000"],
        [23,"Caesar Vance", "Pre-Sales Support", "New York", "2011/12/12", "$106,450"],
        [24,"Doris Wilder", "Sales Assistant", "Sidney", "2010/09/20", "$85,600"],
        [25,"Angelica Ramos", "Chief Executive Officer (CEO)", "London", "2009/10/09", "$1,200,000"],
        [26,"Gavin Joyce", "Developer", "Edinburgh", "2010/12/22", "$92,575"],
        [27,"Jennifer Chang", "Regional Director", "Singapore", "2010/11/14", "$357,650"],
        [28,"Brenden Wagner", "Software Engineer", "San Francisco", "2011/06/07", "$206,850"],
        [29,"Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2010/03/11", "$850,000"],
        [30,"Shou Itou", "Regional Marketing", "Tokyo", "2011/08/14", "$163,000"],
        [31,"Michelle House", "Integration Specialist", "Sidney", "2011/06/02", "$95,400"],
        [32,"Suki Burks", "Developer", "London", "2009/10/22", "$114,500"],
        [33,"Prescott Bartlett", "Technical Author", "London", "2011/05/07", "$145,000"],
        [34,"Gavin Cortez", "Team Leader", "San Francisco", "2008/10/26", "$235,500"],
        [35,"Martena Mccray", "Post-Sales support", "Edinburgh", "2011/03/09", "$324,050"],
        [36,"Unity Butler", "Marketing Designer", "San Francisco", "2009/12/09", "$85,675"]
    ];

    var columnDefs = [{
        title: "Titre",
        type: "text"
    }, {
        title: "Année de sortie",
        type: "number"
    }, {
        title: "Budget",
        type: "number"
    }, {
        title: "Producteur"
    }, {
        title: "Localisation",
        type: "text"
    }, {
        title: "Acteurs"
    }];

    var myTable;

    myTable = $('#example').DataTable({
        "sPaginationType": "full_numbers",
        data: dataSet,
        columns: columnDefs,
        dom: 'Bfrtip',        // Needs button container
        select: 'single',
        responsive: true,
        altEditor: true,     // Enable altEditor
        language: {
            url: "//cdn.datatables.net/plug-ins/1.10.21/i18n/French.json"
        },
        buttons: [{
            text: 'Ajouter',
            name: 'add'        // do not change name
        },
            {
                extend: 'selected', // Bind to Selected row
                text: 'Edition',
                name: 'edit'        // do not change name
            },
            {
                extend: 'selected', // Bind to Selected row
                text: 'Supprimer',
                name: 'delete'      // do not change name
            }]
    });
});
