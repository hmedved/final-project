import tableApartments from "./tableApartments";

export function getApartmentList() {
  return tableApartments;
}

export function getApartmentById(id) {
  return tableApartments.find(apartment => apartment.id === id);
}
