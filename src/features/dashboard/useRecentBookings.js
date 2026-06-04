import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { useMemo } from "react";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = useMemo(() => {
    const date = subDays(new Date(), numDays);
    date.setHours(0, 0, 0, 0);
    return date.toISOString();
  }, [numDays]);

  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", queryDate],
  });

  return { bookings, isLoading, numDays };
}
