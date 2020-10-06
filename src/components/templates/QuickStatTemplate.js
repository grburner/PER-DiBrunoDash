import React, { useEffect, useState, useContext } from 'react';

import QuickStatPanel from '../../components/organisms/QuickStatPanel';
import CardDeck from 'react-bootstrap/CardDeck';
import QueryContext from '../../utilities/context/QueryContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'


const QuickStatTemplate = () => {
    const queryctx = useContext(QueryContext)

    const [hasError, setErrors] = useState(false);
    const [stats, setStats] = useState({ 
        days: '', 
        sales1: '', 
        sales2: '',
        salesd: '', 
        margin1: '', 
        margin2: '', 
        margind: '',
        aring1: '', 
        aring2: '',
        aringd: ''
    });

    useEffect(() => {
        async function fetchData() {
            // const res = await fetch(query);
            // use this ^^^ when database is live - use below for dummy data
            const res = await fetch("https://0344163c-1856-4b60-9557-754eb3d44d71.mock.pstmn.io/quickstat")
            let data
            res
                .json()
                .then(res => ( data = res ))
                .then(console.log(data))
                .then(data => setStats({
                    days: data.panel.stats.days,
                    sales1: data.sales.revenue1,
                    sales2: data.sales.revenue2,
                    salesd: data.sales.delta,
                    margin1: data.margin.margin2,
                    margin2: data.margin.margin1,
                    margind: data.margin.delta,
                    aring1: data.aring.aring1,
                    aring2: data.aring.aring2,
                    aringd: data.aring.delta
                }))
                .then(err => setErrors(err))
        }
        fetchData()
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <h4 className="px-3 pb-0 mb-0 pt-3 font-italic">QUICK STATS</h4>
                    </Row>
                    <Row className="border-bottom">
                        <p className="pl-3 my-0 font-italic text-muted">{`Last ${stats.days} days compared to previous ${stats.days} days`}</p>
                    </Row>
                </Col>
            </Row>
            <Row className="m-0">
                <CardDeck className="mt-3 w-100" border="light">
                    <Col className="p-0">
                        <QuickStatPanel header={ "SALES" } days={ stats.days } first={stats.sales1} second={stats.sales2} delta={stats.salesd}></QuickStatPanel>
                    </Col>
                    <Col className="p-0">
                        <QuickStatPanel header={ "MARGIN" } days={ stats.days } first={stats.margin1} second={stats.margin2} delta={stats.margind}></QuickStatPanel>
                    </Col>
                    <Col className="p-0">
                        <QuickStatPanel header={ "AVG RING" } days={ stats.days } first={stats.aring1} second={stats.aring2} delta={stats.aringd}></QuickStatPanel>
                    </Col>
                </CardDeck>
            </Row>
        </Container>
    )
}

export default QuickStatTemplate;