import { JobStateEnum } from "../helpers/getJobStatus";

export interface IProcess {
  name: string;
}

export interface IProduct {
  id: number;
  name: string;
  minLimit: number;
  process: IProcess;
  createdAt: string;
  [key: string]: any;
}

export interface IProductsData {
  products: IProduct[];
}

export interface IProductVars {
  withArchived: boolean;
}

export interface ILoginResponse {
  accessToken: string;
}

export interface ILoginMutationData {
  login: ILoginResponse;
}

export interface ILoginMutationVars {
  email: string;
  password: string;
}

type Job = {
  name: string;
  state: JobStateEnum;
  area: {
    name: string;
    costPerHour: number;
  };
};
type Ingredients = {
  quantity: number;
  notes: string;
  sourseProduct: {
    name: string;
    actualPrice: number;
  };
};
type ConsumerReservations = {
  targetSalesOrderLine: {
    salesOrder: {
      name: string;
    };
  };
};
interface orderLine {
  name: string;
  status: string;
  description: string;
  product: IProduct;
  finishByDate: Date;
  jobs: Job;
  ingredients: Ingredients;
  consumerReservations: ConsumerReservations;
  graph: string;
}

interface OrderData {
  orderLine: orderLine;
}

export interface OrderLineResponse {
  data: OrderData;
}

export interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
