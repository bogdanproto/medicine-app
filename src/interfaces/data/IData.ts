export interface IDrug {
  _id: string;
  title: string;
  price: number;
  imgCloud: string;
}

export interface IStore {
  _id: string;
  title: string;
  address: string;
  drugs: IDrug[];
}

export interface ICartItem {
  item: IDrug;
  quantity: number;
}

export interface IOrderItem {
  _id: string;
  title: string;
  priceItem: number;
  quantity: number;
}

export interface IOrder {
  _id: string;
  store: IStore;
  name: string;
  email: string;
  phone: string;
  address: string;
  totalPrice: number;
  products: IOrderItem[];
}

export interface ISliceData {
  stores: IStore[];
  favoriteDrugs: string[];
  cart: ICartItem[];
  history: IOrder[];

  errorData: string | null;
  isLoading: boolean;
}
