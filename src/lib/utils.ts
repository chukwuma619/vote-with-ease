export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export function generateRandomString() {
  // Generate 3 random letters
  const letters = Array.from({ length: 3 }, () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  );

  // Generate 3 random numbers
  const numbers = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 10)
  );

  // Combine the letters and numbers and shuffle them
  const combined = [...letters, ...numbers];
  for (let i = combined.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combined[i], combined[j]] = [combined[j], combined[i]];
  }

  // Convert the array to a string
  const result = combined.join("");

  return result;
}

export const formatDateToLocal = (
  dateStr: string,
  locale: string = "en-US"
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export function convertDateFormat(inputDate:string) {
  const inputDateObj = new Date(inputDate);
  
  // Check if the inputDate is a valid date
  if (isNaN(inputDateObj.getTime())) {
      return 'Invalid date';
  }

  // Extract date and time components
  const year = inputDateObj.getFullYear();
  const month = String(inputDateObj.getMonth() + 1).padStart(2, '0');
  const day = String(inputDateObj.getDate()).padStart(2, '0');
  const hours = String(inputDateObj.getHours()).padStart(2, '0');
  const minutes = String(inputDateObj.getMinutes()).padStart(2, '0');

  // Construct the new date string
  const newDateString = `${year}-${month}-${day}T${hours}:${minutes}`;

  return newDateString;
}
