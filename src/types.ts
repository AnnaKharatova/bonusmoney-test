export interface IRoot {
  company: ICompany;
  customerMarkParameters: ICustomerMarkParameters;
  mobileAppDashboard: IMobileAppDashboard;
}

export interface IMobileAppDashboard {
  companyName: string;
  logo: string;
  backgroundColor: string;
  mainColor: string;
  cardBackgroundColor: string;
  textColor: string;
  highlightTextColor: string;
  accentColor: string;
}

export interface ICustomerMarkParameters {
  loyaltyLevel: ILoyaltyLevel;
  mark: number;
}

export interface ILoyaltyLevel {
  number: number;
  name: string;
  requiredSum: number;
  markToCash: number;
  cashToMark: number;
}

export interface ICompany {
  companyId: string;
}