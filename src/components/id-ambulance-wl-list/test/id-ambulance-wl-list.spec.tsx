import { newSpecPage } from '@stencil/core/testing';
import { IdAmbulanceWlList } from '../id-ambulance-wl-list';

describe('id-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IdAmbulanceWlList],
      html: `<id-ambulance-wl-list></id-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <id-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </id-ambulance-wl-list>
    `);
  });
});
