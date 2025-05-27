import type { Provider } from '$lib';
import fs from 'fs/promises';
import path from 'path';
import YAML from 'yaml';

export async function load() {
  const dataDir = path.resolve('data');
  const files = await fs.readdir(dataDir);
  const yamlFiles = files.filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));

  const providers: Provider[] = [];

  for (const fileName of yamlFiles) {
    const filePath = path.join(dataDir, fileName);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const parsed = YAML.parse(fileContent) as Provider;
    providers.push(parsed);
  }

  return { providers };
}
