import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ArrowButton from '../components/ArrowButton';
import ThemeContextProvider from '../contexts/ThemeContextProvider';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('should render an arrow button.', () => {
    act(() => {
        render(
            <ThemeContextProvider>
                <ArrowButton />
            </ThemeContextProvider>,
            container
        );
    });
    expect(container).toBeDefined();
});
