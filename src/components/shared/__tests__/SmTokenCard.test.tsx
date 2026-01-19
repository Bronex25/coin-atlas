import { render, screen } from '@testing-library/react';
import { SmTokenCard } from '../SmTokenCard';

describe('SmTokenCard', () => {
  it('renders token data', () => {
    render(
      <SmTokenCard
        id="btc"
        name="Bitcoin"
        image="btc.png"
        current_price={42000}
        price_change_percentage_24h={2.5}
      />,
    );

    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('$42,000')).toBeInTheDocument();
    expect(screen.getByText('2.5%')).toBeInTheDocument();
  });
});
