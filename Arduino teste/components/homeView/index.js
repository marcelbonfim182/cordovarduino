'use strict';

app.homeView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('homeView');

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.homeView.set('title', 'Home');
})();
// END_CUSTOM_CODE_homeView