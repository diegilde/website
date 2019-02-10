import React from "react"
import desktopLogo from '../images/the-guild-desktop.svg';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './legal-notice.css'

const LegalNotice = () => (
  <Layout>
    <SEO title="Legal Notice | The Guild" keywords={['legal-notice']} />
      <div className="legal-notice content">
        <Link to="/"><img src={desktopLogo} style={{ margin: '3rem 0'}} alt="The Guild Logo" /></Link>
        <h1>Legal Notice</h1>

        <p>Information in accordance with Section 5 TMG</p>
        <p>
          Tina Egolf<br />
          Die Gilde<br />
          Prenzlauer Allee 186<br />
          10405 Berlin<br />
          Germany
        </p>

        <h2>Contact Information</h2>
        <p>
          Faxnumber: +49 32 221966814<br />
          E-Mail: hello@workmaker.org<br />
          Internet address: joinyourguild.online
        </p>

        <h2>VAT number</h2>
        <p>
          VAT indentification number in accorance with Section 27 a of the German VAT act<br />
          <strong>DE291659172</strong>
        </p>

        <h2>Disclaimer</h2>
        <h4>Accountability for content</h4>
        <p>The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per &sect;&sect; 8 to 10 of the Telemedia Act (TMG).</p>

        <h4>Accountability for links</h4>
        <p>Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.</p>

        <h4>Copyright</h4>
        <p>Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.</p>
        <p>Quelle: <a href="http://www.translate-24h.de"> translate-24h.de - Das &Uuml;bersetzungsb&uuml;ro im Internet</a></p>

        <h2>Graphics and Image Sources</h2>
        <p>
          Arrow icon made by <a href="https://www.flaticon.com/authors/lucy-g">Lucy G</a> from <a href="https://www.flaticon.com/">Flaticon</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons BY 3.0</a><br />
          Profession icons and celebration icon made by <a href="https://www.freepik.com">Freepik</a> from <a href="https://www.flaticon.com/">Flaticon</a> are licensed by <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons BY 3.0</a><br />
          Sad made by AomAm from the Noun Project<br />
          Background photo by <a href="https://unsplash.com/photos/3Zzsk2MG2AI?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Samara Doole</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a><br />
          &ldquo;Do More&rdquo; photo by <a href="https://unsplash.com/photos/KE0nC8-58MQ?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Carl Heyerdahl</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a><br />
          &ldquo;US&rdquo; photo by <a href="https://unsplash.com/photos/rdoRdjOk-OY?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Toa Heftiba</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
        </p>

        <Link to="/">Go back to our homepage</Link>
      </div>
  </Layout>
)

export default LegalNotice
