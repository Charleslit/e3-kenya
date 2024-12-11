import { 
  CreateOrderActions, 
  OnApproveActions, 
  OnApproveData 
} from "@paypal/paypal-js"

declare module "@paypal/react-paypal-js" {
  export interface PayPalButtonsComponentProps {
    amount?: number;
    onSuccess?: (details: any) => void;
    fundingSource?: string;
    createOrder?: (data: unknown, actions: CreateOrderActions) => Promise<string>;
    onApprove?: (data: OnApproveData, actions: OnApproveActions) => Promise<void>;
    style?: {
      layout?: "vertical" | "horizontal";
      color?: "gold" | "blue" | "silver" | "white" | "black";
      shape?: "rect" | "pill";
      height?: number;
      label?: "paypal" | "checkout" | "buynow" | "pay";
    };
  }

  export const PayPalButtons: React.FC<PayPalButtonsComponentProps>;
  export const PayPalScriptProvider: React.FC<{
    options: {
      clientId: string;
      currency?: string;
      intent?: string;
    };
    children: React.ReactNode;
  }>;
} 