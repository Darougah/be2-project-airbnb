import { calculateDaysBetween } from '@/utils/calendar';

type BookingDetails = {
  checkIn: Date;
  checkOut: Date;
  price: number;
};
// Funktion för att beräkna totala kostnader för en bokning
export const calculateTotals = ({
  checkIn,
  checkOut,
  price,
}: BookingDetails) => {
  const totalNights = calculateDaysBetween({ checkIn, checkOut });
  const subTotal = totalNights * price;
  //fasta avgifter
  const cleaning = 21;
  const service = 40;
  // Monetary columns currently store whole currency units.
  const tax = Math.round(subTotal * 0.1);
  const orderTotal = subTotal + cleaning + service + tax;
  return { totalNights, subTotal, cleaning, service, tax, orderTotal };
};