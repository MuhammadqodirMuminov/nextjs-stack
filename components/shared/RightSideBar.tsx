import Image from 'next/image';
import Link from 'next/link';
import RenderTag from './RenderTag';

const hotQuestions = [
	{
		_id: 1,
		title: 'How to Ensure Unique User Profile with ON CONFLICT in PostgreSQL Using Drizzle ORM?',
	},
	{
		_id: 2,
		title: 'How to Implement a Custom Authentication System in Next.js with JWT and TypeScript?',
	},
	{
		_id: 3,
		title: 'How to Implement a Real-Time Chat Application with WebSockets and Next.js?',
	},
	{
		_id: 4,
		title: 'How to Implement a File Upload and Download System with Next.js and Multer?',
	},
];

const popularTags = [
	{ _id: '1', name: 'JavaScript', numberOfQuestions: 4 },
	{ _id: '2', name: 'TypeScript', numberOfQuestions: 1 },
	{ _id: '3', name: 'Node.js', numberOfQuestions: 7 },
    { _id: '4', name: 'React', numberOfQuestions: 3 },
    { _id: '5', name: 'Next.js', numberOfQuestions: 2 },
];

const RightSideBar = () => {
	return (
		<section className='background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden'>
			<div>
				<h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
				<div className='mt-7 flex w-full flex-col gap-[30px]'>
					{hotQuestions.map(question => (
						<Link
							href={`/question/${question._id}`}
							key={question._id}
							className='flex cursor-pointer items-center justify-between gap-7'
						>
							<p className='body-medium text-dark500_light700'>
								{question.title}
							</p>
							<Image
								src='/assets/icons/chevron-right.svg'
								alt='chevron right'
								width={20}
								height={20}
								className='invert-colors'
							/>
						</Link>
					))}
				</div>
			</div>
			<div className='mt-16'>
				<h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
				<div className='mt-7 flex flex-col gap-4'>
					{popularTags.map(tag => (
						<RenderTag
							key={tag._id}
							_id={tag._id}
							name={tag.name}
							totalQuestions={tag.numberOfQuestions}
							showCount
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default RightSideBar;
