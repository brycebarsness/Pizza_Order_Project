import './Footer.css'

function Footer() {
    let date = new Date();
    return(
        <footer className="footer mt-auto py-3 ">
            <p>&copy;{date.getFullYear()} Bryce, Cody, Mitchell, Zach</p>
        </footer>
        
    );
}

export default Footer;