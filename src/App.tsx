import { FaUser, FaCog, FaLock } from 'react-icons/fa';
import { Accordion } from './Accordion/Accordion';

export default function App() {
	return (
		<div
			className='container'
			style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}
		>
			<Accordion
				title='User Profile'
				theme='light'
				iconPosition='left'
				icon={<FaUser />}
			>
				<p>Manage your user profile settings here.</p>
				<button
					style={{
						marginTop: '10px',
						padding: '8px 16px',
						background: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer'
					}}
				>
					Edit Profile
				</button>
			</Accordion>

			<Accordion
				title='Advanced Settings'
				theme='dark'
				iconPosition='right'
				icon={<FaCog />}
				defaultIsOpen={true}
			>
				<p>Configure advanced system settings.</p>
				<ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
					<li>Performance options</li>
					<li>Security settings</li>
					<li>Network configuration</li>
				</ul>
			</Accordion>

			<Accordion
				title='Premium Features'
				locked={true}
				onRenderTitle={(title) => (
					<h3 style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
						{title} <FaLock style={{ marginLeft: '10px', fontSize: '0.8em' }} />
					</h3>
				)}
				icon={<FaLock />}
			>
				<p>
					Unlock premium features to access exclusive content and advanced
					tools.
				</p>
				<button
					style={{
						marginTop: '10px',
						padding: '8px 16px',
						background: '#28a745',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer'
					}}
				>
					Upgrade Now
				</button>
			</Accordion>
		</div>
	);
}
