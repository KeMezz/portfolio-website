import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { RecoilRoot } from 'recoil';
import ReactGA from 'react-ga4';
import App from './App';
import { portfolioData } from './portfolio';

// Analytics is mocked (no gtag script is injected, no network); everything else
// in the app - router, recoil, framer-motion, styled-components - is real.
jest.mock('react-ga4', () => ({ __esModule: true, default: { event: jest.fn(), initialize: jest.fn(), send: jest.fn() } }));

const renderApp = (path = '/') => {
  window.history.pushState({}, '', path);
  return render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};

const published = portfolioData.find((p) => p.isPublished) as (typeof portfolioData)[number];

beforeEach(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => undefined);
  window.open = jest.fn();
  (ReactGA.event as jest.Mock).mockClear();
});

test('home renders the navigation rows and records the page view', () => {
  renderApp();
  expect(screen.getByText('hyeongjin', { selector: 'span.point' })).toBeInTheDocument();
  expect(screen.getAllByRole('heading', { level: 1 }).length).toBeGreaterThanOrEqual(3);
  expect(ReactGA.initialize).toHaveBeenCalledWith('G-BY9H6FSQK9');
  expect(ReactGA.send).toHaveBeenCalledWith({ hitType: 'pageview', page: '/' });
});

test('projects page lists every project and opens the detail view with working links', () => {
  renderApp('/projects');
  const items = screen.getAllByRole('img').filter((img) => portfolioData.some((p) => p.name === img.getAttribute('alt')));
  expect(items).toHaveLength(portfolioData.length);
  userEvent.click(screen.getByAltText(published.name));
  expect(window.location.pathname).toBe(`/projects/${published.id}`);
  expect(screen.getByText(published.category, { selector: 'h5' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: published.name, level: 3 })).toBeInTheDocument();
  userEvent.click(screen.getByText('Github'));
  expect(window.open).toHaveBeenCalledWith(published.github);
  userEvent.click(screen.getByText('Visit Website'));
  expect(window.open).toHaveBeenCalledWith(published.website);
  expect(ReactGA.event).toHaveBeenCalledWith(expect.objectContaining({ category: 'Click Project' }));
});

test('unknown routes render the 404 page with a link back home', () => {
  renderApp('/does-not-exist');
  expect(screen.getByRole('heading', { name: '404 Not Found' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
});
