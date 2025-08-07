// // src/modules/WorkTemplate/index.tsx
// import { useParams } from 'react-router-dom';

// import { Button } from '@/components/Buttons';
// import type { WorkModule } from '@/data/modules';
// import { modules } from '@/data/modules';

// export interface WorkTemplateProps extends WorkModule {
// 	question: string;
// 	answer: () => React.ReactNode;
// }

// const WorkTemplate = () => {
// 	const { workId } = useParams();
// 	const work: WorkTemplateProps = modules.find((module) => module.id === workId);

// 	return (
// 		<div className='work-template'>
// 			<div className='header'>
// 				<h1>{work.title}</h1>
// 				<p className='description'>{work.desc}</p>
// 			</div>

// 			{work.question && (
// 				<div className='content'>
// 					<section className='question-section'>
// 						<h2>과제</h2>
// 						<p>{work.question}</p>
// 					</section>

// 					{work.answer && (
// 						<section className='answer-section'>
// 							<h2>정답</h2>
// 							<div className='answer-content'>{work.answer()}</div>
// 						</section>
// 					)}
// 				</div>
// 			)}

// 			<div className='footer'>
// 				<Button type='button' to='/'>
// 					홈으로 돌아가기
// 				</Button>
// 			</div>
// 		</div>
// 	);
// };
