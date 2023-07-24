import {render} from "@testing-library/react";
import * as reduxHooks from 'react-redux';

import Posts from "./allPosts";
import {STATUSES} from "../../../constants/statuses";

jest.mock('react-redux');

describe('allPosts', () => {
  it('should render loading', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue({ posts: [] })
    const view = render(<Posts />);

    expect(view).toMatchSnapshot();
  })

  xit('should render empty list', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue({ posts: [], status: STATUSES.success })
    const view = render(<Posts />);

    expect(view).toMatchSnapshot();
  })
})
