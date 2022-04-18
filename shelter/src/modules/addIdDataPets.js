import dataPets from "./db";
const addIdDataPets = () => dataPets.forEach((pet, ind) => pet.id = ind)
export default addIdDataPets