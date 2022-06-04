import React,  {useEffect, useState, Fragment} from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {Typography, Divider } from "antd";
import {DownloadOutlined} from '@ant-design/icons';

const { Title, Text } = Typography;

function ViewTopicPage(props){

    const[topics,setTopics] = useState([]);

    useEffect(() => {
        axios.get('/api/topic')
            .then(response => {
                console.log(response.data);
                setTopics(response.data.topics);
            })
            .catch(error => {
                console.log(error);
            })
    },[])


    return(
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Topics </Title>
            </div>
            {topics.length > 0 && topics.map((item,index) => (
                <Fragment key={index}>
                    <Divider/>
                    <Title level={4}>
                        {item.topic}
                    </Title>
                    <p>
                        {item.description}
                    </p>
                    <p>
                        {item.students.name}
                    </p>
                    <br/>

                </Fragment>
            ))}

        </div>
    )
}

export default withRouter(ViewTopicPage);
