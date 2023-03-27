export const representWearByTerm = (wear) => {
  const wearTerms = ["None", "Low", "Moderate", "High", "Very High"];

  if (wear >= 0 && wear < 40) {
    return wearTerms[0];
  } 
  if (wear >= 40 && wear < 200) {
    return wearTerms[1];
  } 
  if (wear >= 200 && wear < 400) {
    return wearTerms[2];
  } 
  if (wear >= 400 && wear < 700) {
    return wearTerms[3];
  } 
  if (wear >= 700) {
    return wearTerms[4];
  }
};
