import { newE2EPage } from '@stencil/core/testing';

describe('id-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<id-ambulance-wl-editor></id-ambulance-wl-editor>');

    const element = await page.find('id-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
