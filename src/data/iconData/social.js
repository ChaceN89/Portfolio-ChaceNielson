/**
 * @file social.js
 * @module social
 * @desc Contains all icons related to social platforms and networks.
 * @created Jan 22, 2025
 * @updated Jan 22, 2025
 */
import { FaItchIo } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";

const socialIcons = {
	WORLD: { name: "World", icon: TfiWorld, color: "black" },
	YOUTUBE: { name: "YouTube", icon: BsYoutube, color: "red" },
	INSTAGRAM: { name: "Instagram", icon: BsInstagram, color: "#EE901E" },
	LINKEDIN: { name: "LinkedIn", icon: BsLinkedin, color: "#257AB6" },
	ITCHIO: { name: "Itch.io", icon: FaItchIo, color: "#F05959" },
};

export default socialIcons