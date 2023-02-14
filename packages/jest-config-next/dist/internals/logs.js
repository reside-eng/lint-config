import boxen from 'boxen';
const baseOptions = {
  title: '@side/jest-config-next',
  titleAlignment: 'center',
  padding: 1,
  textAlignment: 'center',
};
export function showWarning(message) {
  console.log(
    boxen(message, {
      ...baseOptions,
      borderColor: 'yellowBright',
    }),
  );
}
export function showError(message) {
  console.log(
    boxen(message, {
      ...baseOptions,
      borderColor: 'redBright',
    }),
  );
}
