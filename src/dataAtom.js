import { atom } from "recoil";
export const dataAtomState = atom({
    key: 'dataState',
    default: { date: "Jan 1 - Nov 26", product: "Product 1", region: "North America" },
});



export const ListAtomState = atom({
    key: 'listState',
    default: [
        { product: "Pepsi", sales: 1200, revenue: 15000, units: 300, region:"Delhi" ,date: "Jan 1 - Aug 26"},
        { product: "Coke", sales: 800, revenue: 8000, units: 150 , region:"Delhi" , date: "Jan 1 - Aug 26"},
        { product: "Pepsi", sales: 1000, revenue: 12000, units: 170, region:"Mumbai",date: "Aug 26 - Nov 26" },
        { product: "Coke", sales: 600, revenue: 10000, units: 110 , region:"Mumbai",date: "Aug 26 - Nov 26" },
      ],
});