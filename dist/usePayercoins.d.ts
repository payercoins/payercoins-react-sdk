import { PaymentProps } from './@types/index';
export default function usePayercoinsPayment(options: PaymentProps): (boolean | (() => void))[];
