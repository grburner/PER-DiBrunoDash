import React, { useEffect, useState } from 'react';

import QuickStatPanel from '../../components/organisms/quickStatPanel/QuickStatPanel';
import CardDeck from 'react-bootstrap/CardDeck';

const QuickStatTemplate = () => {
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
            const res = await fetch("https://0344163c-1856-4b60-9557-754eb3d44d71.mock.pstmn.io/quickstat");
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
        <div>
            <CardDeck border="light">
                <QuickStatPanel header={ "Sales" } days={ stats.days } first={stats.sales1} second={stats.sales2} delta={stats.salesd}></QuickStatPanel>
                <QuickStatPanel header={ "Margin" } days={ stats.days } first={stats.margin1} second={stats.margin2} delta={stats.margind}></QuickStatPanel>
                <QuickStatPanel header={ "Avg Ring" } days={ stats.days } first={stats.aring1} second={stats.aring2} delta={stats.aringd}></QuickStatPanel>
            </CardDeck>
        </div>
    )
}

export default QuickStatTemplate;