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

    const file_paths = (await readdir(path)).map((filename) =>
      join(path, filename)
    );

    const build_types_filenames = await Bluebird.map(
      file_paths,
      async (path) => {
        const { default: config } = await import(path);
        const build_artifacts = await builder(write_path, config);
        return build_artifacts;
      }
    );

    const export_files_template = build_types_filenames
      .map(
        ({ filename, interface_name }) =>
          `export { default as ${interface_name} } from './${filename}'`
      )
      .join('\n');

    await writeFile(`${write_path}/index.ts`, export_files_template);
  } catch (e) {
    console.error(e);
  }
};

main();
