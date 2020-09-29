import React, { useEffect, useState } from 'react';

import QuickStatPanel from '../../components/organisms/quickStatPanel/QuickStatPanel';
import CardDeck from 'react-bootstrap/CardDeck';

const QuickStatTemplate = () => {
    const [hasError, setErrors] = useState(false);
    const [stats, setStats] = useState({ days: ''});

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://0344163c-1856-4b60-9557-754eb3d44d71.mock.pstmn.io/quickstat");
            let data
            res
                .json()
                .then(res => ( data = res ))
                .then(console.log(data))
                .then(data => setStats({days: data.panel.stats.days}))
                .then(err => setErrors(err))
        }
        fetchData()
    }, []);

    return (
        <div>
            <CardDeck border="light">
                {/* <QuickStatPanel header={ headers.answer }></QuickStatPanel> */}
                <QuickStatPanel header={ "Sales" } days={ stats.days }></QuickStatPanel>
                <QuickStatPanel header={ "Margin" } days={ stats.days }></QuickStatPanel>
                <QuickStatPanel header={ "Avg Ring" } days={ stats.days }></QuickStatPanel>
            </CardDeck>
        </div>
    )
}

export default QuickStatTemplate;