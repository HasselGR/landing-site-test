import './footer.styles.scss'


export const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-wrapper">
                <div className='footer-row'>
                    <div className="footer-column">
                        <h1 className='footer-title'>About Us</h1>
                        <a className='footer-link' href="#">Story</a>
                        <a className='footer-link' href="#">Scope</a>
                        <a className='footer-link' href="#">Our Info</a>
                        <a className='footer-link' href="#">Alumni</a>
                    </div>
                    <div className="footer-column">
                        <h1 className='footer-title'>Services</h1>
                        <a className='footer-link' href="#">S.E.O</a>
                        <a className='footer-link' href="#">Communities</a>
                        <a className='footer-link' href="#">Design</a>
                        <a className='footer-link' href="#">Others</a>
                    </div>
                    <div className="footer-column">
                        <h1 className='footer-title'>Branches</h1>
                        <a className='footer-link' href="#">United States</a>
                        <a className='footer-link' href="#">Canada</a>
                        <a className='footer-link' href="#">United Kingdom</a>
                        <a className='footer-link' href="#">Panama</a>
                    </div>
                    <div className="footer-column">
                        <h1 className='footer-title'>Social</h1>
                        <a className='footer-link' href="#"><i className='fa-brands fa-facebook'/>Facebook</a>
                        <a className='footer-link' href="#"><i className='fa-brands fa-twitter'/>Twitter</a>
                        <a className='footer-link' href="#"><i className='fa-brands fa-instagram'/>Instagram</a>
                        <a className='footer-link' href="#"><i className='fa-brands fa-linkedin'/>LinkedIn</a>
                    </div>
                </div>
            </div>

        </div>
    )
}