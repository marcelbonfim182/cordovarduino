'use strict';

app.settingsView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('settingsView');

// START_CUSTOM_CODE_settingsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.settingsView.set('title', 'Settings');
})();
// END_CUSTOM_CODE_settingsView