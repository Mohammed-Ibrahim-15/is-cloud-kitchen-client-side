import React from 'react';
import { FaHamburger } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer mt-12 p-10 bg-base-200 text-base-content">
                <div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl"> <FaHamburger /> IS Cloud Kitchen </Link>
                    <p>IS Cloud Kitchen Ltd.<br />Providing reliable food since 2022</p>
                </div>
                <div>
                    <span className="footer-title">Social Media</span>
                    <Link className="link link-hover">Facebook</Link>
                    <Link className="link link-hover">Instagram</Link>
                    <Link className="link link-hover">Twitter</Link>
                    <Link className="link link-hover">Whatsapp</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <p className='text-center font-semibold bg-base-200 text-base-content'>Copyright @2022 IS Cloud Kitchen</p>
        </div>
    );
};

export default Footer;