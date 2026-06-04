import { formatCurrency } from "../../utils/helpers";
import Stat from "../dashboard/Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineHome,
} from "react-icons/hi2";

function Stats({ bookings, confirmedStays, cabinCount, numDays }) {
  //1.
  const numBookings = bookings.length;

  //2.
  const sales = bookings.reduce(
    (total, booking) => total + booking.totalPrice,
    0,
  );

  //3.
  const checkins = confirmedStays.length;

  //4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (cabinCount * numDays);
  return (
    <>
      <Stat
        title="Bookings"
        value={numBookings}
        color="blue"
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="Sales"
        value={formatCurrency(sales)}
        color="green"
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="Check ins"
        value={checkins}
        color="indigo"
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title="Occupancy Rate"
        value={Math.round(occupation * 100) + "%"}
        color="yellow"
        icon={<HiOutlineHome />}
      />
    </>
  );
}

export default Stats;
