import React, { useEffect } from 'react'
import {Col, Row} from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import restuarantSlice from '../redux/restuarantSlice'
import { fetchRestuarants } from '../redux/restuarantSlice'

function Home() {
    const allRestuarants = useSelector((state)=>state.restuarantSlice.allRestuarants)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRestuarants())
    },[])
  return (
    <>
    <Row className='mt-5 mb-5'>
        {
            allRestuarants.length>0?allRestuarants.map(restaurant=>(
                <Col className='px-5 py3' sm={12} md={6} lg={4} xl={3} >
                <RestCard restaurant={restaurant}/>
                </Col>
            ))
           :null
        }
    </Row>

    </>
  )
}

export default Home