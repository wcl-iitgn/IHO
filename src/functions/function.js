export const getLastMonthName = (offset) => {
    // Create a new date object for the current date
    const currentDate = new Date();
    
    // Calculate the month we want based on the offset
    const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
    
    // Get the name of the month
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    
    return monthNames[targetDate.getMonth()];
  };


  export const getYearWithOffset = (offset) => {
    // Create a new date object for the current date
    const currentDate = new Date();
    
    // Calculate the year with the offset
    const targetYear = currentDate.getFullYear() + offset;
    
    return targetYear;
  };