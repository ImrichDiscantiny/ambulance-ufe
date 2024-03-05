import { newSpecPage } from '@stencil/core/testing';
import { IdAmbulanceWlApp } from '../id-ambulance-wl-app';

describe('id-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [IdAmbulanceWlApp],
      html: `<id-ambulance-wl-app base-path="/"></id-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("id-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [IdAmbulanceWlApp],
      html: `<id-ambulance-wl-app base-path="/ambulance-wl/"></id-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("id-ambulance-wl-list");
  });
});