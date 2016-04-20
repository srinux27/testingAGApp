describe("Controller Test", function () {
    var scope;

    beforeEach(angular.mock.module('TestModule'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('TestController', {
            $scope: scope
        })
    }));

    it('Detect if counter is defined', function () {
        expect(scope.counter).toBeDefined();
    });
    
    
    it('Detect if counter initialized to 0', function() {
       expect(scope.counter).toEqual(0); 
    });
    
    it('Verify if incrementer function working properly', function() {
        scope.incrementer();
        expect (scope.counter).toEqual(1);
    });
});