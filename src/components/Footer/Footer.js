import React from 'react'
import { Link } from "react-router-dom"
import { FooterLinksContainer, FooterLinksWrapper, FooterLinksItem, FooterLinkTitle, FooterLink, FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText, Form, FormInput } from "./Footer.elements"
import { Button } from "../../globalStyles";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Join our exclusive membership to receive the latest news and trends
          </FooterSubHeading>
          <FooterSubText>
            You can unsubscribe at any time.
          </FooterSubText>
            <Form>
              <FormInput name="email" type="email" placeholder="Your Email" />
                <Button fontBig>Subscribe</Button>
            </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItem>
              <FooterLinkTitle>
                About Us
              </FooterLinkTitle>
              <FooterLink to='/sign-up'>How It Works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinksItem>
            <FooterLinksItem>
              <FooterLinkTitle>
                Contact Us
              </FooterLinkTitle>
              <FooterLink to='/sign-up'>How It Works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinksItem>
            <FooterLinksItem>
              <FooterLinkTitle>
                Videos
              </FooterLinkTitle>
              <FooterLink to='/sign-up'>How It Works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinksItem>
            <FooterLinksItem>
              <FooterLinkTitle>
                Social Media
              </FooterLinkTitle>
              <FooterLink to='/sign-up'>How It Works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinksItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterContainer>
    </>
  )
}

export default Footer
