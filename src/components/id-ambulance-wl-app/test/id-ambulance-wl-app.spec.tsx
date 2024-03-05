import { newSpecPage } from '@stencil/core/testing';
import { IdAmbulanceWlApp } from '../id-ambulance-wl-app';

describe('id-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IdAmbulanceWlApp],
      html: `<id-ambulance-wl-app></id-ambulance-wl-app>`,
    });
    expect(page.root).toEqualHtml(`
      <id-ambulance-wl-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </id-ambulance-wl-app>
    `);
  });
});
