import { readdir, mkdir, rm, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { cwd } from 'process';
import Bluebird from 'bluebird';
import builder from './scripts/builder';

const main = async () => {
  try {
    const path = `${cwd()}/src/Projects/GoRentals`;
    const write_path = `${cwd()}/src/build`;

    if (existsSync(write_path)) {
      await rm(write_path, {
        recursive: true,
        force: true,
      });
    }

    await mkdir(write_path);

    const file_paths = (await readdir(path)).map((file_name) =>
      join(path, file_name)
    );

    const build_types_file_names = await Bluebird.map(
      file_paths,
      async (path) => {
        const { default: config } = await import(path);
        const file_name = await builder(write_path, config);
        return file_name;
      }
    );

    const export_files_template = build_types_file_names
      .map((file_name) => `export * from './${file_name}'`)
      .join('\n');

    await writeFile(`${write_path}/index.ts`, export_files_template);
  } catch (e) {
    console.error(e);
  }
};

main();
