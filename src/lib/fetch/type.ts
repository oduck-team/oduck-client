export interface ApiResponse {
  success: boolean;
  status: number;
  result: {
    timestamp: string;
    errMsg: string;
  };
}
