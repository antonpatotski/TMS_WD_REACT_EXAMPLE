import {fireEvent, render, screen} from "@testing-library/react";
import * as reduxHooks from 'react-redux';
import * as actions from '../../../store/posts'

import MenuSearch from "./menuSearch";

jest.mock('react-redux');

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
describe('menuSearch', () => {
  it('should render search component', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue({})
    mockedDispatch.mockReturnValue(jest.fn())
    const view = render(<MenuSearch />);

    expect(view).toMatchSnapshot();
  })

  it('should call search', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue({});
    const mockedSetSearch = jest.spyOn(actions, 'setSearch');
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch)
    render(<MenuSearch />);


    fireEvent.click(screen.getByRole('button'));
    const input = screen.getByRole('search');

    fireEvent.change(input, { target: { value: 'cat' } })

    // expect(input.value).toBe('cat');
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedSetSearch).toHaveBeenCalledWith('cat');
  })
})
