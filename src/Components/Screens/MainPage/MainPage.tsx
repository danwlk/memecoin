import "./MainPage.css";

import Text from "../../Text";
import SocialButton from "../../SocialButton";

import backgroundVideo from "../../../assets/backgroundVideo.mp4";
import logo from "../../../assets/logo.png";
import xLogo from "../../../assets/xLogo.png";
import telegramLogo from "../../../assets/telegramLogo.png";
import pumpLogo from "../../../assets/pumpLogo.png";
import youtubeLogo from '../../../assets/youtubeLogo.png'

function MainPage() {
	return (
		<section className="main-page" id="main">
			{/* background video */}
			<video autoPlay loop className="background-video">
				<source src={backgroundVideo} type="video/mp4" />
				Your browser does not support this video.
			</video>

			{/* main logo */}
			<div className="logo-container">
				<div className="logo-img">
					<a
						className="logo"
						href="#"
						onClick={() => {
							window.location.reload();
						}}
					>
						<img className="logo" src={logo} />
					</a>
				</div>
				<div className="logo-text">
					<Text size={1}>DOOM and ISABELLE</Text>
					{/* TODO: */}
					<Text size={4}>HUAEPy9jwKBqgJbkQ28TbjzJP2zZ8yYRuENW72FCpump</Text>
				</div>
			</div>

			<div className="links">
				<div className="social-links">
					{/* twitter link */}
					<SocialButton link="https://x.com/home">
						<img className="social-img" src={xLogo} />
					</SocialButton>
					{/* telegram link */}
					<SocialButton link="https://x.com/home">
						<img className="social-img" src={telegramLogo} />
					</SocialButton>
					<SocialButton link="https://www.youtube.com/watch?v=p2qgIlpcZ1w">
						<img className="social-img" src={youtubeLogo} />
					</SocialButton>
				</div>
				<Text size={6}>All credit to the video goes to TheDashingDoctorK</Text>

				<div className="token-links">
					{/* pump fun link */}
					<SocialButton link="https://x.com/home">
						<img className="social-img" src={pumpLogo} />
					</SocialButton>
				</div>
			</div>
		</section>
	);
}

export default MainPage;
