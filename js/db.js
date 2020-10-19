var dbPromised = idb.open("bolapedia", 1, function (upgradeDb) {
  var teamsObjectStore = upgradeDb.createObjectStore("teams", {
    keyPath: "id"
  });
  teamsObjectStore.createIndex("name", "name", {
    unique: false
  });
});

function saveForLater(team) {
  dbPromised
    .then(function (db) {
      var tx = db.transaction("teams", "readwrite");
      var store = tx.objectStore("teams");
      store.add(team);
      return tx.complete;
    })
    .then(function () {
      console.log("Klub berhasil di simpan.");
    });
}

function deleteFavorite(id) {
  dbPromised.then(function (db) {
    var tx = db.transaction('teams', 'readwrite');
    var store = tx.objectStore('teams');
    store.delete(id);
    return tx.complete;
  }).then(function () {
    console.log('Klub favorit berhasil deleted');
  });
}

function getAll() {
  return new Promise(function (resolve, reject) {
    dbPromised
      .then(function (db) {
        var tx = db.transaction("teams", "readonly");
        var store = tx.objectStore("teams");
        return store.getAll();
      })
      .then(function (teams) {
        resolve(teams);
      });
  });
}

function getAllByTitle(title) {
  dbPromised
    .then(function (db) {
      var tx = db.transaction("teams", "readonly");
      var store = tx.objectStore("teams");
      var titleIndex = store.index("name");
      var range = IDBKeyRange.bound(title, title + "\uffff");
      return titleIndex.getAll(range);
    })
    .then(function (teams) {
      console.log(teams);
    });
}

function getById(id) {
  return new Promise(function (resolve, reject) {
    dbPromised
      .then(function (db) {
        var tx = db.transaction("teams", "readonly");
        var store = tx.objectStore("teams");
        return store.get(id);
      })
      .then(function (team) {
        resolve(team);
      });
  });
}