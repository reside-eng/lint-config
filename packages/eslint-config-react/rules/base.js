module.exports = {
  rules: {
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['FC'],
            message: `Do not use React.FC per proposal <https://github.com/reside-eng/guidelines/blob/main/rfcs/ui-patterns/001-disalllow-react-fc.md>`,
          },
          // Rules for consumers of Pantry React components
          {
            name: '@mui/material',
            importNames: ['Alert'],
            message: 'Please use Alert from Pantry instead.'
          },
          {
            name: '@mui/material',
            importNames: ['AlertColor'],
            message: 'Please use AlertColor from Pantry instead.'
          },
          {
            name: '@mui/material',
            importNames: ['Chip'],
            message: 'Please use Chip from Pantry instead.'
          },
          {
            name: '@mui/material',
            importNames: ['DataGrid'],
            message: 'Please use DataGrid from Pantry instead.'
          },
          {
            name: '@mui/x-date-pickers/DesktopDatePicker',
            importNames: ['DesktopDatePicker'],
            message: 'Please use DatePicker from Pantry instead.'
          },
          {
            name: '@mui/material',
            importNames: ['Dialog'],
            message: 'Please use Dialog from Pantry instead.'
          },
          {
            name: '@mui/material',
            importNames: ['DialogActions'],
            message: 'Please use DialogActions from Pantry instead.'
          },
          {
            name: '@mui/material',
            importNames: ['DialogContent'],
            message: 'Please use DialogContent from Pantry instead.'
          },
          {
            name: '@mui/material',
            importNames: ['DialogTitle'],
            message: 'Please use DialogTitle from Pantry instead.'
          },
          {
            name: '@mui/material',
            importNames: ['FormHelperText'],
            message: 'Please use HelperText from Pantry instead.'
          },
          {
            name: 'react-hot-toast',
            importNames: ['hotToast'],
            message: 'Please use toast or loadingToast from Pantry instead.'
          },
          {
            name: '@mui/material',
            importNames: ['LoadingButton'],
            message: 'Please use LoadingButton from Pantry instead.'
          },
          {
            name: '@mui/material',
            importNames: ['TextField'],
            message: 'Please use TextField from Pantry instead.'
          },
          {
            name: '@mui/material',
            importNames: ['Tooltip'],
            message: 'Please use Tooltip from Pantry instead.'
          },
          {
            name: '@mui/material',
            importNames: ['Pagination'],
            message: 'Please use TraditionalPagination from Pantry instead.'
          }
        ],
      },
    ],
  },
};
