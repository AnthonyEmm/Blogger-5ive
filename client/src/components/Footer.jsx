import React from "react";
import { Footer, Tooltip } from "flowbite-react";
import { Link } from "react-router-dom";
import blogger from "../assets/blog5.png";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <Footer container className="border border-t-8 border-brown-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="div">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <Tooltip content="Blogger 5ive&copy;">
                <span className="px-2 py-1">
                  <img
                    src={blogger}
                    alt="blogger5ive logo"
                    className="w-20 rounded"
                  />
                </span>
              </Tooltip>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Tech Blogs" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.theverge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Verge
                </Footer.Link>

                <Footer.Link
                  href="https://techcrunch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tech Crunch
                </Footer.Link>

                <Footer.Link
                  href="https://www.wbscodingschool.com/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WBS CODING SCHOOL BLOG
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* ... (other code remains unchanged) */}
            <div>
              <Footer.Title title="LEGAL" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>

                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider />
        <div className="w-full sm:flex sm:item-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Blogger 5ive"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Tooltip content="GitHub">
              <Footer.Icon href="#" icon={FaGithub} />
            </Tooltip>
            <Tooltip content="LinkedIn">
              <Footer.Icon href="#" icon={FaLinkedin} />
            </Tooltip>
            <Tooltip content="Discord">
              <Footer.Icon href="#" icon={FaDiscord} />
            </Tooltip>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
