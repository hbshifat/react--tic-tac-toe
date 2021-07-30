import React from 'react';
import Board from './Board.component';
import { shallow, mount } from 'enzyme';
it('renders without crashing', () => {
    const squares = Array(9).fill(null);
    const onClick = jest.fn();
    shallow(<Board squares={squares} onClick={onClick} />);
});

it('calls onClick event on click of a board square', () => {
    let squares = Array(9).fill(null);
    const onClick = jest.fn();
    let wrapper = mount(<Board squares={squares} onClick={onClick} />);
    wrapper.find('button.square').first().simulate('click');
    expect(onClick).toBeCalledWith(0);
});
