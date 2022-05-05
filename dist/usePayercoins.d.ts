import { PaymentProps } from './@types/index';
export default function usePayercoinsPayment(): (boolean | ((options: PaymentProps) => void))[];
