import React, { useState } from 'react';
import { Button, Htag, P, Tag, Rating } from '../components';

export default function Home(): JSX.Element {

	const [rating, setRating] = useState<number>(4);
	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Малый</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag size='m' color='primary'>primary</Tag>
			<Rating rating={rating} isEditable setRating={setRating}/>
		</>
	);
}
