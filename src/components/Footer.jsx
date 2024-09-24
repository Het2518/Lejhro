import React from 'react';
import { Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#fdfdfd] mt-0 min-h-[60vh] w-full flex flex-col justify-between">
            <div className="border-t border-blue-500">
                <div className="bg-[#2c7fbf] h-[10px] w-full"></div>

                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        <div className="mb-4">
                            <h3 className="text-[22px] font-black text-[#3a3632] mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="https://www.lejhro.com/innovations" className="text-[#3a3632] hover:text-[#2c7fbf] text-base font-normal">Innovations</a></li>
                                <li><a href="https://www.lejhro.com/business-services" className="text-[#3a3632] hover:text-[#2c7fbf] text-base font-normal">Business Services</a></li>
                                <li><a href="https://www.lejhro.com/financial-services" className="text-[#3a3632] hover:text-[#2c7fbf] text-base font-normal">Financial services</a></li>
                                <li><a href="http://www.recruit.lejhro.com/" target="_blank" rel="noreferrer" className="text-[#3a3632] hover:text-[#2c7fbf] text-base font-normal">Lejhro Recruiter</a></li>
                                <li><a href="https://www.lejhro.com/about" className="text-[#3a3632] hover:text-[#2c7fbf] text-base font-normal">About</a></li>
                                <li><a href="https://www.lejhro.com/blogs" className="text-[#3a3632] hover:text-[#2c7fbf] text-base font-normal">Blogs</a></li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-[22px] font-black text-[#3a3632] mb-4">Programs</h3>
                            <ul className="space-y-2">
                                <li><a href="http://www.bootcamp.lejhro.com/" target="_blank" rel="noreferrer" className="text-[#3a3632] hover:text-[#2c7fbf] text-base font-normal">Lejhro Bootcamp</a></li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-[22px] font-black text-[#3a3632] mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="https://www.lejhro.com/contact-us" className="text-[#3a3632] hover:text-[#2c7fbf] text-base font-normal">Contact</a></li>
                                <li><a href="https://www.lejhro.com/terms-of-use" className="text-[#3a3632] hover:text-[#2c7fbf] text-base font-normal">Terms of Use</a></li>
                                <li><a href="https://www.lejhro.com/privacy-statement" className="text-[#3a3632] hover:text-[#2c7fbf] text-base font-normal">Privacy Statement</a></li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-[22px] font-black text-[#3a3632] mb-4">Connect with us</h3>
                            <div className="flex space-x-4">
                                <a href="https://twitter.com/lejhro" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-[#3a3632] hover:text-[#2c7fbf]">
                                    <Twitter size={25} />
                                </a>
                                <a href="https://facebook.com/lejhro" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-[#3a3632] hover:text-[#2c7fbf]">
                                    <Facebook size={25} />
                                </a>
                                <a href="https://linkedin.com/company/lejhro" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#3a3632] hover:text-[#2c7fbf]">
                                    <Linkedin size={25} />
                                </a>
                                <a href="https://youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-[#3a3632] hover:text-[#2c7fbf]">
                                    <Youtube size={25} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-[#3a3632] text-base font-light py-8">
                © {new Date().getFullYear()} LEJHRO. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;