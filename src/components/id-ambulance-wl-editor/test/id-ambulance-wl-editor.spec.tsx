import { newSpecPage } from '@stencil/core/testing';
import { IdAmbulanceWlEditor } from '../id-ambulance-wl-editor';

describe('id-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [IdAmbulanceWlEditor],
      html: `<id-ambulance-wl-editor entry-id="@new"></id-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});