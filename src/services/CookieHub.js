import React from 'react';
import Helmet from "react-helmet"
import "./CookieHub.css"

function CookieHub() {
  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134210860-1" />
      <script type="text/javascript">
        {`
          var gtagId = 'UA-134210860-1';
          window['ga-disable-' + gtagId] = true;
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
         `}
      </script>
      <script src="https://cookiehub.net/cc/5a3c3724.js" />
      <script type="text/javascript">
        {`
        window.addEventListener("load", function() {
        window.cookieconsent.initialise({
          onInitialise: function(status) {
            if (this.hasConsented('required')) {
            }
            if (this.hasConsented('analytics')) {
              window['ga-disable-UA-134210860-1'] = false;
              gtag('config', gtagId);
            }
            if (this.hasConsented('marketing')) {
            }
          },
          onAllow: function(category) {
            if (category == 'required') {
            }
            if (category == 'analytics') {
              window['ga-disable-UA-134210860-1'] = false;
              gtag('config', gtagId);
            }
            if (category == 'marketing') {
            }
          },
          onRevoke: function(category) {
            if (category == 'required') {
            }
            if (category == 'analytics') {
              window['ga-disable-UA-134210860-1'] = true;
            }
            if (category == 'marketing') {
            }
          }
        })
        });
        `}
      </script>
   </Helmet>
  )
}

export default CookieHub
