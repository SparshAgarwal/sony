define('sony/tests/test-helper', ['exports', 'sony/tests/helpers/resolver', 'ember-qunit'], function (exports, _sonyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_sonyTestsHelpersResolver['default']);
});