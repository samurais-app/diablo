import * as typedoc from 'typedoc'
import path from 'path';
import fs from 'fs';
import { ProjectReflection } from 'typedoc';

const UI_INTERFACE_PATH = './packages/ui/src/interfaces';
const app = new typedoc.Application();
app.options.addReader(new typedoc.TSConfigReader());
function runApiDoc(out: string, file: string) {

}

function createComponentApiDoc(file: string) {
  const out = path.join(process.cwd(), 'docs');
  runApiDoc(out, file)
}

function createComponentDoc(packagePath?: string) {
  const paths = path.join(process.cwd(), UI_INTERFACE_PATH);
  const files = fs.readdirSync(paths);
  const type_files = files.map((file) => path.join(paths, file));
  app.bootstrap({
    entryPoints: type_files,
    plugin: ['typedoc-plugin-markdown'],
  })
  const proje = app.convert() as ProjectReflection;

}

createComponentDoc();