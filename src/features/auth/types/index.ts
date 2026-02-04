export interface LoginProps {
  email: string;
  password: string;
}

export interface SignUpProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  country?: string;
  companyName?: string;
  role?: string;
  status?: string;
  emailVerified?: boolean;
  isCompanyVerified?: boolean;
}

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface VerifyCompanyDataType {
  adminName: string;
  companyName: string;
  businessRegistrationNumber: string;
  phoneNumber: string;
  companyAddress: string;
  companyEmail: string;
  validId: File;
  cacDocument: File;
  utilityDocument: File;
}

export interface ProductData {
  name: string;
  price: string;
  quantity: string;
  minOrder: string;
  description: string;
  minLeadTime: string;
  maxLeadTime: string;
  categoryId: string;
  countryId: string;
  minOrderUnitId: string;
  quantityUnitId: string;
  minLeadTimePeriodId: string;
  maxLeadTimePeriodId: string;
  images: File[];
  productId?: string;
  currencyId: string;
}
