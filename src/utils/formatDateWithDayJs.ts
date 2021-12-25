import dayjs from "dayjs";

export const formatDateWithDayJs = (date: Date | string) => dayjs(date).toISOString();
