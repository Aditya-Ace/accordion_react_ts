import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowDown, MdLock } from 'react-icons/md';
import './Accordion.css';

interface AccordionProps {
	title: string;
	children: React.ReactNode;
	icon?: React.ReactNode;
	defaultIsOpen?: boolean;
	onExpand?: () => void;
	locked?: boolean;
	onRenderTitle?: (title: string) => React.ReactNode;
	theme?: 'light' | 'dark';
	iconPosition?: 'left' | 'right';
}

export const Accordion: React.FC<AccordionProps> = ({
	title,
	children,
	icon,
	defaultIsOpen = false,
	onExpand,
	locked = false,
	onRenderTitle,
	theme = 'light',
	iconPosition = 'left'
}) => {
	const [isOpen, setIsOpen] = useState(defaultIsOpen);

	const handleToggle = () => {
		if (!locked) {
			setIsOpen(!isOpen);
			if (!isOpen && onExpand) {
				onExpand();
			}
		}
	};

	return (
		<motion.div
			className={`accordion ${theme} ${isOpen ? 'open' : ''} ${
				locked ? 'locked' : ''
			}`}
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
		>
			<motion.div
				className={`accordion-header ${iconPosition}`}
				onClick={handleToggle}
				whileHover={{
					backgroundColor: theme === 'light' ? '#f0f0f0' : '#3a3a3a'
				}}
			>
				{icon && <div className='accordion-icon'>{icon}</div>}
				<div className='accordion-title'>
					{onRenderTitle ? onRenderTitle(title) : title}
				</div>
				<motion.div
					className='accordion-arrow'
					variants={{
						open: { rotate: 180 },
						closed: { rotate: 0 }
					}}
					transition={{ duration: 0.3 }}
				>
					{locked ? <MdLock /> : <MdKeyboardArrowDown />}
				</motion.div>
			</motion.div>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						className='accordion-body'
						initial='collapsed'
						animate='open'
						exit='collapsed'
						variants={{
							open: { opacity: 1, height: 'auto', marginTop: '1px' },
							collapsed: { opacity: 0, height: 0, marginTop: '0px' }
						}}
						transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
					>
						<div className='accordion-content'>{children}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};
