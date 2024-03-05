import { newE2EPage } from '@stencil/core/testing';

describe('id-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<id-ambulance-wl-app></id-ambulance-wl-app>');

    const element = await page.find('id-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
