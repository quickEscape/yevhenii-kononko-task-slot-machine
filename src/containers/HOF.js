import React, { useState, useEffect } from 'react';
import Div100vh from 'react-div-100vh';
import Modal from 'react-modal';
import { Header } from '../components/header/Header';
import { Content } from '../components/content/Content';
import { Footer } from '../components/footer/Footer';
import { SlotScreen } from '../components/slot-screen/SlotScreen';
import { Loader } from '../components/loader/Loader';

const API_URL = 'https://game-server.kovalevskyi.net/';

const urlParams = new URLSearchParams(window.location.search);
const uid = urlParams.get('uid') || 771;
const winDelay = 2000;

Modal.setAppElement('#root');
Modal.defaultStyles.overlay.backgroundColor = null;
Modal.defaultStyles.content = {
	...Modal.defaultStyles.content,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	top: '4%',
	right: '4%',
	bottom: '4%',
	left: '4%'
};

const HOF = () => {
	const [loaderText, setLoaderText] = useState('');
	const [isSpin, setIsSpin] = useState(false);
	const [balance, setBalance] = useState(null);
	const [slots, setSlots] = useState(null);
	const [bet, setBet] = useState(null);
	const [bets, setBets] = useState([]);
	const [win, setWin] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	useEffect(() => {
		fetch(`${API_URL}init?uid=${uid}`)
			.then(response => response.json())
			.then(data => {
				const { error, balance, last_bet, bets, rolls } = data;
				if (error) {
					const errorMsg = `..Oops! ${error}!`;
					setLoaderText(errorMsg);
					throw Error(errorMsg);
				}
				setSlots(rolls);
				setBets(bets);
				setBet(bets.indexOf(last_bet));
				setBalance(balance);
			});
	}, []);

	useEffect(() => {
		if (win) {
			// win animation start here
			console.log(`WIN! +${win}`);
			setTimeout(() => {
				setWin(null);
				// win animation stop here
			}, winDelay);
		}
	}, [win]);

	const closeModal = () => setModalIsOpen(false);

	const openModal = () => setModalIsOpen(true);

	const handlerBetDown = () => {
		if (bet > 0) setBet(bet - 1);
	};

	const handlerBetUp = () => {
		if (bet < bets.length - 1) setBet(bet + 1);
	};

	const handlerSpin = () => {
		if (isSpin) return false;
		if (balance < bets[bet]) return openModal();
		setIsSpin(true);
		console.log('spin is running...');
		// SlotScreen animation start here
		setBalance(balance => balance - bets[bet]);
		fetch(`${API_URL}spin?uid=${uid}&bet=${bets[bet]}`)
			.then(response => response.json())
			.then(data => {
				const { error, balance, last_bet, win = null, rolls } = data;
				if (error) {
					const errorMsg = `..Oops! ${error}!`;
					setLoaderText(errorMsg);
					throw Error(errorMsg);
				}
				setSlots(rolls);
				setBet(bets.indexOf(last_bet));
				setBalance(balance);
				if (win) setWin(win);
				setIsSpin(false);
				console.log('spin is ended');
				// SlotScreen animation stop here
			});
	};

	return typeof balance === 'number' ? (
		<Div100vh className="hof">
			<Header balance={balance} />
			<Content children={<SlotScreen slots={slots} />} />
			<Footer
				bet={bets[bet]}
				win={win}
				isMinusDisabled={isSpin || bet === 0}
				isPlusDisabled={isSpin || bet === bets.length - 1}
				handlerBetDown={handlerBetDown}
				handlerBetUp={handlerBetUp}
				handlerSpin={handlerSpin}
				isSpinDisabled={isSpin}
			/>
			<Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
				<button className="modal-close" onClick={closeModal}>&#10006;</button>
				<p>
					Gold not enough!
					<br />
					We need more gold!
					<br />
					Donate, donate, donate...
					<br />
					*here is buttons "PayToPlay" and donations plans*
				</p>
			</Modal>
		</Div100vh>
	) : (
		<Loader text={loaderText} />
	);
};

export default HOF;
