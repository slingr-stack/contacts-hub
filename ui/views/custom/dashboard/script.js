$(document).ready(function () {
    var ViewModel = function () {
        var self = this;
        self.companies = ko.observableArray();
        self.getCompanies = function () {
            console.log('Retrieving companies information from REST API');
            $.ajax({
                url: sys.ws.API_URL + "/data/companies",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'token': sys.ws.TOKEN
                }
            })
                .done(function (response) {
                    var wrapedCompanies = [];
                    var list = response.items;
                    for (var i in list) {
                        wrapedCompanies.push({
                            name: list[i].name,
                            active: list[i].active,
                            id: list[i].id
                        });
                    }
                    self.companies(wrapedCompanies);
                });
        };
        self.goToCompanies = function () {
            sys.ui.goToView('Companies');
        };
        self.goToRecordView = function (recordId) {
            sys.ui.goToView('Companies', {recordId: recordId});
        };
    };
    ko.applyBindings(new ViewModel());
});