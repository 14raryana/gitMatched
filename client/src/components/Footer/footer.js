import React from "react";
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';
import "./index.css";

function AddFooter() {
    return (
        <Footer className="main-footer" size="mini">
            <FooterSection className="footer-title" style={{ textAlign: 'center' }} type="left" logo=".GIT MATCHED">
            </FooterSection>
            <FooterLinkList className="footer-content">
                
            </FooterLinkList>
        </Footer>
    );
}

export default AddFooter;