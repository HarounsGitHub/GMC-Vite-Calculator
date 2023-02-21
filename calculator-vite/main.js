import './style.css'

import { setupThemeButtons, applyTheme } from "./theme.js"
import { calcBtnFunc, setupKeyboard } from "./calculator.js"
calcBtnFunc()
setupThemeButtons()
applyTheme(0)
setupKeyboard()