const setIcons = (category) => {
  if (category === 'Shot') return 'Other/Unknown';
  if (category === 'Punch / Party Drink') return 'Shake';
  if (category === 'Coffee / Tea') return 'Cocoa';
  return category;
};

export default setIcons;
