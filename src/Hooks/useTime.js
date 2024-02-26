export default function useTime(publishDate) {
    const publishedTime = new Date(publishDate);

    // Get the current time
    const currentTime = new Date();
  
    // Calculate the time difference in milliseconds
    const timeDifference = currentTime - publishedTime;
  
    // Calculate the elapsed time in seconds, minutes, hours, days, etc.
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
  
    // Choose the appropriate unit based on the elapsed time
    if (years > 0) {
      return `${publishedTime.getDate()}/${publishedTime.getMonth() + 1}/${publishedTime.getFullYear()}`;
    } else if (months > 0) {
      return `من ${months} ${months > 1 ? 'شهور' : 'شهر'}`;
    } else if (days > 0) {
      return `من ${days} ${days > 1 ? 'ايام' : 'يوم'}`;
    } else if (hours > 0) {
      return `من ${hours} ${hours > 1 ? 'ساعات' : 'ساعه'}`;
    } else if (minutes > 0) {
      return `من ${minutes} ${minutes > 1 ? 'دقائق' : 'دقيقه'}`;
    } else {
      return `من ${seconds} ${seconds !== 1 ? 'ثواني' : 'ثانية'}`;
    }
}
