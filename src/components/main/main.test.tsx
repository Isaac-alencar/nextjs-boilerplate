import { render } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  it('should be render a heading', () => {
    const { getByRole } = render(<Main />);

    const heading = getByRole('heading', { name: /Hello World/i });

    expect(heading).toBeInTheDocument();
  });
});
