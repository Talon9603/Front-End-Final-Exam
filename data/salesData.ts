export type MonthlySales = {
  month: string;
  sales: number;
};

export const salesDataByYear: Record<string, MonthlySales[]> = {
  "2022": [
    { month: "Jan", sales: 1200 },
    { month: "Feb", sales: 1400 },
    { month: "Mar", sales: 1300 },
    { month: "Apr", sales: 1600 },
    { month: "May", sales: 1500 },
    { month: "Jun", sales: 1700 },
    { month: "Jul", sales: 1650 },
    { month: "Aug", sales: 1800 },
    { month: "Sep", sales: 1900 },
    { month: "Oct", sales: 1750 },
    { month: "Nov", sales: 2000 },
    { month: "Dec", sales: 2200 }
  ],
  "2023": [
    { month: "Jan", sales: 1500 },
    { month: "Feb", sales: 1550 },
    { month: "Mar", sales: 1600 },
    { month: "Apr", sales: 1700 },
    { month: "May", sales: 1650 },
    { month: "Jun", sales: 1800 },
    { month: "Jul", sales: 1900 },
    { month: "Aug", sales: 1950 },
    { month: "Sep", sales: 2000 },
    { month: "Oct", sales: 2100 },
    { month: "Nov", sales: 2150 },
    { month: "Dec", sales: 2300 }
  ],
  "2024": [
    { month: "Jan", sales: 1600 },
    { month: "Feb", sales: 1700 },
    { month: "Mar", sales: 1650 },
    { month: "Apr", sales: 1750 },
    { month: "May", sales: 1850 },
    { month: "Jun", sales: 1950 },
    { month: "Jul", sales: 2000 },
    { month: "Aug", sales: 2100 },
    { month: "Sep", sales: 2200 },
    { month: "Oct", sales: 2250 },
    { month: "Nov", sales: 2350 },
    { month: "Dec", sales: 2400 }
  ]
};