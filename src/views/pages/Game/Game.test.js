import React from 'react';
import Game from './Game.component';
import { shallow } from 'enzyme';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn((fn) => fn()),
    useSelector: jest.fn((fn) => fn())
}));
it('renders without crashing', () => {
    shallow(<Game />);
});
