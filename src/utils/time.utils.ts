
export class Time {
  public static sleep(time: number): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), time)
    })
  }
}