sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'MyProject.MyApplication',
            componentId: 'Person1List',
            contextPath: '/Person1'
        },
        CustomPageDefinitions
    );
});