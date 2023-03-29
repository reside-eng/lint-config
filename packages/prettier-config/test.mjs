import * as assert from 'node:assert';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const file = await fs.readFile(path.resolve(__dirname, 'index.json'), 'utf-8');

assert.doesNotThrow(() => JSON.parse(file));
