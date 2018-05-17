angular.module("testDirective", [])
    .controller("testController", [function() {
        this.text = "Hello World";
    }])
    .directive("testDirective", [function () {
        return {
            controller: "testController as test",
            templateUrl: "testDirective.tpl.html"
        }
    }]);