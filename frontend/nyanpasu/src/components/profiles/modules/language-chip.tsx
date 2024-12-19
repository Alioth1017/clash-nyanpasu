import { alpha, useTheme } from '@mui/material'
import { Profile } from '@nyanpasu/interface'
import { getLanguage } from '../utils'

export const LanguageChip = ({ type }: { type: Profile.Item['type'] }) => {
  const { palette } = useTheme()

  const lang = getLanguage(type, true)

  return (
    lang && (
      <div
        className="my-auto rounded-full px-2 py-0.5 text-center text-sm font-bold"
        style={{
          backgroundColor: alpha(palette.primary.main, 0.1),
          color: palette.primary.main,
        }}
      >
        {lang}
      </div>
    )
  )
}

export default LanguageChip
