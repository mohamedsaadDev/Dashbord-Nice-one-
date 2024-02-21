export interface OrderType {
    id: string;
    _id: string;
    img:string;
    price:number,
    quantity:number,
}
export interface parentOrderType {
    _id: string;
    items:[OrderType];
}
export interface UserType {
    firstName: string;
    LastName: string;
    email: number;
    registrationTime: string;
}
export interface DataCollection {
    rating: number;
    discount: number;
    price: number;
    quantity: number;
    oldprice: number;
    type: string;
    title: string;
    brandname: string;
    taxStatus: string;
    returnPolicy: string;
    popularity: string;
    new: string;
    brandstatus: string;
    title_ar: string;
    brandname_ar: string;
    taxStatus_ar: string;
    returnPolicy_ar: string;
    popularity_ar: string;
    new_ar: string;
    brandstatus_ar: string;
    }