import { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
	const [menuOpened, setMenuOpened] = useState(false);

	function getMenuStyles(menuOpened) {
		if (window.innerWidth <= 800) {
			return { right: !menuOpened && "-100%" };
		}
	}

	return (
		<section className="h-wrapper">
			<div className="h-container flexCenter paddings innerWidth">
				<img src="./logo.png" alt="logo homyz" width={100} />

				<OutsideClickHandler
				onOutsideClick={() => setMenuOpened(false)}
				>
					<div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
						<IoMdClose
							className="close-menu"
							onClick={() => setMenuOpened(prev => !prev)}
						/>
						<a onClick={() => setMenuOpened(false)} href="#residencies">Residencies</a>
						<a onClick={() => setMenuOpened(false)} href="#value">Our Value</a>
						<a onClick={() => setMenuOpened(false)} href="#contact">Contact Us</a>
						<a onClick={() => setMenuOpened(false)} href="#getstarted">Get Started</a>
						<button onClick={() => setMenuOpened(false)} className="btn">
							<a href="">Contact</a>
						</button>
					</div>
				</OutsideClickHandler>
				<div className="menu-icon" onClick={() => setMenuOpened(prev => !prev)}>
					<BiMenuAltRight size={30} />
				</div>
			</div>
		</section>
	);
};

export default Header;
