import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>

    </ul>
     <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label for= "checkbox" >
            <input
              id ="checkbox"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>

  </nav>
)
