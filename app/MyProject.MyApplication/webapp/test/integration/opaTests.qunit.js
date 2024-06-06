sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'MyProject/MyApplication/test/integration/FirstJourney',
		'MyProject/MyApplication/test/integration/pages/Person1List',
		'MyProject/MyApplication/test/integration/pages/Person1ObjectPage'
    ],
    function(JourneyRunner, opaJourney, Person1List, Person1ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('MyProject/MyApplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePerson1List: Person1List,
					onThePerson1ObjectPage: Person1ObjectPage
                }
            },
            opaJourney.run
        );
    }
);