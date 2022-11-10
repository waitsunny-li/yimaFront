
export class Time {
  private static timeFormatRegex = /yyyy|yy|MM|M|dd|d|HH|H|mm|m|ss|s|SSS|S/g;

  public static sleep(time: number): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), time)
    })
  }
  /***
   *  @param time 
   *  @param day
   *  @example disabledDate(Date.now(), 7) 只要包含当前日期以及后七天的日期，返回true
   * */
  public static disabledDate(time: Date, day: number): boolean {
    return time.getTime() < Date.now() || (time.getTime() - 3600 * 1000 * 24 * day) > Date.now()
  }

  /**
   * 
   * @param day 
   * @param format 
   * @returns 根据format参数以及要获取的第几天时间进行格式化
   */
  public static getAfterBeforeDay(day: number, format: string): string {
    let date = new Date(Date.now() + 3600 * 1000 * 24 * day)
    return this.toString(date, format)
  }

  /**
     * Converts the value of the current date to its equivalent string representation
     * using the specified format.
     * @param date
     * @param format
     * "yyyy" Year represented by four digits.
     * "yy" Year as last two digits; leading zero for years less than 10.
     * "MM" Month as digits; leading zero for single-digit months.
     * "M" Month as digits; no leading zero for single-digit months.
     * "dd" Day of the month as digits; leading zero for single-digit days.
     * "d" Day of the month as digits; no leading zero for single-digit days.
     * "HH" Hours; leading zero for single-digit hours (24-hour clock).
     * "H" Hours; no leading zero for single-digit hours (24-hour clock).
     * "mm" Minutes; leading zero for single-digit minutes.
     * "m" Minutes; no leading zero for single-digit minutes.
     * "ss" Seconds; leading zero for single-digit seconds.
     * "s" Seconds; no leading zero for single-digit seconds.
     * "SSS" Milliseconds; leading zero for single-digit seconds.
     * "S" Milliseconds; no leading zero for single-digit seconds.
     */
  public static toString(date: Date, format: string): string {
    return format.replace(this.timeFormatRegex, (matched) => this.getTimeFormat(false, date, matched));
  }

  // tslint:disable-next-line: cognitive-complexity
  private static getTimeFormat(isUTC: boolean, date: Date, formatKey: string): string {
    switch (formatKey) {
      case 'yyyy':
        return (isUTC ? date.getUTCFullYear() : date.getFullYear()).toString();
      case 'yy':
        return (isUTC ? date.getUTCFullYear() : date.getFullYear()).toString().substring(2);
      case 'MM':
        const month = isUTC ? date.getUTCMonth() + 1 : date.getMonth() + 1;
        return month >= 10 ? month.toString() : `0${month}`;
      case 'M':
        return (isUTC ? date.getUTCMonth() + 1 : date.getMonth() + 1).toString();
      case 'dd':
        const day = isUTC ? date.getUTCDate() : date.getDate();
        return day >= 10 ? day.toString() : `0${day}`;
      case 'd':
        return (isUTC ? date.getUTCDate() : date.getDate()).toString();
      case 'HH':
        const hour = isUTC ? date.getUTCHours() : date.getHours();
        return hour >= 10 ? hour.toString() : `0${hour}`;
      case 'H':
        return (isUTC ? date.getUTCHours() : date.getHours()).toString();
      case 'mm':
        const min = isUTC ? date.getUTCMinutes() : date.getMinutes();
        return min >= 10 ? min.toString() : `0${min}`;
      case 'm':
        return (isUTC ? date.getUTCMinutes() : date.getMinutes()).toString();
      case 'ss':
        const seconds = isUTC ? date.getUTCSeconds() : date.getSeconds();
        return seconds >= 10 ? seconds.toString() : `0${seconds}`;
      case 's':
        return (isUTC ? date.getUTCSeconds() : date.getSeconds()).toString();
      case 'SSS':
        const milliseconds = isUTC ? date.getUTCMilliseconds() : date.getMilliseconds();
        return milliseconds >= 100
          ? milliseconds.toString()
          : milliseconds >= 10
            ? `0${milliseconds}`
            : `00${milliseconds}`;
      case 'S':
        return (isUTC ? date.getUTCMilliseconds() : date.getMilliseconds()).toString();
      default:
        return '';
    }
  }
}