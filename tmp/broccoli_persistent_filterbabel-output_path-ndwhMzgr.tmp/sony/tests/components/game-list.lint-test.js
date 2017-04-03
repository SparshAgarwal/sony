define('sony/tests/components/game-list.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/game-list.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/game-list.js should pass ESLint.\n');
  });
});