import { useSnackbar, VariantType } from 'notistack'

// Define a type for the reference to useSnackbar
type SnackbarRef = ReturnType<typeof useSnackbar>

let useSnackbarRef: SnackbarRef
export const SnackbarUtilitiesConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar()
  return null
}

export const SnackbarUtilities = {
  toast(message: string, variant: VariantType = 'default') {
    useSnackbarRef.enqueueSnackbar(message, { variant })
  },
  success: (message: string) => {
    SnackbarUtilities.toast(message, 'success')
  },
  info: (message: string) => {
    SnackbarUtilities.toast(message, 'info')
  },
  warning: (message: string) => {
    SnackbarUtilities.toast(message, 'warning')
  },
  error: (message: string) => {
    SnackbarUtilities.toast(message, 'error')
  },
}
