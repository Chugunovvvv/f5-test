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
