const firstOb = {
    name: 'Laptop',
    price: 12000,
    discount: 3.5,
    isActive: true,
    present: {
        name: 'Mouse',
        size: '100*50',
        weight: 100,
    }
}
   
console.log(firstOb.present['size']);
firstOb.price=12800;
console.log(firstOb['price']);
delete firstOb.discount;
console.log(firstOb);
