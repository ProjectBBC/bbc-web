import { Box } from '@chakra-ui/react'
import MainNavigation from '@components/MainNavigation'
import Footer from '@components/Footer'

interface IProps {
  children: React.ReactNode
}

function App({children}: IProps) {
  return (
    <Box>
      <MainNavigation />
      <Box>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default App
