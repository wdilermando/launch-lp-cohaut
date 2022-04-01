export const extractInfoDate = (date) => {
  const dateToParsed = new Date(date)

  return {
    day: dateToParsed.getUTCDate().toString().padStart(2, '0'),
    monthName: dateToParsed.toLocaleString('pt-BR', { month: 'long' }),
    hourAndMinute: `${dateToParsed.getHours()}h${dateToParsed
      .getMinutes()
      .toString()
      .padStart(2, '0')}`,
  }
}
