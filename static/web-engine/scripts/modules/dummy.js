define([
  'engine/dummy/collection',
  'engine/dummy/view',
  'engine/dummy/model'
], function (DummyCollection, DummyView, DummyModel) {
    var Dummy = {
      Collection: DummyCollection,
      View: DummyView,
      Model: DummyModel
    };

    return Dummy;
  }
);