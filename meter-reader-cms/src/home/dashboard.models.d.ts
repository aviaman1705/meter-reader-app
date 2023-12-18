export interface dashboardDTO {
    dashboardSummary: dashboardSummaryDTO;
    monthlyData: monthlyDataDTO[];
}
export interface dashboardSummaryDTO {
    monthlyCalled: number;
    called: number;
    unCalled: number;
    monthlyUnCalled: number;
    monthlyUncalledPercentage: number;
    totalUncalledPercentage: number;
}

export interface monthlyDataDTO {
    date: date;
    called: number;
    unCalled: number;
}
