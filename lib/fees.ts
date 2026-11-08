export type FeeItem = {
  id: string;
  label: string;
  unit: string;
  /** GBP per unit per month. */
  rate: number;
  /** Hourly items need the "separate work" confirmation before a quote request. */
  hourly?: boolean;
  initial: number;
};

// Only the first two rates can be read from the Figma frame (1 assignment = £60.00,
// 1 hour = £13.00). The other rates are placeholders until the firm confirms its tariff.
export const feeItems: FeeItem[] = [
  { id: "year-end", label: "Year-end assignments", unit: "completed jobs / month", rate: 60, initial: 1 },
  { id: "year-end-hours", label: "Year-end hourly support", unit: "hours / month", rate: 13, hourly: true, initial: 1 },
  { id: "ct-hours", label: "CT / small-business SATR hourly support", unit: "hours / month", rate: 13, hourly: true, initial: 0 },
  { id: "bookkeeping", label: "Bookkeeping including VAT workings", unit: "hours / month", rate: 13, hourly: true, initial: 0 },
  { id: "satr", label: "Basic SATRs", unit: "returns", rate: 25, initial: 0 },
  { id: "satr-items", label: "Additional agreed SATR income items", unit: "items across the basic SATRs above", rate: 5, initial: 0 },
  { id: "p11d", label: "P11Ds", unit: "forms", rate: 10, initial: 0 },
  { id: "payroll", label: "Payroll", unit: "payslips / month", rate: 3, initial: 0 },
];

export const formatGBP = (value: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(value);
