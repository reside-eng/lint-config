import * as path from 'node:path';
import * as fs from 'node:fs';
import chalk from 'chalk';
import { showError } from './logs.js';

/**
 * Warn if babel-jest is installed, since this package is
 * using the Next.js compiler instead
 */
export function detectBabelJest() {
  // Detect package.json
  const pkgPath = path.resolve(process.cwd(), 'package.json');
  if (!fs.existsSync(pkgPath)) return;

  // Import package.json
  const pkgFile = fs.readFileSync(pkgPath, { encoding: 'utf-8' });
  if (!pkgFile) return;

  // Look for babel-jest
  const pkg = JSON.parse(pkgFile) as {
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
  };
  if (
    pkg?.dependencies?.['babel-jest'] ??
    pkg?.devDependencies?.['babel-jest']
  ) {
    showError(
      `${chalk.bold(
        'Please uninstall babel-jest.',
      )}\n\nThe Next.js compiler is being used instead.`,
    );
  }
}
