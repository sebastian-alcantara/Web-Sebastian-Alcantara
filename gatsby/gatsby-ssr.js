/*
import React from 'react';
import Layout from './src/components/Layout';
require("prismjs/themes/prism-okaidia.css");

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
*/

const React = require("react");
const Layout = require("./src/components/Layout").default;
require("prismjs/themes/prism-okaidia.css");


exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}

exports.onRenderBody = function({ setPreBodyComponents }) {
  setPreBodyComponents([
    React.createElement('script', {
      key: 'gatsby-dark-mode',
      dangerouslySetInnerHTML: {
        __html: `
          void function() {
            window.__onThemeChange = function() {}
            var preferredTheme
            try {
              preferredTheme = localStorage.getItem('theme')
            } catch (err) { }
            function setTheme(newTheme) {
              if (preferredTheme && document.documentElement.classList.contains(preferredTheme)) {
                document.documentElement.classList.replace(preferredTheme, newTheme)
              } else {
                document.documentElement.classList.add(newTheme)
              }
              window.__theme = newTheme
              preferredTheme = newTheme
              window.__onThemeChange(newTheme)
            }
            window.__setPreferredTheme = function(newTheme) {
              setTheme(newTheme)
              try {
                localStorage.setItem('theme', newTheme)
              } catch (err) {}
            }
            var darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
            darkQuery.addListener(function(e) {
              window.__setPreferredTheme(e.matches ? 'dark' : 'light')
            })
            setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
          }()
        `,
      },
    }),
  ])
}