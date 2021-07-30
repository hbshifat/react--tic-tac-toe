import React from 'react';
import Square from './Square.component';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const value = 'X';
    const onClick = jest.fn();
    shallow(<Square value={value} onClick={onClick} />);
});

it('Class List must have X', () => {
    const value = 'X';
    const onClick = jest.fn();
    const wrapper = shallow(<Square value={value} onClick={onClick} />);
    expect(wrapper.find('.square').hasClass('X')).toEqual(true);
});

it('Class List must have O', () => {
    const value = 'O';
    const onClick = jest.fn();
    const wrapper = shallow(<Square value={value} onClick={onClick} />);
    expect(wrapper.find('.square').hasClass('O')).toEqual(true);
});
