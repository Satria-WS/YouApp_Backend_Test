export const validationEmail = (text:any) => {
  // let pattern = /^[a-z0-9]+@[a-z]+\.[com]+$/;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(text);
}