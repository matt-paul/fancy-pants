describe('pantsController', function() {
  beforeEach(module('FancyPants'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('pantsController');
  }));

  it('does not initially offer a discount', function() {
    expect(ctrl.discount).toBe(false);
  });
});
