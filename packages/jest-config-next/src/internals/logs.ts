import boxen, { type Options as BoxenOptions } from 'boxen';

const baseOptions: BoxenOptions = {
  title: '@side/jest-config-next',
  titleAlignment: 'center',
  padding: 1,
  textAlignment: 'center',
};

export function showWarning(message: string) {
  console.log(
    boxen(message, {
      ...baseOptions,
      borderColor: 'yellowBright',
    }),
  );
}

export function showError(message: string) {
  console.log(
    boxen(message, {
      ...baseOptions,
      borderColor: 'redBright',
    }),
  );
}
