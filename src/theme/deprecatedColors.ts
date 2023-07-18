import { colors } from './colors'
import { opacify } from './utils'

function getDeprecatedTheme(darkMode: boolean) {
  return {
    // text
    deprecated_text4: darkMode ? colors.neutral2_dark : colors.neutral2_light,

    // backgrounds / grays

    // we could move this to `background`, but gray50 is a bit different from #FAFAFA
    deprecated_bg1: darkMode ? colors.surface1_dark : colors.surface1_light,

    deprecated_bg3: darkMode ? colors.surface2_dark : colors.surface2_light,
    deprecated_bg4: darkMode ? colors.surface3_dark : colors.surface3_light,
    deprecated_bg5: darkMode ? colors.surface4_dark : colors.surface4_light,

    //specialty colors
    deprecated_advancedBG: darkMode ? opacify(10, colors.black) : opacify(60, colors.white),

    //primary colors
    deprecated_primary2: darkMode ? colors.accent1_dark : colors.accent1_light,
    deprecated_primary3: darkMode ? colors.accent1_dark : colors.accent1_light,
    deprecated_primary4: darkMode ? colors.accent2_dark : colors.accent2_light,
    deprecated_primary5: darkMode ? colors.accent2_dark : colors.accent2_light,

    // secondary colors
    deprecated_secondary2: darkMode ? opacify(25, colors.surface1_dark) : colors.surface2_light,
    deprecated_secondary3: darkMode ? opacify(25, colors.surface1_dark) : colors.surface2_light,

    // other
    deprecated_yellow1: colors.yellow400,
    deprecated_yellow2: colors.yellow500,
    deprecated_yellow3: colors.yellow600,

    // dont wanna forget these blue yet
    deprecated_blue4: darkMode ? '#153d6f70' : '#C4D9F8',
  }
}

export const lightDeprecatedTheme = getDeprecatedTheme(false)
export const darkDeprecatedTheme = getDeprecatedTheme(true)
