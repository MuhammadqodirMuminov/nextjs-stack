import QuestionCard from '@/components/cards/QuestionCard';
import HomeFilters from '@/components/home/HomeFilters';
import Filter from '@/components/shared/Filter';
import NoResult from '@/components/shared/NoResult';
import LocalSearchBar from '@/components/shared/search/LocalSearch';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import Link from 'next/link';

const questions = [
	{
		_id: '1',
		title: 'How to Ensure Unique User Profile with ON CONFLICT in PostgreSQL Using Drizzle ORM?',
		tags: [
			{
				_id: '1',
				name: 'Python',
			},
			{
				_id: '2',
				name: 'PostgreSQL',
			},
		],
		author: {
			_id: '1',
			name: 'John Smith',
			picture: 'image.svg',
		},
		upvotes: 10,
		views: 100,
		answers: 2,
		createdAt: new Date('2022-03-01T12:00:00'),
	},
	{
		_id: '2',
		title: 'How to Implement Pagination in React with Drizzle ORM?',
		tags: [
			{
				_id: '3',
				name: 'JavaScript',
			},
			{
				_id: '4',
				name: 'React',
			},
		],
		author: {
			_id: '1',
			name: 'Jane Doe',
			picture: 'image.svg',
		},
		upvotes: 5,
		views: 200,
		answers: 3,
		createdAt: new Date('2022-02-28T10:00:00'),
	},
	{
		_id: '3',
		title: 'How to Implement Lazy Loading in React with Drizzle ORM?',
		tags: [
			{
				_id: '5',
				name: 'JavaScript',
			},
			{
				_id: '6',
				name: 'React',
			},
		],
		author: {
			_id: '1',
			name: 'Bob Johnson',
			picture: 'image.svg',
		},
		upvotes: 3,
		views: 150,
		answers: 1,
		createdAt: new Date('2022-02-27T09:00:00'),
	},
	{
		_id: '4',
		title: 'How to Implement Authentication in React with Drizzle ORM?',
		tags: [
			{
				_id: '7',
				name: 'JavaScript',
			},
			{
				_id: '8',
				name: 'React',
			},
		],
		author: {
			_id: '1',
			name: 'Alice Brown',
			picture: 'image.svg',
		},
		upvotes: 7,
		views: 250,
		answers: 4,
		createdAt: new Date('2022-02-26T08:00:00'),
	},
	{
		_id: '5',
		title: 'How to Implement Sorting in React with Drizzle ORM?',
		tags: [
			{
				_id: '9',
				name: 'JavaScript',
			},
			{
				_id: '10',
				name: 'React',
			},
		],
		author: {
			_id: '1',
			name: 'Charlie Davis',
			picture: 'image.svg',
		},
		upvotes: 12,
		views: 300,
		answers: 5,
		createdAt: new Date('2022-02-25T07:00:00'),
	},
];

const Home = () => {
	return (
		<>
			<div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
				<h1 className='h1-bold text-dark100_light900'>All Questions</h1>

				<Link href='/ask-question' className='flex justify-end max-sm:w-full'>
					<Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>
						Ask a Question
					</Button>
				</Link>
			</div>

			<div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
				<LocalSearchBar
					route='/'
					iconPosition='left'
					imgSrc='/assets/icons/search.svg'
					placeholder='Search for questions'
					otherClasses='flex-1'
				/>

				<Filter
					filters={HomePageFilters}
					otherClasses='min-h-[56px] sm:min-w-[170px]'
					containerClasses='hidden max-md:flex'
				/>
			</div>

			<HomeFilters />

			<div className='mt-10 flex w-full flex-col gap-6'>
				{questions.length > 0 ? (
					questions.map(question => (
						<QuestionCard
							_id={question._id}
							title={question.title}
							tags={question.tags}
							author={question.author}
							upvotes={['2']}
							views={question.views}
							answers={[]}
							createdAt={question.createdAt}
						/>
					))
				) : (
					<NoResult
						title='There’s no question to show'
						description='Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡'
						link='/ask-question'
						linkTitle='Ask a Question'
					/>
				)}
			</div>
		</>
	);
};

export default Home;
