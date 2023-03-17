import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../src/components/Input';


describe('Input Snapshot', () => {
  test('Text', () => {
    const { asFragment } = render(<Input />);
    const html = asFragment();
    expect(html).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-bALXmG dJsuec"
        >
          <input
            class="sc-ivnCJf FFpuu"
          />
        </div>
      </DocumentFragment>
    `);
  });

  test('Number', () => {
    const { asFragment } = render(<Input type='number' />);
    const html = asFragment();
    expect(html).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-bALXmG dJsuec"
        >
          <input
            class="sc-ivnCJf FFpuu"
            type="number"
          />
        </div>
      </DocumentFragment>
    `);
  });

});