import { newE2EPage } from '@stencil/core/testing';

describe('id-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<id-ambulance-wl-list></id-ambulance-wl-list>');

    const element = await page.find('id-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
