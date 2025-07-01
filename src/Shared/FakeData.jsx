import { faker } from "@faker-js/faker";

function createRandomCarList(){
    return {
        name: faker.vehicle.vehicle(),
        fuelType: faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        price:faker.finance.amount({min:2000,max:4000}),
        miles:1000,
        gearType:'Automatic',
        image:'https://imgs.search.brave.com/UZeZn9kI5AJnzgH2owhax2wEZTxp4prsnC7vVDxx6is/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzAzLzA0Lzg5/LzM2MF9GXzEwMDMw/NDg5MTdfOW9Zc3FB/cmNYZDFFNk9FWlU1/dDVqS0dxcWNIT3pO/WE4uanBn',

    };
}
const CarList = faker.helpers.multiple(createRandomCarList,{
    count:7,
})
export default{
    CarList
}