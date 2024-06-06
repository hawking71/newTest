sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'MyProject.MyApplication',
            componentId: 'Person1ObjectPage',
            contextPath: '/Person1'
        },
        CustomPageDefinitions
    );
});