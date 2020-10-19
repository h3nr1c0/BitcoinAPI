import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JSONPretty from 'react-json-pretty';
import JSONPrettyMon from 'react-json-pretty/dist/adventure_time';
import TabList from './TabList';

function BitcoinAPI() {
    const [blockchainInfo, setBlockchainInfo] = useState({});
    const [miningInfo, setMiningInfo] = useState({});
    const [peerInfo, setPeerInfo] = useState([])
    const [rawMemory, setRawMemory] = useState({})

    const getBlockchainInfo = () => {
        axios
            .get(`/api/getblockchaininfo`)
            .then(res => {
                const data = res.data;
                const result = data.result;
                setBlockchainInfo(result);
            })
            .catch(err => console.log(err));
    };

    const getMiningInfo = () => {
        axios
            .get(`/api/getmininginfo`)
            .then(res => {
                const data = res.data;
                const result = data.result;
                setMiningInfo(result);
            })
            .catch(err => console.log(err));
    };

    const getPeerInfo = () => {
        axios
            .get(`/api/getpeerinfo`)
            .then(res => {
                const data = res.data;
                const result = data.result;
                setPeerInfo(result);
            })
            .catch(err => console.log(err));
    };

    const getRawMempool = () => {
        axios
            .get(`/api/getrawmempool`)
            .then(res => {
                const data = res.data;
                const result = data.result;
                setRawMemory(result);
            })
            .catch(err => console.log(err));        
    }

    useEffect(() => {
        getBlockchainInfo();
        getMiningInfo();
        getPeerInfo();
        getRawMempool();
        return () => {
        }
    }, [])

    return (

        <div>
            <div className="App" t>
                <p>Number of blocks: {blockchainInfo ? blockchainInfo.blocks : "N/A"}</p>
                <p>Mining Difficulty: {miningInfo ? miningInfo.difficulty : "N/A"}</p>
                <p>Number of Peers: {peerInfo ? peerInfo.length : "N/A"}</p>
                {/* <TabList /> */}
                <h4>Blockchain info:</h4>
                <JSONPretty className="pretty-json" id="blockchain-info" data={blockchainInfo} theme={JSONPrettyMon}></JSONPretty>
                <h4>Peer info:</h4>
                <JSONPretty className="pretty-json" id="peer-info" data={peerInfo} theme={JSONPrettyMon}></JSONPretty>
                {/* <h5>Raw Memory</h5> */}
                {/* <JSONPretty className="pretty-json" data={rawMemory} theme={JSONPrettyMon}></JSONPretty> */}
            </div>
        </div>
    )

    
}

export default BitcoinAPI
