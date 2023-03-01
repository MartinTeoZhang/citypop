import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import { history } from './utils'

import './app.css'
// import { AuthComponent } from '@/components/AuthComponent'
import { lazy, Suspense } from 'react'
import { ConfigProvider } from 'antd'

const Home = lazy(() => import('./pages/Home'))

function App () {
  return (


    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF1493',
          colorBgBase: '#000000',
          colorTextBase: '#FF1493',
          borderRadius: 10,

        },
      }}>
      <div className='App'>
        <Suspense
          fallback={
            <div
              style={{
                textAlign: 'center',
                marginTop: 200
              }}
            >
              loading...
            </div>
          }
        >

          <HistoryRouter history={history}>

            <Routes>
              <Route path='/' element={<Home />}></Route>
            </Routes>
          </HistoryRouter>

        </Suspense>
      </div>
    </ConfigProvider>



  )
}

export default App
