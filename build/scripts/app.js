
define('engine/dummy/collection',['backbone'], function (Backbone) {
  var DummyCollection = Backbone.Collection.extend();
  return DummyCollection;
});
define('engine/dummy/view',['backbone'], function (Backbone) {
  var DummyView = Backbone.View.extend();
  return DummyView;
});
define('engine/dummy/model',['backbone'], function (Backbone) {
  var DummyModel = Backbone.Model.extend();
  return DummyModel;
});
define('dummy',[
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
define('app',['dummy'], function (Dummy) {
  var view = new Dummy.View();
  $('main').html("POOP")
});
define('engine/modules/dummy',[
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