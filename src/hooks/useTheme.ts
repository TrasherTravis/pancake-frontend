import { useContext } from 'react'
import Cookie from 'js-cookie'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import { useTheme as useNextTheme } from 'next-themes'

export const COOKIE_THEME_KEY = 'theme'
export const THEME_DOMAIN = '.orkswap-frontend.vercel.app'

const useTheme = () => {
  const { resolvedTheme, setTheme } = useNextTheme()
  const theme = useContext(StyledThemeContext)
  setTheme('light')
  const handleSwitchTheme = (themeValue: 'light' | 'dark') => {
    try {
      setTheme(themeValue)
      Cookie.set(COOKIE_THEME_KEY, themeValue, { domain: THEME_DOMAIN })
    } catch (err) {
      // ignore set cookie error for perp theme
    }
  }

  return { isDark: false, theme, setTheme: handleSwitchTheme }
}

export default useTheme
