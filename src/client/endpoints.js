import * as db from "../server/db";

export async function getApartmentList() {
  // await delay(1000);
  return Promise.resolve(db.getApartmentList());
}

export async function getApartmentById(id) {
  return Promise.resolve(db.getApartmentById(id));
}

function delay(duration) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, duration);
  });
}
