import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/sabrtraveler"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/shareefrossetti/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://twitter.com/shareefrossetti"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/twitter-logo.png")}
						alt="Twitter"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
