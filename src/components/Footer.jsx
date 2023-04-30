import {FooterNavSections} from "./FooterNavSections";
import { SocialNetworks } from "./SocialNetworks";

export const Footer = ()=>{
    return(
        <footer className="footer">
           <div className="footer__icon">
                <a href="#"><h2>Shortly</h2></a>
           </div>
           <nav className="Footer__nav">
                <FooterNavSections
                    title="Features"
                    cant={3}
                    linkText={["Link Shortening","Branded Links","Analytics"]}
                />
                <FooterNavSections
                    title="Resources"
                    cant={3}
                    linkText={["Blog","Developers","Support"]}
                />
                <FooterNavSections
                    title="Company"
                    cant={4}
                    linkText={["About","Our Team","Careers","Contact"]}
                />
           </nav>
           <SocialNetworks
                cant={4}
                nombre={["Facebook","Twitter","Pinterest","Instagram"]}
                ruta={[
                    "/assets/images/icon-facebook.svg",
                    "/assets/images/icon-twitter.svg",
                    "/assets/images/icon-pinterest.svg",
                    "/assets/images/icon-instagram.svg"
                ]}
                redireccion={["#","#","#","#"]}
           />
        </footer>
    )
}

