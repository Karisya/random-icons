import { render, screen } from '@testing-library/react';
import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import RandomIcons from './RandomIcons';

jest.useFakeTimers();

describe('RandomIconComponent', () => {
    test('renders button to show random icon', () => {
        const { getByText } = render(<RandomIcons />);
        const buttonElement = screen.getByText('Показать случайную иконку');
        expect(buttonElement).toBeInTheDocument();
    });

    test('displays a random icon after button click', async () => {
        const { getByText } = render(<RandomIcons />);
        const buttonElement = screen.getByText('Показать случайную иконку');
        fireEvent.click(buttonElement);

        jest.advanceTimersByTime(3000);

        await waitFor(() => {
            const iconElement = screen.getByTestId('random-icon');
            expect(iconElement).toBeInTheDocument();
        });
    });
});

