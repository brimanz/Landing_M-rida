import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Hero from "..//components/hero/Hero"


describe('Hero component', () => {
	
	test('must display Hero title', () =>{
		render(<Hero />);
		const wordTitle = screen.getByText(/Visita Mérida/i);

		expect(wordTitle).toBeInTheDocument();
	});


	test('must display Hero subtitle', () =>{
		render(<Hero />);
		const subTitle = screen.getByText(/Ciudad hermosa y amable/i);

		expect(subTitle).toBeInTheDocument();
	});
})

