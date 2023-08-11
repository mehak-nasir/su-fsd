const getNaturalSort = (a: string, b: string) => {
  const collator = new Intl.Collator(undefined, {
    numeric: true,
  });
  return collator.compare(a, b);
};

export default getNaturalSort;
