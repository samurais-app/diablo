import SVGsprite from 'svg-sprite';
import path from 'path';
import fs from 'fs';

const spr = new SVGsprite({
  dest: path.join(__dirname, '..'),
  mode: {
    symbol: {
      svg: {
        rootAttributes: {
          style: 'position: absolute;width: 0px;height: 0px;overflow: hidden;',
        }
      }
    },
  },
  shape: {
    id: {
      separator: '--',
      generator: (file: string) => {
        const name = file.replace(path.extname(file), '');
        return `icon-${name}`;
      },
      pseudo: '~'
    },
    dimension: {
      maxWidth: 2000,
      maxHeight: 2000,
      precision: 2,
      attributes: false,
    },
    spacing: {
      padding: 0,
      box: 'content'
    },
    transform: [{
      svgo: {
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: '(fill|height|width)',
            },
          }
        ]
      }
    }],
    meta: null,
    align: null,
    dest: null
  },
  svg: {
    xmlDeclaration: false,
    doctypeDeclaration: false,
    namespaceIDs: true,
    namespaceIDPrefix: 'icons-',
    namespaceClassnames: true,
    dimensionAttributes: true
  },
  variables: {}
})

function renderFiles(dir: string) {
  return fs.readdirSync(dir).map((item) => ({
    name: item.replace(path.extname(item), ''),
    target: path.join('/assets', item),
    source: path.join(dir, item)
  })).map((item) => {
    spr.add(item.target, null, fs.readFileSync(item.source, 'utf-8'));
    return item;
  });
}

function foreach(data: object, callbak: (key, res: any) => void) {
  for (const mode in data) {
    for (const resource in data[mode]) {
      callbak(resource, data[mode][resource])
    }
  }
}

function compile() {
  return new Promise<string>((resove) => {
    spr.compile((error, result) => {
      if (result) {
        return foreach(result, (key, res) => {
          if (key === 'sprite') {
            resove(res.contents.toString());
          }
        });
      } else {
        resove('');
      }
    });
  });
}

function createType(keys: string[]) {
  return `export type IconType = ${keys.reduce((a, b, index) => {
    return `${a}'${b}' ${index === keys.length - 1 ? ';\n' : '|'} `
  }, '')}`
}

function createCode(code: string) {
  return `export const code = '${code}';`;
}

async function main() {
  const sourceDir = path.join(__dirname, '../assets');
  const keys = renderFiles(sourceDir).map((item) => `icon-${item.name}`);
  const data = await compile();
  const type = createType(keys);
  const code = createCode(data);
  fs.writeFileSync(path.join(__dirname, '../src/code.ts'), `${type}${code}`);
}

main()
