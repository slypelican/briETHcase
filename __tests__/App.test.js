import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import WatchBoard from './App';
import BoardGroup from './App';
import Card from './App';

// filepath: /c:/Users/name/Documents/Development/briethcase/__tests__/App.test.js

test('renders App component', () => {
    render(<App />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
});

test('renders WatchBoard component with correct number of BoardGroup components', () => {
    render(<WatchBoard groups={GROUP_DATA} />);
    const groupElements = screen.getAllByRole('row');
    expect(groupElements.length).toBe(GROUP_DATA.length);
});

test('renders BoardGroup component with correct number of Card components', () => {
    GROUP_DATA.forEach(group => {
        render(<BoardGroup group={group} />);
        const cardElements = screen.getAllByRole('cell');
        expect(cardElements.length).toBe(group.cards.length * 3); // 3 cells per card
    });
});

test('renders Card component with correct address and status', () => {
    AD_DATA.forEach(card => {
        render(<Card address={card.address} new_in={card.new_in} new_out={card.new_out} />);
        const addressElement = screen.getByText(card.address);
        const newInElement = screen.getByText(card.new_in ? "✔️" : "❌");
        const newOutElement = screen.getByText(card.new_out ? "✔️" : "❌");
        expect(addressElement).toBeInTheDocument();
        expect(newInElement).toBeInTheDocument();
        expect(newOutElement).toBeInTheDocument();
    });
});