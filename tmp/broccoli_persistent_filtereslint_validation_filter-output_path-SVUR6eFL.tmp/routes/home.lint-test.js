QUnit.module('ESLint - routes/home.js');
QUnit.test('should pass ESLint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/home.js should pass ESLint.\n7:2  - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2  - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2  - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n13:27  - \'parameter\' is defined but never used. (no-unused-vars)');
});
