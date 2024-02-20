import { newSpecPage } from '@stencil/core/testing';
import { IdAmbulanceWlList } from '../id-ambulance-wl-list';

describe('id-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IdAmbulanceWlList],
      html: `<id-ambulance-wl-list></id-ambulance-wl-list>`,
    });

  const wlList = page.rootInstance as IdAmbulanceWlList;
  const expectedPatients = wlList?.waitingPatients?.length

  const items = page.root.shadowRoot.querySelectorAll("md-list-item");
  expect(items.length).toEqual(expectedPatients);
  });

  

});
