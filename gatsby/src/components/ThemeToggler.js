import React from 'react'
import PropTypes from 'prop-types'

class ThemeToggler extends React.Component {
  state = {
    theme: typeof window !== 'undefined' ? window.__theme : null,
  }

  componentDidMount() {
    var theme_color = "";
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme })

      if(localStorage.theme !== "dark") {
        theme_color = "#000000";
      } else {
        theme_color = "#fff0d4";
      }
      document.querySelector('meta[name="theme-color"]').setAttribute("content", theme_color);
    }
  }

  toggleTheme(theme) {
    window.__setPreferredTheme(theme)
  }

  render() {
    return (
      <this.props.children
        theme={this.state.theme}
        toggleTheme={this.toggleTheme}
      />
    )
  }
}

ThemeToggler.propTypes = {
  children: PropTypes.func.isRequired,
}

export default ThemeToggler