define('sony/tests/components/game-list.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/game-list.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/game-list.js should pass ESLint.\n3:5  - \'data\' is defined but never used. (no-unused-vars)');
  });
});