import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import page from '../src/routes/+page.svelte';

describe('Page Test', () => {
  it('renders the page', () => {
    const { getByText } = render(page);
    expect(getByText('This is a starter kit for SvelteKit!')).toBeTruthy();
  });
});
