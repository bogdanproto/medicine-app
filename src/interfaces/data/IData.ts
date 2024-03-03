export interface IDrug {
  _id: string;
  title: string;
  price: number;
  imgCloud: string;
}

export interface IDrugByStore {
  drugs: IDrug[];
  id: string;
}

export interface IStore {
  _id: string;
  title: string;
  address: string;
  drugs: IDrug[] | [];
}

export interface ICartItem extends IDrug {
  quantity: number;
}

export interface ICartItemQnt {
  _id: string;
  quantity: number;
}

export interface IOrder {
  name: string;
  email: string;
  phone: string;
  address: string;
  totalPrice: number;
  products: ICartItem[];
}

export interface IOrderHistory extends IOrder {
  _id: string;
  createdAt: string;
}

export interface ISliceData {
  stores: IStore[];
  activeStore: string | null;

  favoriteDrugs: string[];
  cart: ICartItem[];
  history: IOrder[];

  successMsg: string | null;
  errorData: string | null;
  isLoading: boolean;
}
